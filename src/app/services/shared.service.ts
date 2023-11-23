import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../interface/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/foods';
  getFood():Observable<any[]> {
   return this.http.get<any[]>(this.baseUrl);
  }

  sendFood(pedidos:ICart):Observable<ICart>{
    return this.http.post<ICart>('http://localhost:3000/pedidos', pedidos);
  }
}
