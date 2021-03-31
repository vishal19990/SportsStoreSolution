import {NgModule} from '@angular/core';
import { Cart } from './cart.model';
import {ProductRepository} from './product.repository'
import {StaticDatasource} from './static.datasource';

@NgModule(
  {
    imports:[],
    providers:[ProductRepository,
      StaticDatasource, Cart]
  }
)
export class ModelModule{

}