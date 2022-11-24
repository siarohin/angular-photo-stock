import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FavoritesComponent} from './favorites.component';

describe('FavoritesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FavoritesComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FavoritesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
