import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models/group";
import {Student} from "../models/student";
import {Subject} from "../models/subject";


@Injectable({
  providedIn: 'root'
})

export class LoginService{

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }


}
