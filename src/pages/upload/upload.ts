import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MediaService} from "../../providers/media-service";
import {BrowsePage} from "../browse/browse";

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  constructor(private mediaService: MediaService, private navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  upload = (event: any, value: any) => {
    // console.log(event.target.querySelector('input[type=file]'));
    const fileElement = event.target.querySelector('input[type=file]');
    const file = fileElement.files[0];

    const fd = new FormData();
    fd.append('file', file);
    fd.append('title', value.title);
    fd.append('description', value.description);

    this.mediaService.uploadMedia(fd)
      .subscribe(
        data => {
          console.log(data);
          this.navCtrl.setRoot(BrowsePage);
        }
      );
  }

}
