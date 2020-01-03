import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaArticleListComponent } from './na-article-list.component';

describe('NaArticleListComponent', () => {
  let component: NaArticleListComponent;
  let fixture: ComponentFixture<NaArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
