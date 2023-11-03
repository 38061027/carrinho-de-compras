import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeFood, reset } from 'src/app/store/actions/cart/cart.actions';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {


  food:any

  quantityItems$!: Observable<number>;

  constructor(private store: Store<{cartFoodReducer:number}>){
    this.quantityItems$ = store.select("cartFoodReducer");
    this.quantityItems$.subscribe(
      res => {

        this.food = res
        console.log(this.food)
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
