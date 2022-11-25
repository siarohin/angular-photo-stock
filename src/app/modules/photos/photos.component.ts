import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FavoritesStoreFacade, IPhoto, IPhotoResponse, PhotoFacade } from '../../core';
import { IntersectionStatus } from '../shared';
import { Subscription } from 'rxjs';

const LIMIT = 10;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit, OnDestroy {
  private photosMap: Map<string, IPhoto> = new Map();
  private subscription: Subscription;
  private to: number;
  private lastId: number;
  private visibilityStatus: {[key: number]: IntersectionStatus} = {};
  private favorites: IPhoto[] = [];

  public photos: IPhoto[] = [];

  constructor(private photoFacade: PhotoFacade, private favoritesStoreFacade: FavoritesStoreFacade, private changeDetector: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.load(0, LIMIT);
    this.favoritesStoreFacade.loadFavorites();
    this.subscription = this.favoritesStoreFacade.photos$.subscribe((favorites: IPhoto[]) => {
      this.favorites = [...favorites];
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

  public updateFavorites(photo: IPhoto): void {
    if (photo.isFavorite) {
      this.favoritesStoreFacade.deleteFavorites(photo);
      this.setPhotosMap(photo.id, { ...photo, isFavorite: false });
    } else {
      this.favoritesStoreFacade.addFavorites(photo);
      this.setPhotosMap(photo.id, { ...photo, isFavorite: true });
    }
  }

  public trackByFn(_: number, item: IPhoto): string {
    return item.id;
  }

  private load(from: number, to: number): void {
    this.to = to;
    this.photoFacade.getSet(from, to).pipe(take(1)).subscribe((resp: IPhotoResponse) => {
      this.lastId = resp.count;
      resp.data.forEach((photo: IPhoto) => {
        this.setPhotosMap(photo.id, { ...photo, isFavorite: this.hasFavorites(photo) });
      });
    });
  }

  private canProcess(): boolean {
    return this.photos.length !== this.lastId;
  }

  private getNextIndex(from: number): number {
    const index = from + LIMIT + 1;
    return index > this.lastId ? this.lastId : index;
  }

  private hasFavorites(photo: IPhoto): boolean {
    return this.favorites.some((value: IPhoto) => value.id === photo.id);
  }

  private setPhotosMap(id: string, photo: IPhoto) {
      this.photosMap.set(id, photo);
      this.photos = Array.from(this.photosMap.values());
      this.changeDetector.markForCheck();
  }
}
