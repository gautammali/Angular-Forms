import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SerchPPipe } from './serch-p.pipe';
import { UsdtoinrComponent } from './usdtoinr/usdtoinr.component';
import { CurrencyTransferPipe } from './pipes/currency-transfer.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReactiveFormComponent,
    TdFormComponent,
    ProductListComponent,
    SerchPPipe,
    UsdtoinrComponent,
    CurrencyTransferPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
