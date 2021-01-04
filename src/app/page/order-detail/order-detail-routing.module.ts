import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailPage } from './order-detail.page';
import {NotificationComponent} from '../../component/notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailPageRoutingModule {}
