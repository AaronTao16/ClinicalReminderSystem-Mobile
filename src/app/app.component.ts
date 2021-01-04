import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Patient} from './entity/patient';
import {NotificationComponent} from './component/notification/notification.component';
import {Order} from './entity/order';
// import {WebSocketAPI} from './webSocketAPI';
import {$} from 'protractor';
import * as Socket from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages: Array<Pages>;
  result: Patient;
  order: Order;
  // webSocketEndPoint = 'http://localhost:8080/socket';
  // topic = '/topic/greetings';
  private serverUrl = 'http://localhost:8080/socket';
  private title = 'WebSockets chat';
  private stompClient;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: 'home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },

      {
        title: 'App Settings',
        url: '',
        direct: 'forward',
        icon: 'cog'
      }
    ];
    this.initializeApp();
    // this.initializeWebSocketConnection();
    // this._connect();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

  // initializeWebSocketConnection(){
  //   const ws = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(ws);
  //   const that = this;
  //   // tslint:disable-next-line:only-arrow-functions
  //   this.stompClient.connect({}, function(frame) {
  //     that.stompClient.subscribe('/reminder', (message) => {
  //       if (message.body) {
  //         $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
  //         console.log(message.body);
  //       }
  //     });
  //   });
  // }
  //
  // sendMessage(message){
  //   this.stompClient.send('/clinicalsystem/newReminder' , {}, message);
  //   $('#input').val('');
  // }

  // _connect() {
  //   console.log('Initialize WebSocket Connection');
  //   const ws = new SockJS(this.webSocketEndPoint);
  //   this.stompClient = Stomp.over(ws);
  //
  //   this.stompClient.connect({}, function(frame) {
  //     this.stompClient.subscribe(this.topic, function(sdkEvent) {
  //       this.onMessageReceived(sdkEvent);
  //     });
  //     // _this.stompClient.reconnect_delay = 2000;
  //   }, this._disconnect);
  // }
  //
  // _disconnect() {
  //   if (this.stompClient !== null) {
  //     this.stompClient.disconnect();
  //   }
  //   console.log('Disconnected');
  // }
  //
  // // // on error, schedule a reconnection attempt
  // // errorCallBack(error) {
  // //     console.log('errorCallBack -> ' + error);
  // //     setTimeout(() => {
  // //         this._connect();
  // //     }, 5000);
  // // }
  //
  // _send(message) {
  //   console.log('calling logout api via web socket');
  //   this.stompClient.send('/clinicalsystem/newReminder', {}, JSON.stringify(message));
  // }
  //
  // onMessageReceived(message) {
  //   console.log('Message Recieved from Server :: ' + message);
  //   this.order = message;
  // }
}

export interface Pages {
  title: string;
  url: any;
  direct?: string;
  icon?: string;
}
