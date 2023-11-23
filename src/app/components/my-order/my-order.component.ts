
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, map  } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ICart } from 'src/app/interface/cart.interface';
import { SharedService } from 'src/app/services/shared.service';




@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {
  food!: ICart
  cartItems$: Observable<any>;
  counter: any = {};
  arr: any;
 

  constructor(private auth: AuthService,
    private service:SharedService,
    private store: Store<{ cart: ICart }>) {
    this.cartItems$ = store.select('cart');
    this.cartItems$.subscribe((res) => {
      this.food = res;
      this.arr = res.name;

      this.counter = {};
      for (let i = 0; i < this.arr.length; i++) {
        if (this.counter[this.arr[i]]) {
          this.counter[this.arr[i]] += 1;
        } else {
          this.counter[this.arr[i]] = 1;
        }
      }


    });
  }


  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }





}
