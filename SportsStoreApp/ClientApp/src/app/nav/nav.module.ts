import {NgModule} from '@angular/core'

import {NavHeaderComponent} from './navheader.componet'
import {NavFooterComponent}  from './navfooter.componet'
@NgModule(
  {
    imports:[],
    declarations:[NavHeaderComponent,NavFooterComponent],
    exports:[NavHeaderComponent,NavFooterComponent]
  }
)
export class NavModule{}