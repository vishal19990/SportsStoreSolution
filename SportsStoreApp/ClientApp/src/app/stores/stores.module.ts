import {NgModule}from '@angular/core'
import {StoreComponent} from './store.component'
import {ModelModule} from '../models/models.module'
@NgModule({
  imports:[ModelModule],
  declarations:[StoreComponent],
  exports:[StoreComponent]
})
export class StoresModule{}