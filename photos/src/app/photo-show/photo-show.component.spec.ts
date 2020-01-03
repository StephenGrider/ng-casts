import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShowComponent } from './photo-show.component';

describe('PhotoShowComponent', () => {
  let component: PhotoShowComponent;
  let fixture: ComponentFixture<PhotoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
