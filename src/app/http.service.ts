import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL:string='http://localhost:8081/employee/';

  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get(`${this.baseURL}getEmployee`);
  }

  getEmployee(id){
    return (this.http.get(`${this.baseURL}getEmployee/${id}`));
  }
}
