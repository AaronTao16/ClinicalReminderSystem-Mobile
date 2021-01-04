import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Order} from '../../entity/order';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  webSocketEndPoint = 'http://localhost:8080/socket';
  topic = '/topic/greetings';
  stompClient: any;
  appComponent: AppComponent;
  private order: Order;
  constructor(appComponent: AppComponent){
    this.appComponent = appComponent;
    this._connect();
  }
  _connect() {
    console.log('Initialize WebSocket Connection');
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, function(frame) {
      this.stompClient.subscribe(this.topic, function(sdkEvent) {
        this.onMessageReceived(sdkEvent);
      });
      // _this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  _send(message) {
    console.log('calling logout api via web socket');
    this.stompClient.send('/reminder/newReminder', {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    console.log('Message Recieved from Server :: ' + message);
    this.order = message; // JSON.stringify(message.body)
  }

  ngOnInit(): void {
  }

}
