import {Injectable} from '@angular/core';

@Injectable()

export class OrderDetail{
  public orderId?:number;
    public productId?:number;
    public productName?:string;
    public price?:number;
    public count?:number;
 
}

