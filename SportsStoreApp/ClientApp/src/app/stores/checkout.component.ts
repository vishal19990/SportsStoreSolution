import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../models/order.model";
import { OrderRepository } from "../models/order.repository";
import { OrderDetail } from "../models/orderdetail.model";
import {OrderDetailRepository} from '../models/orderdetail.repository'
@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.componet.css']
})

export class CheckoutComponent{
  orderSent: boolean = false;
  submitted: boolean = false;
  mouseoverOrder: boolean = false;
  giftWrap: string = 'false';


  constructor(public orderRepository: OrderRepository, public order: Order,public orderDetail:OrderDetail,public orderDetailRepository:OrderDetailRepository)
  {
    order.name = 'Tintin';
    order.city = 'Mumbai';
    order.state = 'Maharastra'; order.zip = '40019';
    order.country = 'India'; order.giftwrap = 'false'; order.shipped = 'false';
    console.log(`CheckoutComponent.order and details\n ${JSON.stringify(order)}`);
  }
  callGiftWrap(data: any)
  {
    this.giftWrap = String(data.target.checked);
  }
  submitOrder(form: NgForm)
  {


    this.submitted = true;
    if (form.valid)
    {
      this.order.giftwrap = this.giftWrap;
      this.orderRepository.saveOrder(this.order).subscribe(
        (res) => {
          debugger;
          this.order.cart?.lines.forEach(x=>{ 
            this.orderDetail.productId = x.product.productId;
            this.orderDetail.orderId=res.orderId;
            this.orderDetail.productName = x.product.productName;
            this.orderDetail.price=x.product.price;
            this.orderDetail.count=x.quantity;
            this.orderDetailRepository.SaveOrdetails(this.orderDetail).subscribe((result)=>{
              console.log('SUCCESS');
              });
          });
         
          this.orderDetail.orderId=res.orderId;
          console.log(res);
          this.orderSent = true;
          this.submitted = false;
        }
      );
    }
  }

}
 
// this.order.cart.line.forEach(p => {
//   this.orderDetail.orderId=res.orderId;
//   this.orderDetail.productId=p.productId;
// });
// this.orderDetail.productId=this.order.cart?.lines.

// this.orderSent = true;
// this.submitted = false;