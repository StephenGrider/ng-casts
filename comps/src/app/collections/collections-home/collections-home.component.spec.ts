import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHomeComponent } from './collections-home.component';

describe('CollectionsHomeComponent', () => {
  let component: CollectionsHomeComponent;
  let fixture: ComponentFixture<CollectionsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
