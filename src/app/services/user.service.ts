import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class userService {

  url = "http://localhost:8080/api/utilisateur";

  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url + "/create-utilisateur",data)
  }

 

}





