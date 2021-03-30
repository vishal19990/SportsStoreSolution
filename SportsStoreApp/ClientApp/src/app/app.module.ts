import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {NavHeaderComponent} from './nav/navheader.componet'
import {NavFooterComponent} from './nav/navfooter.componet'
@NgModule({
  declarations: [
    AppComponent,NavFooterComponent,NavHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
