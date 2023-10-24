import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit{

  id:string
  food!: any

  constructor(
    private service: SharedService,
    private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id']
  }



ngOnInit(): void {
this.service.getFood().subscribe(
  res => {
     this.food = res.find(item => item.id === this.id)

  }
)
}
}
