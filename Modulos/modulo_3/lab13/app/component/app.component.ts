import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'my-app', 
  templateUrl: 'app/templates/product.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {

	title: string = "Mis productos";
	products: Product[];

	constructor(private productService: ProductService){}

	
	ngOnInit(){
		this.productService.getProducts()
		.then(products => this.products = products)
		.catch(error => console.log(error));
	}

}