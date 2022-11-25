import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { PhotosComponent } from './photos.component';
import { FavoritesStoreFacade, PhotoFacade } from '../../core';

const PHOTO_FACADE_MOCK: jasmine.SpyObj<PhotoFacade> = jasmine.createSpyObj(
  'PhotoFacade',
  [ 'getSet' ]
);
const FAVORITES_STORE_FACADE_MOCK: jasmine.SpyObj<FavoritesStoreFacade> = jasmine.createSpyObj(
  'FavoritesStoreFacade',
  [ 'loadFavorites', 'photos$', 'deleteFavorites', 'addFavorites' ]
);

describe('PhotosComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhotosComponent
      ],
      providers: [
        { provide: PhotoFacade, useValue: PHOTO_FACADE_MOCK },
        { provide: FavoritesStoreFacade, useValue: FAVORITES_STORE_FACADE_MOCK },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(PhotosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
