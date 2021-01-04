import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NotificationComponent} from './component/notification/notification.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./page/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
