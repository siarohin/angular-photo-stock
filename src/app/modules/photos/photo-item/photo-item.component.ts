import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IPhoto} from "../../../core";

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoItemComponent {
  private _photo: IPhoto;
  public photoPath: string;

  @Input()
  public set photo(value: IPhoto) {
    this._photo = value;
    this.photoPath = `url(${value.path.medium})`;
  }

  public get photo(): IPhoto {
    return this._photo;
  }
}
