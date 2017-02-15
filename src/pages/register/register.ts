import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginService} from "../../providers/login-service";
import {LoginPage} from "../login/login";
import {BrowsePage} from "../browse/browse";

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  private user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register = (value: any) => {
    //console.log(value);
    this.user = value;
    this.loginService.setUser(this.user);
    this.loginService.register().subscribe(
      resp => {
        this.user.user_id = resp.user_id;
        this.loginService.setUser(this.user);
        // automagically login
        this.loginService.login().subscribe(
          resp => {
            // save userdata to Local Storage
            this.user = resp.user;
            this.user.token = resp.token;
            this.loginService.setUser(this.user);
            localStorage.setItem("user", JSON.stringify(this.user));
            this.loginService.logged = true;
            this.navCtrl.setRoot(BrowsePage);
          }
        )
      },
      error => {
        console.log(error);
      }
    );
  }

}
