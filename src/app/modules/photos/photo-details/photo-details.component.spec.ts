import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PhotoDetailsComponent } from './photo-details.component';

describe('PhotoDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhotoDetailsComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PhotoDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
