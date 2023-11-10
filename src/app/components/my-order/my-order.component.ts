import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import {  removeFood, reset } from 'src/app/store/actions/cart/cart.actions';
import { ICart } from 'src/app/store/interfaces/cart';


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {


  food:any

  f:any[] = []
  quantityItems$!: Observable<any>;

  constructor(private store: Store<{cartFoodReducer:ICart}>){
    this.quantityItems$ = store.select("cartFoodReducer");
    this.quantityItems$.subscribe(
      res => {
        this.food = res
        if (res && res.comidas) {
          this.f.push(res.comidas.join(''));
          console.log(this.f);
        }

   

      }
    )
  }

  removeFood(id:number){
    this.store.dispatch(removeFood({id:id}))
}
reset(){
    this.store.dispatch(reset())
}


}
