import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'destination', loadChildren: './destination/destination.module#DestinationPageModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'destination-detail', loadChildren: './destination-detail/destination-detail.module#DestinationDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
