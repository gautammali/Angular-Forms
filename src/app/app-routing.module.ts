import { UsdtoinrComponent } from './usdtoinr/usdtoinr.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'reactiveform',component:ReactiveFormComponent},
  {path:'tdform',component:TdFormComponent},
  {path:'foodlist',component:ProductListComponent},
  {path:"MoneyConvertor",component:UsdtoinrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
