// // auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/services/auth.service';


// @Injectable({
//   providedIn: 'root',
// })
// export class canActiveAdminGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.authService.getIsAuthenticatedAdmin()) {
//       return true;
//     } else {
//       this.router.navigate(['/admin']);
//       return false;
//     }
//   }
// }
