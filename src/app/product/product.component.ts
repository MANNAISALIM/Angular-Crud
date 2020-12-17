import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  alert = false ;
  isLoggedIn: boolean;
  projectList: any = [];
  myForm: FormGroup;
  myForm1: FormGroup;
  public id: string;
  public tit: string;
  public desc: string;
  public fl: string;
  public imgs1: string;
  public imgs2: string;
  public imgs3: string;
  public imgs4: string;
  public imgs5: string;
  public imgs6: string;
  cancelClicked: boolean;
  constructor(private adminservice: AdminService, private fb: FormBuilder) {
    const formControls = {
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      date: new FormControl('', [Validators.required]),
      img1: new FormControl('../../assets/imgs/', [Validators.required]),
      img2: new FormControl('../../assets/imgs/', [Validators.required]),
      img3: new FormControl('../../assets/imgs/', [Validators.required]),
      img4: new FormControl('../../assets/imgs/', [Validators.required]),
      img5: new FormControl('../../assets/imgs/', [Validators.required]),
      img6: new FormControl('../../assets/imgs/', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls) ;
    const  formControls1 = {
      title: new FormControl(this.tit),
      description: new FormControl(this.desc),
      date: new FormControl(this.fl),
      img1: new FormControl(this.imgs1),
      img2: new FormControl(this.imgs2),
      img3: new FormControl(this.imgs3),
      img4: new FormControl(this.imgs4),
      img5: new FormControl(this.imgs5),
      img6: new FormControl(this.imgs6),
    };
    this.myForm1 = this.fb.group(formControls1) ;
  }
  // tslint:disable-next-line:typedef
  get title(){
    return this.myForm.get('title');
  }
  // tslint:disable-next-line:typedef
  get description(){
    return this.myForm.get('description');
  }
  // tslint:disable-next-line:typedef
  get date(){
    return this.myForm.get('date');
  }
  // tslint:disable-next-line:typedef
  get img1(){
    return this.myForm.get('img1');
  }
  // tslint:disable-next-line:typedef
  get img2(){
    return this.myForm.get('img2');
  }
  // tslint:disable-next-line:typedef
  get img3(){
    return this.myForm.get('img3');
  }
  // tslint:disable-next-line:typedef
  get img4(){
    return this.myForm.get('img4');
  }
  // tslint:disable-next-line:typedef
  get img5(){
    return this.myForm.get('img5');
  }
  // tslint:disable-next-line:typedef
  get img6(){
    return this.myForm.get('img6');
  }
  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('tokad');
  }
  ngOnInit(): void {
    this.adminservice.getAllcamions().subscribe(
      result => {
        this.projectList = result;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  // tslint:disable-next-line:typedef
  addcamion(){
    this.adminservice.createCamion(this.myForm.value).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line:typedef
  delete(pjt) {
    this.adminservice.deleteCamion(pjt.id).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line:typedef
  altercamion(){
    this.adminservice.altercamion(this.id, this.myForm1.value).subscribe(
      res => {
        console.log(res);
        window.location.reload();
        this.alert = true;
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line:typedef
  altid(pjt) {
    this.id = pjt.id;
    const  formControls1 = {
      title: new FormControl(pjt.title),
      description: new FormControl(pjt.description),
      date: new FormControl(pjt.date),
      img1: new FormControl(pjt.img1),
      img2: new FormControl(pjt.img2),
      img3: new FormControl(pjt.img3),
      img4: new FormControl(pjt.img4),
      img5: new FormControl(pjt.img5),
      img6: new FormControl(pjt.img6),
    };
    this.myForm1 = this.fb.group(formControls1) ;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

