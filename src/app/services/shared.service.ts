import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../interface/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api-carrinho-38061027.vercel.app';
  getFood():Observable<any[]> {
   return this.http.get<any[]>(`${this.baseUrl}/foods`);
  }

  sendFood(pedidos:ICart):Observable<ICart>{
    return this.http.post<ICart>(`${this.baseUrl}/pedidos`, pedidos);
  }

  getOrders():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pedidos`);
   }

   deleteOrder(id: number) {
    return this.http.delete(`${this.baseUrl}/pedidos/${id}`);
  }


}
