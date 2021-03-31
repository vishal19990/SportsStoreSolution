import {NgModule}from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreComponent} from './store.component';
import {ModelModule} from '../models/models.module';
import {CounterDirective} from './counter.directive';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CartDetailComponet} from './cartDetails.component'
@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule,RouterModule],
  declarations:[StoreComponent,CounterDirective,CartDetailComponet],
  exports:[StoreComponent,CartDetailComponet]
})
export class StoresModule{}