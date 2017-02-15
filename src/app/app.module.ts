import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {BrowsePage} from "../pages/browse/browse";
import {LoginService} from "../providers/login-service";
import {RegisterPage} from "../pages/register/register";
import {Thumbnail} from "../pipes/thumbnail";
import {MediaService} from "../providers/media-service";
import {UploadPage} from "../pages/upload/upload";
import {ViewPage} from "../pages/view/view";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    BrowsePage,
    RegisterPage,
    UploadPage,
    ViewPage,
    Thumbnail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BrowsePage,
    RegisterPage,
    UploadPage,
    ViewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService, MediaService]
})
export class AppModule {}
