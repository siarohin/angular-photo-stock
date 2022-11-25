import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesStoreFacade, IPhoto } from '../../core';
import { Observable, share } from 'rxjs';
import { Path } from '../../constants';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor(private favoritesStoreFacade: FavoritesStoreFacade, private router: Router) {}

  public photos$: Observable<IPhoto[]>;

  public ngOnInit(): void {
    this.favoritesStoreFacade.loadFavorites();
    this.photos$ = this.favoritesStoreFacade.photos$.pipe(share());
  }

  public navigate(photo: IPhoto): void {
    this.router.navigate([`${Path.Photos}/${photo.id}`])
  }
}
