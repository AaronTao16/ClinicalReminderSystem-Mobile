import { Injectable } from '@angular/core';
import {Order} from '../../entity/order';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrderList(patId: number) {
    const searchUrl = 'http://localhost:8080/order/mobile/' + patId;
    console.log(searchUrl);
    return this.httpClient.get<Order[]>(searchUrl);
  }

  update(order: {patient: {patId: number}; pro: number; ordId: number}): Observable<boolean>{
    const searchUrl = 'http://localhost:8080/order/mobile_update';
    return this.httpClient.post<boolean>(searchUrl, order);
  }
}
