import {Component} from '@angular/core'
import {ProductRepository} from '../models/product.repository'
import {Product} from '../models/product.model'
import { Cart } from '../models/cart.model';
@Component(
  {
    selector:'app-store',
    templateUrl:'./store.component.html'
  })
  export class StoreComponent{
    public selectedCategory:string=null!
    public productsPerPage:number=4;
    public selectedPage:number=1;

    constructor(private productRepository:ProductRepository,private cart:Cart){}


    get products():Product[]{
      const pageIndex=((this.selectedPage-1)*this.productsPerPage);
      return this.productRepository.getProducts(this.selectedCategory).splice(pageIndex,this.productsPerPage);
    }

    get categories():string[]{
      return this.productRepository.getCategories();
    }
    changeCategory(newCategory?:string){
      this.selectedCategory=newCategory!;
    }

    addProductToCart(product:Product){
      // console.log(`selected Product will be added to the cart :${product}\n${JSON.stringify(product)}`)
      this.cart.addLine(product);
    }

    changePage(newPage:number){
      this.selectedPage=newPage;
    }

    changePageSize(newSize:number)
    {
      this.productsPerPage=newSize;
      this.changePage(1);
    }
    get pageCount():number{
      const result=Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage);
      // console.warn(`pageCount->${result}`)
      return result;
    }

    get PageNumbers():number[]{
      const result=Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((x,i)=>i+1);
      // console.log(`Pagenumber${result}`)
      return result;
    }
  }