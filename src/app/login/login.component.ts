import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
// tslint:disable-next-line:import-spacing
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  alert = false;
  // tslint:disable-next-line:max-line-length
  constructor(private adminservice: AdminService , private fb: FormBuilder , public router: Router, private toastr: ToastrService) {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      email: ['', [Validators.required , Validators.email]],
      pass: ['', Validators.required ],
      repassword: ['', Validators.required ]

    });
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.angForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get phone(){
    return this.angForm.get('phone');
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.angForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get pass(){
    return this.angForm.get('pass');
  }
  // tslint:disable-next-line:typedef
  get repassword(){
    return this.angForm.get('repassword');
  }
  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    document.querySelector('.img-btn').addEventListener('click', function()
      {
        document.querySelector('.cont').classList.toggle('s-signup');
      }
    );
  }
  // tslint:disable-next-line:typedef
  addusr() {
    // const salt = bcrypt.genSaltSync(13);
    let user;
    user = {
      name: this.angForm.get('name').value,
      phone: this.angForm.get('phone').value,
      email: this.angForm.get('email').value,
      // password: bcrypt.hashSync( this.angForm.get('pass').value, salt),
      roles: ['ROLE_USER']
    };

    this.adminservice.register(user).subscribe(
      res => {
        this.toastr.success( 'Oui', 'Succès!');
        this.toastr.info('essayez de vous connecter', 'aidez-vous!');
      },
      err => {
        console.log(err);
        this.toastr.error('une erreur s\'est produite! ');
      }
    );
  }

  // tslint:disable-next-line:typedef
  login(){
    let user1;
    user1 = {
      username: (document.getElementById('eml') as HTMLInputElement).value,
      password: (document.getElementById('psswd') as HTMLInputElement).value
    };
    this.adminservice.loginadmin(user1).subscribe(
      res => {
        this.toastr.success('Succès !');
        const token = res.token;
        localStorage.setItem('mytoken', token);
      },
      err => {
          console.log(err.message);
          this.toastr.error('Echec  !');
      }
    );
  }

}
