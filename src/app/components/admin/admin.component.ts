import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  orders!: any[];

  counter: any = {};

  arr: any;

  constructor(private service: SharedService) {
    this.service.getOrders().subscribe((res:any) => {
      this.orders = res.pedidos;
      this.arr = res[0].name;

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

  deleteOrder(orderId: number) {
    this.service.deleteOrder(orderId).subscribe(() => {
      this.service.getOrders().subscribe((res) => {
        this.orders = res;
      });
    });
  }
}
