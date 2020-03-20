import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsHomeComponent } from './views-home.component';

describe('ViewsHomeComponent', () => {
  let component: ViewsHomeComponent;
  let fixture: ComponentFixture<ViewsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
