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
import {  CheckoutComponent} from "./stores/checkout.component";
import {StoreFirstGuard }from "./storeFirst.guard";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ContactListComponent,
    LandingPageComponent,
    // StoreComponent
    //NavFooterComponent,NavHeaderComponent
  ],
  imports: [
    BrowserModule,NavModule,StoresModule,
    RouterModule.forRoot([
    {path: 'store', component:StoreComponent,canActivate:[StoreFirstGuard]},
    {path: 'cart', component: CartDetailComponet,canActivate:[StoreFirstGuard]},
    {path: 'landing', component: LandingPageComponent,canActivate:[StoreFirstGuard]},

    {path: 'checkout', component:CheckoutComponent,canActivate:[StoreFirstGuard]},
    {path: 'login', component:LoginComponent,canActivate:[StoreFirstGuard]},
    {path: 'contactList', component:ContactListComponent,canActivate:[StoreFirstGuard]},
    {path: 'register', component:RegisterComponent,canActivate:[StoreFirstGuard]},
    {path: 'admin' ,loadChildren:()=>import ('./admin/admin.module').then(l=>l.AdminModule)},
    {path: '**', redirectTo: '/store'}
  ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
