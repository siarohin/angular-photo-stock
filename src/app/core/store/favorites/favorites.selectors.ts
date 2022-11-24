import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FavoritesState} from './favorites.state';

/**
 * Favorites state selector
 */
export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

/**
 * Favorites selector
 */
export const selectPhotos = createSelector(selectFavoritesState, (state: FavoritesState) => state.photos);
