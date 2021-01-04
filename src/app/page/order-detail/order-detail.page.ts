import { Component, OnInit } from '@angular/core';
import {Order} from '../../entity/order';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../service/order/order.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  order: Order;
  constructor(private activatedRoute: ActivatedRoute,
              private storage: Storage,
              private orderService: OrderService,
              private navCtrl: NavController) {
      // this.storage.get('pat').then((val) => {
      //     this.order = JSON.parse(val.ord);
      //     // console.log(this.order.ordTitle);
      // });
      this.getOrder();
  }

  ngOnInit() {
  }

  getOrder(){
      // console.log(this.order);
      this.activatedRoute.queryParams.subscribe(params => {
          this.order = JSON.parse(params.ord);
          console.log(this.order.ordId);
      });
  }

    orderDone(ordId: number, pro: number) {
        this.storage.get('pat').then((val) => {
            console.log(val.patId);
            const patient = {
                patId: val.patId
            };
            const order = {
                ordId,
                pro,
                patient,
            };
            this.orderService.update(order).subscribe(result => {
                console.log(result);
                if (result) {
                    alert('Congratulate! Good job!');
                    this.navCtrl.navigateForward(['/home']);
                } else {
                    alert('Oops!');
                }
            });
        });
    }
}
