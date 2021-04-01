import {NgModule} from '@angular/core';
import { Cart } from './cart.model';
import {ProductRepository} from './product.repository'
import {StaticDatasource} from './static.datasource';
import  {Order} from './order.model';
import { OrderRepository } from "./order.repository";
import {RestDataSource} from './rest.datasouce'
import { HttpClientModule} from "@angular/common/http";

@NgModule(
  {
    imports:[HttpClientModule],
    providers:[ProductRepository,
      StaticDatasource, Cart,Order,OrderRepository,{provide:StaticDatasource,useClass:RestDataSource},RestDataSource]
  }
)
export class ModelModule{

}