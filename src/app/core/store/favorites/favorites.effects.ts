import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as FavoritesActions from './favorites.actions';
import { StorageFacade } from '../../facades';
import { IPhoto } from '../../models';

@Injectable()
export class FavoritesEffects {
  public loadFavorites$: Observable<Action>;
  public addFavorites$: Observable<Action>;
  public deleteFavorites$: Observable<Action>;

  constructor(private actions$: Actions, private storageFacade: StorageFacade) {
    this.loadFavorites$ = createEffect(() =>
      this.actions$.pipe(
        ofType(FavoritesActions.loadFavorites),
        switchMap(() => {
          const photos: IPhoto[] = this.getFavorites();
          return of(FavoritesActions.loadFavoritesSuccess({ photos }));
        }),
      ),
    );

    this.addFavorites$ = createEffect(() =>
      this.actions$.pipe(
        ofType(FavoritesActions.addFavorites),
        switchMap(({ photo }) => {
          const newPhoto: IPhoto = {...photo, isFavorite: true };
          const photos: IPhoto[] = [ ...this.getFavorites(), newPhoto ];
          this.storageFacade.set('favorites', photos);
          return of(FavoritesActions.addFavoritesSuccess({ photo: newPhoto }));
        }),
      ),
    );

    this.deleteFavorites$ = createEffect(() =>
      this.actions$.pipe(
        ofType(FavoritesActions.deleteFavorites),
        switchMap((payload) => {
          this.storageFacade.set('favorites', this.deleteFavorites(payload.photo));
          const photo: IPhoto = { ...payload.photo, isFavorite: false }
          return of(FavoritesActions.deleteFavoritesSuccess({ photo }));
        }),
      ),
    );
  }

  private getFavorites(): IPhoto[] {
    return <IPhoto[]>this.storageFacade.get('favorites') || [];
  }

  private deleteFavorites(photo: IPhoto): IPhoto[] {
    const index: number = this.getFavorites().findIndex((item) => item.id === photo.id);
    return [...this.getFavorites().slice(0, index), ...this.getFavorites().slice(index + 1)];
  }
}
