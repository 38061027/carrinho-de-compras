import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ICart } from 'src/app/interface/cart.interface';

import { SharedService } from 'src/app/services/shared.service';
import { addFood } from 'src/app/store/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods!: any[];

  pedidos!: ICart;

  qtd:Observable<number>
  btn:boolean = true
  btnOrder:boolean = false
  sendOrder: boolean = false


  cartItems$: Observable<any>;

  constructor(
    private route: Router,
    private service: SharedService,
    private store: Store<{ cart: ICart }>
  ) {
    this.cartItems$ = store.select('cart');
    this.cartItems$.subscribe((res) => {
      this.pedidos = res;
    });

    this.qtd = this.store.select('cart').pipe(
      map(cartState => cartState.quantity)
    );

      this.qtd.subscribe((value)=>{

        if(value ==0){
          this.btn = true
        }else{
          this.btn = false
        }

      })

  }

  getFood() {
    this.service.getFood().subscribe((res) => (this.foods = res));
  }

  ngOnInit(): void {
    this.getFood();
  }

  onSelect(item: any) {
    this.route.navigate(['/details', item.id]);
  }

  addFood(food: ICart) {
    this.store.dispatch(addFood({ cart: food }));
  }

  sendFood() {
    this.service.sendFood(this.pedidos).subscribe();
    this.btn = true
    this.btnOrder = true
    this.sendOrder = true
  }


}
