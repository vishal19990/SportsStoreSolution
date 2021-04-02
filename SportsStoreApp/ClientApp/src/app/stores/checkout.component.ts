import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../models/order.model";
import { OrderRepository } from "../models/order.repository";

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.componet.css']
})

export class CheckoutComponent{
  orderSent: boolean = false;
  submitted: boolean = false;
  mouseoverOrder: boolean = false;
  giftWrap: string = 'false';

  constructor(public orderRepository: OrderRepository, public order: Order)
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
    debugger;
    this.submitted = true;
    if (form.valid)
    {
      this.order.giftwrap = this.giftWrap;
      this.orderRepository.saveOrder(this.order).subscribe(
        () => {
          this.orderSent = true;
          this.submitted = false;
        }
      );
    }
  }

}