import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {AdminComponent } from './admin.componet';
import {  OrderTableComponent} from './ordertable.component';
import { ProductTableComponent } from './producttable.component';
import { ProductEditorComponent } from './producteditor.component';
import { FormsModule } from '@angular/forms';

const adminRouting=RouterModule.forChild([
  {
    path:'main',component:AdminComponent,children:[
      {path:'products/mode/:id',component:ProductEditorComponent},
      {path:'products/mode',component:ProductEditorComponent},
      {path:'products',component:ProductTableComponent},
      {path:'orders',component:OrderTableComponent},
    ]
  },
  {path:'**',redirectTo:'/store'}
]);

@NgModule(
  {
    imports:[CommonModule,FormsModule,adminRouting],
    declarations:[AdminComponent,ProductTableComponent,ProductEditorComponent,OrderTableComponent],
    providers:[]
  }
)

export class AdminModule{ }





