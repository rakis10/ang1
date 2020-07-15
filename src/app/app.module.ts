import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { PhoneService } from './phone.service';
import { ShoppingService } from './shopping.service';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogueComponent,
    BasketComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PhoneService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
