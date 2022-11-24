import {Component} from '@angular/core';
import {IPhoto} from "../../core";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  public photos: IPhoto[];

  constructor() {

  }
}
