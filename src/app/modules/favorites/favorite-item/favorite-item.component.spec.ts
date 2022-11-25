import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FavoriteItemComponent} from './favorite-item.component';

describe('FavoriteItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FavoriteItemComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FavoriteItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
