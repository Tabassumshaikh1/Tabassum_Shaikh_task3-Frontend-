import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminserService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }
  postproddata(data: any) {
   
    return this.http.post(`${this.apiURL}Prod/postdata`, data)
  }
  getproducts(){
    return this.http.get(`${this.apiURL}Prod/getproduct`)
  }
  getDataById(id:any){
    return this.http.post(`${this.apiURL}Prod/getproductbyid`,id) 
  }
  updatedata(data:any){
    return this.http.post(`${this.apiURL}Prod/updateprod`, data)
  }
  deleteProd(id:any){
    return this.http.post(`${this.apiURL}Prod/deleteprod`,id) 
  }
}
