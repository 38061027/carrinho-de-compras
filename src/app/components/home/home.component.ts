import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { IAppState, comida, incrementador } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods!: any[]

  nameFood$ = this.store.select('app').pipe(
    map(e => e.food)
  )
counter$ = this.store.select('app').pipe(
  map(e => e.counter)
)
  pagar:number = 0

constructor(
  private route: Router,
  private service: SharedService,
  private store:Store<{app:IAppState}>
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

  onFood(name:string , valor:string){
    const pay = parseFloat(valor)
    this.store.dispatch(incrementador())
    this.store.dispatch(comida({ food: name }));
    this.pagar +=pay
   
  }
}
