import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {FavoritesStoreFacade, IPhoto, PhotoFacade} from "../../../core";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private photoId: string;
  private favorites: IPhoto[];

  public photo: IPhoto | undefined;
  public photoPath: string;

  constructor(private route: ActivatedRoute, private photoFacade: PhotoFacade, private favoritesStoreFacade: FavoritesStoreFacade) {}

  public ngOnInit(): void {
    this.favoritesStoreFacade.loadFavorites();
    this.subscription = this.route.params.subscribe((params: Params) => this.photoId = params['id']);
    this.subscription.add(this.favoritesStoreFacade.photos$.subscribe((favorites: IPhoto[]) => {
      this.favorites = favorites;
      this.photo = {...<IPhoto>this.photo, isFavorite: this.hasFavorites(<IPhoto>this.photo) };
    }));
    this.subscription.add(this.photoFacade.getById(this.photoId).subscribe((photo: IPhoto | undefined) => {
      this.photo = { ...<IPhoto>photo, isFavorite: this.hasFavorites(<IPhoto>photo) };
      this.photoPath = `url(${photo?.path.medium})`;
      console.log(this.photo);
    }));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public deleteFavorites(): void {
    this.favoritesStoreFacade.deleteFavorites(<IPhoto>this.photo);
  }

  private hasFavorites(photo: IPhoto): boolean {
    return this.favorites.some((value: IPhoto) => value.id === photo.id);
  }
}
