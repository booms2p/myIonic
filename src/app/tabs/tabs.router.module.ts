import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: '../explore/explore.module#ExplorePageModule'
          }
        ]
      },
      {
        path: 'destination',
        children: [
          {
            path: '',
            loadChildren: '../destination/destination.module#DestinationPageModule'
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: '../cart/cart.module#CartPageModule'
          }
        ]
      },
      {
        path: 'bookings',
        children: [
          {
            path: '',
            loadChildren: '../bookings/bookings.module#BookingsPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'destination-detail',
    children: [
      {
        path: '',
        loadChildren: '../destination-detail/destination-detail.module#DestinationDetailPageModule'
      }
    ]
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: '../login/login.module#LoginPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/login', }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
