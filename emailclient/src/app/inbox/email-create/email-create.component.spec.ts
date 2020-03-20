import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreateComponent } from './email-create.component';

describe('EmailCreateComponent', () => {
  let component: EmailCreateComponent;
  let fixture: ComponentFixture<EmailCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
