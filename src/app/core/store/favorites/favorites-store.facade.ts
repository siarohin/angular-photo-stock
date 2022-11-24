import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IPhoto} from '../../models';
import {AppState} from '../app-state';
import * as FavoritesActions from './favorites.actions';
import {selectPhotos} from './favorites.selectors';

/**
 * Favorites Facade service
 */
@Injectable()
export class FavoritesStoreFacade {
  private store: Store<AppState>;

  public photos$: Observable<IPhoto[]>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.photos$ = this.store.pipe(select(selectPhotos));
  }

  public loadFavorites(): void {
    this.store.dispatch(FavoritesActions.loadFavorites());
  }

  public addFavorites(photo: IPhoto): void {
    this.store.dispatch(FavoritesActions.addFavorites({ photo }));
  }

  public deleteFavorites(photo: IPhoto): void {
    this.store.dispatch(FavoritesActions.deleteFavorites({ photo }));
  }
}
