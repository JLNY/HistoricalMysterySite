import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleviewerComponent } from './articleviewer.component';

describe('ArticleviewerComponent', () => {
  let component: ArticleviewerComponent;
  let fixture: ComponentFixture<ArticleviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
