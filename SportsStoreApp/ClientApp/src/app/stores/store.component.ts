import {Component} from '@angular/core'
import {ProductRepository} from '../models/product.repository'
import {Product} from '../models/product.model'
@Component(
  {
    selector:'app-store',
    templateUrl:'./store.component.html'
  })
  export class StoreComponent{
    public selectedCategory:string=null!
    constructor(private productRepository:ProductRepository){}


    get products():Product[]{
      return this.productRepository.getProducts(this.selectedCategory);
    }

    get categories():string[]{
      return this.productRepository.getCategories();
    }
    changeCategory(newCategory?:string){
      this.selectedCategory=newCategory!;
    }

    addProductToCart(product:Product){
      console.log(`selected Product will be added to the cart :${product}\n${JSON.stringify(product)}`)
    }
  }