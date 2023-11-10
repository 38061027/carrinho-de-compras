
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedService } from 'src/app/services/shared.service';
import { addFood } from 'src/app/store/actions/cart/cart.actions';
import { ICart } from 'src/app/store/interfaces/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods!: any[]

  pagar:number = 0

constructor(
  private route: Router,
  private service: SharedService,
  private store: Store<{cartFoodReducer:ICart}>
  ){

  }


  getFood(){
    this.service.getFood().subscribe(
      res => this.foods =res
    )
  }

  ngOnInit(): void {
      this.getFood()
  }

  onSelect(item:any){
  this.route.navigate(['/details', item.id])
  }

  addFood(food:string[]){
    this.store.dispatch(addFood({item: food}))

}




}
