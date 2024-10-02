import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit  {
     products:any[]=[];
     id!: number;
     firstname!: string;
     lastname!: string;
     email!: string;
    showForm = false;
    editMode = false;   
     
     // observable = interval(1000);
    

    constructor(private ps:ProductService){
      
    };

   ngOnInit(): void {
 
   // this.observable.subscribe(x => this.GetProducts())
    this.GetProducts();
     console.log("NG0INIT called")
   }

    GetProducts()
    {
       this.ps.GetProducts().subscribe((arg:any) =>this.products = arg  );   
       console.log("GetProducts called")
    }
  remove(id:number)
 {
   let d = confirm("Are you sure?");
   if (d) {
      this.ps.deleteData(id).subscribe((data: any) => {
        this.products = data;      
      });
   }
 }
 add()
 {
   this.showForm = true;
   document.body.style.backgroundColor='rgba(0,0,0,0.4)'
 }
 stop()
{
  this.showForm = false;
  document.body.style.backgroundColor = 'white';
}
clear()
{
  this.showForm = false;
  this.firstname='';
  this.lastname='';
  this.email='';
  
}
update(id:number)
{
  console.log(id)
  this.id=id
  this.editMode = true;
  this.showForm = true;
}
submitData()
{
  if (this.editMode) {
     let newBook = {
       id: this.id,
       firstname: this.firstname,
       lastname: this.lastname,
       email:this.email
    };
    this.ps.putData(newBook, this.id).subscribe((data:any) =>
    {
      this.products=data; 
      this.clear();
    }
    )
  } else {
    console.log("Add") 
    let newBook = {
       id: this.id,
       firstname: this.firstname,
       lastname: this.lastname,
       email:this.email
     };
     this.ps.postData(newBook).subscribe((data:any) => {
       this.products=data;   
       this.stop();
       this.clear();
     });
  }
 
 

}
}
