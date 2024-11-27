import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL= ['http://localhost:8080']


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http:HttpClient
  ) { }

  sign(signRequest:any):Observable<any>{

    return this.http.post(BASE_URL + "sign-up",signRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }


}
