import {NgModule} from '@angular/core'

import {NavHeaderComponent} from './navheader.componet'
import {NavFooterComponent}  from './navfooter.componet'
@NgModule(
  {
    import:[],
    declarations:[NavHeaderComponent,NavFooterComponent],
    exports:[NavHeaderComponent,NavFooterComponent]
  }
)
export class NavModule{}