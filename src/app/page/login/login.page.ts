import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IonNav, MenuController, NavController, NavParams} from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  onLoginForm: FormGroup;

  constructor(private  authService: AuthService,
              private  router: Router,
              private formBuilder: FormBuilder,
              private navCtrl: NavController,
              private storage: Storage) { }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      username: [null, Validators.compose([
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required
      ])]
    });
  }



  login(key: string, value: any) {
    // console.log(this.onLoginForm.controls.username.value);
    this.username = this.onLoginForm.controls.username.value;
    this.password = this.onLoginForm.controls.password.value;
    this.authService.login(this.username, this.password).subscribe(result => {
      // console.log(result);
      if (result != null) {
        this.storage.remove('pat');
        this.storage.set('pat', result);
        this.router.navigate(['home'], {queryParams: {id: result.patId, name: result.fName + ' ' + result.lName}});
        // this.navCtrl.navigateForward(['/home']);
      } else {
        alert('Wrong username or password!');
      }
    });
  }


  logout() {
    this.storage.clear();
    this.navCtrl.navigateRoot('/');
  }
}
