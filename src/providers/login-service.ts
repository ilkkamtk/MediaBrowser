import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the LoginService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class LoginService {

  logged: Boolean = false;

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  };

  getUser = () => {
    return this.user;
  };

  // this can be used to check if token is still valid
  getUserInfo = () => {
    const headers = new Headers({'x-access-token': this.getUser().token});
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.url + '/users/' + this.user.user_id, options)
      .map(
        (resp: Response) =>
          resp.json()
      );
  };

  login = () => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url + '/login', this.user)
      .map(
        (resp: Response) =>
          resp.json()
      )
  };

  logout = () => {
    localStorage.removeItem("user");
    this.logged = false;
    return true;
  };

  register = () => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url + '/users', this.user)
      .map(
        (resp: Response) =>
          resp.json()
      )
  };


}
