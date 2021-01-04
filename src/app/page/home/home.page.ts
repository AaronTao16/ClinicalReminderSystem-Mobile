import { Component } from '@angular/core';
import {MenuController, NavParams} from '@ionic/angular';
import {Order} from '../../entity/order';
import {OrderService} from '../../service/order/order.service';
import {Patient} from '../../entity/patient';
import {ActivatedRoute, Router} from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  orders: Order[];
  patient: Patient;
  patId: number;

  constructor(public menuCtrl: MenuController,
              private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private storage: Storage,
              private  router: Router) {
      this.menuCtrl.enable(true);
      this.getPatient();
      this.activatedRoute.paramMap.subscribe(() => {
          this.listOrders();
      });
  }

    getPatient() {
        this.activatedRoute.queryParams.subscribe(params => {
            console.log(params.id);
            this.patId = params.id;
        });
    }

  listOrders(){
      // this.getObject();
      this.storage.get('pat').then((val) => {
          this.orderService.getOrderList(val.patId).subscribe(
              // data => {
              //   console.log(data);
              // }
              data => this.orders = data
          );
      });

    //   this.orderService.getOrderList(this.patId).subscribe(
    //     // data => {
    //     //   console.log(data);
    //     // }
    //     data => this.orders = data
    // );
  }


    orderDetail(ord: Order) {
        // console.log(this.patient.patId);
        this.storage.set('order', JSON.stringify(ord));
        this.router.navigate(['order-detail'], {queryParams: {ord: JSON.stringify(ord)}});
    }
}
