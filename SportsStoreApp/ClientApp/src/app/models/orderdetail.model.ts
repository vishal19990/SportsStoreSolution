import {Injectable} from '@angular/core';
import {Cart} from './cart.model';
@Injectable()

export class OrderDetail{
  public orderId?:number;
    public productId?:string;
    public productName?:string;
    public price?:number;
    public count?:number;
  constructor(
    public cart?:Cart
  ){}
}

