import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MediaService} from "../../providers/media-service";

/*
  Generated class for the View page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  private media: any = {};
  private url: string = 'http://media.mw.metropolia.fi/wbma/uploads/'

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaService: MediaService) {}

  ionViewDidLoad() {
    this.mediaService.getSingleMedia(this.navParams.get('id'))
      .subscribe(
        resp => {
          this.media = resp;
          console.log(this.media);
        }
      );
  }

}
