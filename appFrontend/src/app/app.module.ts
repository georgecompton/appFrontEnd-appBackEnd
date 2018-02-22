import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './components/productManager/productManager.component';
import { ProductFormComponent } from './components/productForm/productForm.component';
import{ProductService}   from './shared-service/product.service';
const appRoutes:Routes=[
  {path:'', component:ProductManagerComponent},
    {path:'op', component:ProductFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    ProductFormComponent  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
