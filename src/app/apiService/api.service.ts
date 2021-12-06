import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://q2wso2.moduurn.ca/organizationapi/v1/organizations/5f5f89c542b7310f582cee00/events"
 

  constructor( private http:HttpClient ) { }

  getAllEevents(){
    
   return this.http.get(this.url)
    
     
  }
}
