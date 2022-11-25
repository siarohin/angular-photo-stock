import {Component, OnInit} from '@angular/core';
import {FavoritesStoreFacade, IPhoto} from '../../core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor(private favoritesStoreFacade: FavoritesStoreFacade) {}

  public photos$: Observable<IPhoto[]>;

  public ngOnInit(): void {
    this.favoritesStoreFacade.loadFavorites();
    this.photos$ = this.favoritesStoreFacade.photos$;
  }

  public navigate(photo: IPhoto): void {

  }
}
