import { Component, OnInit } from '@angular/core';
import{ProductService}  from '../../shared-service/product.service';
import{Product}  from '../../product';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-productManager',
  templateUrl: './productManager.component.html',
  styleUrls: ['./productManager.component.css']
})
export class ProductManagerComponent implements OnInit {
  private products:Product[];
  constructor(private _productService:ProductService, private _router:Router) { }

  ngOnInit() {
      this._productService.getProducts().subscribe((products)=>{
        console.log(products);
        this.products=products;
      },(error)=>{
        console.log(error);
      })
  }
  deleteProduct(product){
    this._productService.deleteProduct(product.id).subscribe((data)=>{
        this.products.splice(this.products.indexOf(product),1);
    },(error)=>{
      console.log(error);
    });
  }

  updateProduct(product){  
     this._productService.setter(product);
     this._router.navigate(['/op']);
  }
   
  newProduct(){
     let product = new Product();
     this._productService.setter(product);
     this._router.navigate(['/op']);
  }
}
