import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {IPhoto} from '../../models';
import * as FavoritesActions from './favorites.actions';
import {FavoritesState, initialFavoritesState} from './favorites.state';

const reducer: ActionReducer<FavoritesState> = createReducer(
  initialFavoritesState,
  on(FavoritesActions.loadFavoritesSuccess, (state, { photos }) => {
    return { ...state, photos };
  }),
  on(FavoritesActions.addFavoritesSuccess, (state, { photo }) => {
    return { ...state, photos: [photo, ...state.photos] };
  }),
  on(FavoritesActions.deleteFavoritesSuccess, (state, { photo }) => {
    const index: number = state.photos.findIndex((item) => item.id === photo.id);
    const photos: Array<IPhoto> = [...state.photos.slice(0, index), ...state.photos.slice(index + 1)];
    return { ...state, photos };
  }),
);

export function favoritesReducers(state: FavoritesState | undefined, action: Action) {
  return reducer(state, action);
}
