import {NgModule} from '@angular/core';
import { Cart } from './cart.model';
import {ProductRepository} from './product.repository'
import {StaticDatasource} from './static.datasource';
import  {Order} from './order.model';
import { OrderRepository } from "./order.repository";

@NgModule(
  {
    imports:[],
    providers:[ProductRepository,
      StaticDatasource, Cart,Order,OrderRepository]
  }
)
export class ModelModule{

}