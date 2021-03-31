import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// both these module added to single file
// import {NavHeaderComponent} from './nav/navheader.componet'
// import {NavFooterComponent} from './nav/navfooter.componet'
// import  {StoreComponent} from './stores/store.component'
import {NavModule} from './nav/nav.module';
import {StoresModule} from './stores/stores.module';
import {RouterModule} from '@angular/router'
import { StoreComponent } from './stores/store.component';
import { CartDetailComponet } from './stores/cartDetails.component';
@NgModule({
  declarations: [
    AppComponent,
    // StoreComponent
    //NavFooterComponent,NavHeaderComponent
  ],
  imports: [
    BrowserModule,NavModule,StoresModule,
    RouterModule.forRoot([
    {path: 'store', component:StoreComponent},
    {path: 'cart', component: CartDetailComponet},
    {path: '**', redirectTo: '/store'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
