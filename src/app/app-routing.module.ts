import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'details/:id', component: FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
