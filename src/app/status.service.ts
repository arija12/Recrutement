import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  url = environment.production;

  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url + "/create-status",data,{headers: new HttpHeaders().set('Content-Type',"application/json")
  })
  }

  update(data:any){
    return this.httpClient.post(this.url + "/update/{Id}",data,{headers: new HttpHeaders().set('Content-Type',"application/json")
  })
  }
  getStatus(){
    return this.httpClient.get(this.url + "/get/{Id}");
  }
  }







