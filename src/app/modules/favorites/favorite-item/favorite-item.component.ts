import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IPhoto} from "../../../core";

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteItemComponent {
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

  @Output() public navigate = new EventEmitter<IPhoto>();

  public onClick(): void {
    this.navigate.emit(this.photo);
  }
}
