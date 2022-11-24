import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {PhotoItemComponent} from './photo-item.component';

describe('PhotoItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhotoItemComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PhotoItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
