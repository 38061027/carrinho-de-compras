import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods!: any[]


constructor(
  private route: Router,
  private service: SharedService
  ){}


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

}
