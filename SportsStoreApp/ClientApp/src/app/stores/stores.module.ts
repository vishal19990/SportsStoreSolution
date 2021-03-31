import {NgModule}from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {StoreComponent} from './store.component'
import {ModelModule} from '../models/models.module'
@NgModule({
  imports:[ModelModule,BrowserModule],
  declarations:[StoreComponent],
  exports:[StoreComponent]
})
export class StoresModule{}