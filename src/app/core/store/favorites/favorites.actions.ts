import {createAction, props} from '@ngrx/store';
import {IPhoto} from '../../models';

/**
 * Favorites state actions
 */
export const loadFavorites = createAction('[Favorites] LOAD_FAVORITES');
export const loadFavoritesSuccess = createAction('[Favorites] LOAD_FAVORITES_SUCCESS', props<{ photos: IPhoto[] }>());

export const addFavorites = createAction('[Favorites] ADD_FAVORITES', props<{ photo: IPhoto }>());
export const addFavoritesSuccess = createAction('[Favorites] ADD_FAVORITES_SUCCESS', props<{ photo: IPhoto }>());

export const deleteFavorites = createAction('[Favorites] DELETE_FAVORITES', props<{ photo: IPhoto }>());
export const deleteFavoritesSuccess = createAction('[Favorites] DELETE_FAVORITES_SUCCESS', props<{ photo: IPhoto }>());
