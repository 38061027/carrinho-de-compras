import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { canActiveGuard } from './core/guards/can-active.guard';
import { AdminComponent } from './components/admin/admin.component';
import { canActiveAdminGuard } from './core/guards/can-active-admin.guard';


const routes: Routes = [
{path: '', component: HomeComponent, canActivate:[canActiveGuard]},
{path: 'details/:id', component: FoodDetailsComponent, canActivate:[canActiveGuard]},
{path: 'admin', component: AdminComponent, canActivate:[canActiveAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
