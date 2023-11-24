import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  orders!: any[]

constructor(private service: SharedService){

  this.service.getFood().subscribe(
    res => this.orders = res
  )

}

}
