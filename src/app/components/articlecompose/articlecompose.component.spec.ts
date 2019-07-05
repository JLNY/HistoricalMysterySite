import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecomposeComponent } from './articlecompose.component';

describe('ArticlecomposeComponent', () => {
  let component: ArticlecomposeComponent;
  let fixture: ComponentFixture<ArticlecomposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlecomposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
