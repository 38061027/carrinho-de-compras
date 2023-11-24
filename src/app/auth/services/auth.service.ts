import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedCostumer = false;
  private isAuthenticatedAdmin = false;

  private loggedIn = new BehaviorSubject<boolean>(false)



  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  login(credentials:Credentials):void{
    localStorage.setItem('token',credentials.password)
    this.loggedIn.next(true);


    if (credentials.mesa === 'cliente') {
      this.isAuthenticatedCostumer = true;
      this.router.navigate([''])
    }
    if (credentials.mesa === 'admin') {
      this.isAuthenticatedAdmin = true;
      this.router.navigate(['/admin'])
    }
  }


  logout():void{
    localStorage.clear()
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
    this.isAuthenticatedCostumer = false;
    this.isAuthenticatedAdmin = false;
  }

  getIsAuthenticatedCostumer(): boolean {
    return this.isAuthenticatedCostumer;
  }
  getIsAuthenticatedAdmin(): boolean {
    return this.isAuthenticatedAdmin;
  }
}
