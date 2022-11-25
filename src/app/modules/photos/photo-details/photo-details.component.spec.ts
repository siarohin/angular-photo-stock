import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { FavoritesStoreFacade, PhotoFacade } from '../../../core';

const PHOTO_FACADE_MOCK: jasmine.SpyObj<PhotoFacade> = jasmine.createSpyObj(
  'PhotoFacade',
  [ 'getById' ]
);
const FAVORITES_STORE_FACADE_MOCK: jasmine.SpyObj<FavoritesStoreFacade> = jasmine.createSpyObj(
  'FavoritesStoreFacade',
  [ 'loadFavorites', 'photos$', 'deleteFavorites' ]
);

describe('PhotoDetailsComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhotoDetailsComponent
      ],
      providers: [
        { provide: PhotoFacade, useValue: PHOTO_FACADE_MOCK },
        { provide: FavoritesStoreFacade, useValue: FAVORITES_STORE_FACADE_MOCK }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(PhotoDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
