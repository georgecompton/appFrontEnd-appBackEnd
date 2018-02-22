import { Component, OnInit } from '@angular/core';
import{Product}  from '../../product';
import{Router}  from '@angular/router';
import{ProductService}  from '../../shared-service/product.service';

@Component({
  selector: 'app-productForm',
  templateUrl: './productForm.component.html',
  styleUrls: ['./productForm.component.css']
})
export class ProductFormComponent implements OnInit {
  private product:Product;

  constructor(private _productService:ProductService,private _rotuer:Router) { }

  ngOnInit() {
    this.product=this._productService.getter();
  }

  processForm(){
    if(this.product.id==undefined){
       this._productService.createProduct(this.product).subscribe((product)=>{
         console.log(product);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._productService.updateProduct(this.product).subscribe((product)=>{
         console.log(product);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
