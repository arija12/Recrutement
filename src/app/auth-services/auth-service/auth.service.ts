import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

const BASIC_URL = ['http://localhost:8080/api/v1/auth/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';


  constructor(private httpClient:HttpClient) { }


  


    
  logi(email: string): Observable<User[]> {
    const loginUrl = `${this.apiUrl}?email=${email}`;
    return this.httpClient.get<User[]>(loginUrl);
  }

  
  register(user: User): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }




  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }
}
