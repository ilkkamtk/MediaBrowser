import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the PipesThumbnail pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'thumbnail'
})
@Injectable()
export class Thumbnail {
  /*
    Takes a value and makes it lowercase.
   */
  transform(filename: string, size?: string): any {
    const parts: any = filename.split('.');
    let ext: string = '';
    switch (size){
      case 'small':
        ext = '-tn160';
        break;
      case 'medium':
        ext = '-tn320';
        break;
      case 'large':
        ext = '-tn640';
        break;
      default:
        ext = '';
        break;
    }

    return parts[0] +  ext + '.png';
  }
}
