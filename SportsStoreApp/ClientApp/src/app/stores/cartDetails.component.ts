import {Component} from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  templateUrl: './cartDetails.component.ts'
})
export class CartDetailComponet {
  constructor(public cart: Cart ){

  }
}