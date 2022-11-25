import { favoritesReducers } from './favorites.reducers';
import { IPhoto } from '../../models';
import * as FavoritesActions from './favorites.actions';
import { FavoritesState } from './favorites.state';

const TEST_DATA: IPhoto[] = [
  {
    id: 'e727600f-72d8-44b5-8278-f0af88fb7fa4',
    path: {
      medium: './assets/photos/17-200x300.jpg',
      large: ''
    }
  },
  {
    id: '2539c24c-5bce-4ab3-9a84-b26df1b12711',
    path: {
      medium: './assets/photos/22-200x300.jpg',
      large: ''
    }
  },
]

describe('favoritesReducers', () => {
  it('should return state on dispatch loadFavoritesSuccess', () => {
    const photos: IPhoto[] = TEST_DATA;
    const initialState: FavoritesState = { photos: [] };
    const createAction = FavoritesActions.loadFavoritesSuccess({ photos });
    const expectedState: FavoritesState = { photos: [...TEST_DATA] };
    expect(favoritesReducers(initialState, createAction)).toEqual(expectedState);
  })

  it('should return state on dispatch addFavoritesSuccess', () => {
    const photo: IPhoto = TEST_DATA[0];
    const initialState: FavoritesState = { photos: [] };
    const createAction = FavoritesActions.addFavoritesSuccess({ photo });
    const expectedState: FavoritesState = { photos: [photo] };
    expect(favoritesReducers(initialState, createAction)).toEqual(expectedState);
  })

  it('should return state on dispatch deleteFavoritesSuccess', () => {
    const photo: IPhoto = TEST_DATA[0];
    const initialState: FavoritesState = { photos: TEST_DATA };
    const createAction = FavoritesActions.deleteFavoritesSuccess({ photo });
    const expectedState: FavoritesState = { photos: [TEST_DATA[1]] };
    expect(favoritesReducers(initialState, createAction)).toEqual(expectedState);
  })
});
