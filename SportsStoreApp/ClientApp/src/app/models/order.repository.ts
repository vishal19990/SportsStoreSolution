import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from './order.model'
import {StaticDatasource} from './static.datasource';
import {RestDataSource} from './rest.datasouce'

@Injectable()
export class OrderRepository{
  private orders:Order[]=[];
  constructor(private dataSource:RestDataSource)
  {}
  saveOrder(order:Order):Observable<Order>{
    return this.dataSource.saveOrder(order);
  }
}