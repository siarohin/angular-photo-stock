import { IPhoto } from '../../models';

export interface FavoritesState {
  photos: IPhoto[];
}

export const initialFavoritesState: FavoritesState = {
  photos: [],
};
