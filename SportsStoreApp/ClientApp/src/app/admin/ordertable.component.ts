import {Component} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderRepository} from '../models/order.repository';
import {OrderDetail} from '../models/orderdetail.model';
import {OrderDetailRepository} from '../models/orderdetail.repository'
@Component(
  {
    templateUrl:'./ordertable.component.html'
  }
)

export class OrderTableComponent {
  includeShipped:boolean=false;
  constructor(private orderRepository:OrderRepository,private orderDetailRepository:OrderDetailRepository){}

  getOrders():Order[]{
    return this.orderRepository.getOrders().filter(o=>this.includeShipped||o.shipped=='false');

  }
  getOrderDetails():OrderDetail[]{
    return this.orderDetailRepository.getOrderDetails();

  }

  getOrderDetailsById(id: number):OrderDetail[]{
    return this.orderDetailRepository.getOrderDetails().filter( od => od.orderId === id);

  }
  // getOrderWithOrderDeatils():any{
  //   debugger;
  //   let array: OrderDetail[] = [];
  //   array = this.getOrderDetails();
  //   array.forEach(x => {
  //     x.orderId == this.orderRepository.getOrders().filter(od => od.orderId);
  //     console.log(x);
  //   });
  //   //return orders;
  // }
  markedShipped(order:Order)
  {
    order.shipped='true';
    this.orderRepository.updateOrder(order);
  }
  delete(id:number)
  {
    this.orderRepository.deleteOrder(id);
  }
 }