import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginService} from "./login-service";

/*
  Generated class for the MediaService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: Http, private loginService: LoginService) {
  }

  getMedia = () => {
    return this.http.get(this.url + '/media')
      .map(
        res =>
          res.json()
      );
  };

  getSingleMedia = (id) => {
    return this.http.get(this.url + '/media/' + id)
      .map(
        res =>
          res.json()
      );
  };

  uploadMedia = (formContent: any) => {
    const token = this.loginService.getUser().token;
    console.log('token: '+token);
    return this.http.post(this.url + '/media?token=' + token, formContent)
      .map(
        res =>
          res.json()
      );
  }

}
