import { FavoritesStoreFacade } from './favorites-store.facade';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { take } from 'rxjs/operators';
import { selectPhotos } from './favorites.selectors';
import { IPhoto } from '../../models';
import { AppState } from '../app-state';
import * as FavoritesActions from './favorites.actions';

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

describe('FavoritesStoreFacade', () => {
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: { favorites: { photos: TEST_DATA } },
          selectors: [
            { selector: selectPhotos, value: TEST_DATA }
          ],
        }),
      ],
    });
    store = TestBed.inject(MockStore);
  });

  it('should loadFavorites on loadFavorites call', () => {
    const favoritesFacadeService = new FavoritesStoreFacade(store);
    favoritesFacadeService.loadFavorites();
    store.select(selectPhotos).pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(TEST_DATA);
    });
    store.scannedActions$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(FavoritesActions.loadFavorites());
    });
  });

  it('should dispatch deleteFavorites on addFavorites call', () => {
    const favoritesFacadeService = new FavoritesStoreFacade(store);
    favoritesFacadeService.deleteFavorites(TEST_DATA[0]);
    store.scannedActions$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(FavoritesActions.deleteFavorites({ photo: TEST_DATA[0] }));
    });
  });

  it('should dispatch addFavorites on deleteFavorites call', () => {
    const favoritesFacadeService = new FavoritesStoreFacade(store);
    const photo: IPhoto = {
      id: "c7e46245-533f-410d-a68a-691deef0a8f0",
      path: {
        medium: "./assets/photos/46-200x300.jpg",
        large: ""
      }
    };
    favoritesFacadeService.addFavorites(photo);
    store.scannedActions$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(FavoritesActions.addFavorites({ photo }));
    });
  });
});
