import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritesStoreFacade, IPhoto } from '../../core';
import { Path } from '../../constants';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  public photos: IPhoto[];

  constructor(private favoritesStoreFacade: FavoritesStoreFacade, private router: Router) {}

  public ngOnInit(): void {
    this.favoritesStoreFacade.loadFavorites();
    this.subscription = this.favoritesStoreFacade.photos$.subscribe((photos: IPhoto[]) => this.photos = photos);
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public navigate(photo: IPhoto): void {
    this.router.navigate([`${Path.Photos}/${photo.id}`])
  }
}
