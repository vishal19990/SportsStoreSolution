import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {NavHeaderComponent} from './navheader.componet';
import {NavFooterComponent}  from './navfooter.componet';
import {CartSummaryComponent} from '../stores/cartSummary.component';
import {RouterModule} from '@angular/router'
@NgModule(
  {
    imports:[BrowserModule,RouterModule],
    declarations:[ NavHeaderComponent,NavFooterComponent,CartSummaryComponent],
    exports:[NavHeaderComponent,NavFooterComponent]
  }
)
export class NavModule{}