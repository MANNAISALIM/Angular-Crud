import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private registerUserUrl = 'https://jsonplaceholder.typicode.com/posts';
  private loginUrl = 'https://crudcrud.com/api/dac9b2c918a84b988ce69b8edfa93d95/unicorns';
  private camionsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:ban-types typedef
  loginadmin(user: Object){
    return this.http.post<any>(this.loginUrl, user);
  }
  // tslint:disable-next-line:ban-types
  register(user: Object): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, user);
  }
  // tslint:disable-next-line:ban-types
  getAllcamions(): Observable <Object> {
    return this.http.get<any>( this.camionsUrl);
  }
  // tslint:disable-next-line:ban-types
  altercamion(id: string, value: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, value);
  }

  // tslint:disable-next-line:ban-types
  deleteCamion(id: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, id);
  }

  // tslint:disable-next-line:ban-types
  createCamion(value: any): Observable <Object> {
    return this.http.post<any>( this.registerUserUrl, value);
  }


}
