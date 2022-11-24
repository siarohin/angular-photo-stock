import {Component} from '@angular/core';
import {take} from 'rxjs/operators';
import {IPhoto, IPhotoResponse, PhotoFacade} from '../../core';
import {IntersectionStatus} from '../shared';

const LIMIT = 10;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  private to: number;
  private lastId: number;
  private visibilityStatus: {[key: number]: IntersectionStatus} = {};
  public photos: IPhoto[] = [];

  constructor(private photoFacade: PhotoFacade) {}

  public ngOnInit(): void {
    this.load(0, LIMIT);
  }

  public onVisibilityChanged(id: number, status: IntersectionStatus): void {
    this.visibilityStatus[id] = status;
    if (this.visibilityStatus[this.to] === IntersectionStatus.Visible) {
      const from = this.to;
      const to = this.getNextIndex(from);
      if (this.canProcess()) {
        this.load(from, to);
      }
    }
  }

  private canProcess(): boolean {
    return this.photos.length !== this.lastId;
  }

  private getNextIndex(from: number): number {
    const index = from + LIMIT + 1;
    return index > this.lastId ? this.lastId : index;
  }

  private load(from: number, to: number): void {
    this.to = to;
    this.photoFacade.getSet(from, to).pipe(take(1)).subscribe((resp: IPhotoResponse) => {
      this.lastId = resp.count;
      this.photos = [...this.photos, ...resp.data];
    });
  }
}
