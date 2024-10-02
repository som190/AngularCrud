import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private hc:HttpClient) { }

  GetProducts()
  {
    return this.hc.get('https://localhost:44393/api/Employee');
  }

  deleteData(id:number)
  {
     return this.hc.delete(`https://localhost:44393/api/Employee/${id}`);
  }
  postData(data: any) {
    return this.hc.post('https://localhost:44393/api/Employee',data);
  }
  putData(data: any, id: number) {
    return this.hc.put(`https://localhost:44393/api/Employee/${id}`, data);
  }
}
