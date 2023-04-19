import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { VwRouteGaurd } from './vwUrlRoute.gaurd';

const routes: Routes = [
  //path sequence matters alot
  {path : "store" , component : StoreComponent ,canActivate:[VwRouteGaurd]},
  {path : "cart" , component : CartDetailComponent,canActivate:[VwRouteGaurd]},
  {path : "checkout" , component : CheckoutComponent,canActivate:[VwRouteGaurd]},
  {path : "**" , redirectTo: "/store"} //fallback mechanism
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[VwRouteGaurd]
})
export class AppRoutingModule { }
