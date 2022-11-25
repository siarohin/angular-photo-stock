import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritesComponent } from './favorites.component';
import { FavoritesStoreFacade } from '../../core';

const FAVORITES_STORE_FACADE_MOCK: jasmine.SpyObj<FavoritesStoreFacade> = jasmine.createSpyObj(
  'FavoritesStoreFacade',
  [ 'loadFavorites', 'photos$' ]
);

describe('FavoritesComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FavoritesComponent
      ],
      providers: [
        { provide: FavoritesStoreFacade, useValue: FAVORITES_STORE_FACADE_MOCK }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(FavoritesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
