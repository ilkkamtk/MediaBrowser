import {Component} from '@angular/core';
import {MediaService} from "../../providers/media-service";
import {PhotoViewer} from 'ionic-native';
import {StreamingMedia, StreamingVideoOptions} from 'ionic-native';
import {NativeAudio} from 'ionic-native';
import {NavController} from "ionic-angular";
import {ViewPage} from "../view/view";


/*
 Generated class for the Browse page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
  private images: any = [];

  constructor(private mediaService: MediaService, private navCtrl: NavController) {
  }

  private viewMedia = (id) => {
    this.navCtrl.push(ViewPage,{
      id: id
    });

    /* Use native players:
    const url: string = 'http://media.mw.metropolia.fi/wbma/uploads/' + file;
    console.log(type);
    if (type === 'image') {
      PhotoViewer.show(url);
    } else {
        const options: StreamingVideoOptions = {
          successCallback: () => {
            console.log('Video played')
          },
          errorCallback: (e) => {
            console.log('Error streaming')
          },
          orientation: 'landscape'
        };

        StreamingMedia.playVideo(url, options);
    }
    */
  };

  ionViewDidLoad() {
    this.mediaService.getMedia().subscribe(
      res => {
        this.images = res;
        console.log(res);
      }
    );
  }

}
