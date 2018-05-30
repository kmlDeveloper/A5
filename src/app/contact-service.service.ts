import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactServiceService {
 
  constructor(private http:HttpClient) { }

  getAllContact(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
  


