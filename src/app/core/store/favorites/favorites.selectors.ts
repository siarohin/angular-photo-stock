import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.state';

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');
export const selectPhotos = createSelector(selectFavoritesState, (state: FavoritesState) => state.photos);
