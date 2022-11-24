import {IPhoto} from '../../models';

/**
 * Favorites state model
 */
export interface FavoritesState {
  photos: IPhoto[];
}

/**
 * Favorites state initial setup
 */
export const initialFavoritesState: FavoritesState = {
  photos: [],
};
