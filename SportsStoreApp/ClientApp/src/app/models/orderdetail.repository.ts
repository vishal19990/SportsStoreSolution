import {Injectable} from '@angular/core';
import { from } from 'rxjs';
import {Observable} from 'rxjs';
import { OrderDetail } from './orderdetail.model';
import {RestDataSource} from './rest.datasouce';
@Injectable()

export class OrderDetailRepository{
  private orderDetails:OrderDetail[]=[];
  constructor(private dataSource:RestDataSource){}

  getOrderDetails():OrderDetail[]{
    this.dataSource.getOrderDetails().subscribe((od)=>this.orderDetails=od,(err)=>{
      console.log('orderDetailRepository.getOrderDetails:error\n${err}');});
      return this.orderDetails;
  }
  SaveOrdetails(orderdetail:OrderDetail):Observable<OrderDetail>{
    debugger;
    return this.dataSource.SaveOrdetails(orderdetail);
    }
 
}