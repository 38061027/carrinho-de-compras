import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {

  @Input() food!:any
  @Input() quantidade:any =0
  @Input() pay:number =0




}
