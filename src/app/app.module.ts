import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartFoodReducer } from './store/reducers/cart/cart.reducer';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyOrderComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({cartFoodReducer:cartFoodReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
