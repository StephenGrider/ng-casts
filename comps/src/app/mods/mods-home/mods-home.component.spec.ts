import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsHomeComponent } from './mods-home.component';

describe('ModsHomeComponent', () => {
  let component: ModsHomeComponent;
  let fixture: ComponentFixture<ModsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
