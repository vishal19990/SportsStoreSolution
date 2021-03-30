import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// both these module added to single file
// import {NavHeaderComponent} from './nav/navheader.componet'
// import {NavFooterComponent} from './nav/navfooter.componet'
import {NavModule} from './nav/nav.module';
@NgModule({
  declarations: [
    AppComponent
    //NavFooterComponent,NavHeaderComponent
  ],
  imports: [
    BrowserModule,NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
