import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {LoginService} from "../../providers/login-service";
import {BrowsePage} from "../browse/browse";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private user: any = {};

  constructor(private navCtrl: NavController, private loginService: LoginService) {
  }

  ionViewDidLoad() {
    if (localStorage.getItem("user") !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem("user")));
      this.loginService.getUserInfo()
        .subscribe(
          resp => {
            // console.log(this.loginService.getUser().token);
            this.loginService.logged = true;
            this.navCtrl.setRoot(BrowsePage);
          },
          error => {
            console.log(error);
            this.loginService.logout();
          }
        );
    }
    /*else if (this.loginService.getUser().password !== undefined){
     this.loginService.login();
     }*/
  }

  login = (value: any) => {
    // console.log(value);
    this.loginService.setUser(value);
    this.loginService.login().subscribe(
      resp => {
        // save userdata to Local Storage
        this.user = resp.user;
        this.user.token = resp.token;
        this.loginService.setUser(this.user);
        localStorage.setItem("user", JSON.stringify(this.user));
        this.loginService.logged = true;
        this.navCtrl.setRoot(BrowsePage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
