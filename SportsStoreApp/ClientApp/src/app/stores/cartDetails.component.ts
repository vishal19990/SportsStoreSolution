import {Component} from '@angular/core';
import { Cart } from '../models/cart.model';


@Component({
  templateUrl: './cartDetails.componet.html'
})
export class CartDetailComponet {
  constructor(public cart: Cart ){

  }
}