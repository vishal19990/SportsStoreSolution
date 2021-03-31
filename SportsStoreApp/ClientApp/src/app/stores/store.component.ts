import {Component} from '@angular/core'
import {ProductRepository} from '../models/product.repository'
import {Product} from '../models/product.model'
@Component(
  {
    selector:'app-store',
    templateUrl:'./store.component.html'
  })
  export class StoreComponent{
    constructor(private productRepository:ProductRepository){}


    get products():Product[]{
      return this.productRepository.getProducts();
    }

    get categories():string[]{
      return this.productRepository.getCategories();
    }
  }