import { Injectable } from '@angular/core';
import {Patient} from '../../entity/patient';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<Patient>{
    const url = 'http://localhost:8080/patient/login';
    console.log(userName);
    return this.httpClient.post<Patient>(url, {userName, password});
  }

  authenticate(pat: Patient){
  }
}
