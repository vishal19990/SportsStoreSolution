import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// both these module added to single file
// import {NavHeaderComponent} from './nav/navheader.componet'
// import {NavFooterComponent} from './nav/navfooter.componet'
// import  {StoreComponent} from './stores/store.component'
import {NavModule} from './nav/nav.module';
import {StoresModule} from './stores/stores.module'
@NgModule({
  declarations: [
    AppComponent,
    // StoreComponent
    //NavFooterComponent,NavHeaderComponent
  ],
  imports: [
    BrowserModule,NavModule,StoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
