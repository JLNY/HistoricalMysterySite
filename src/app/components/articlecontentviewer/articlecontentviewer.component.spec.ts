import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecontentviewerComponent } from './articlecontentviewer.component';

describe('ArticlecontentviewerComponent', () => {
  let component: ArticlecontentviewerComponent;
  let fixture: ComponentFixture<ArticlecontentviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlecontentviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecontentviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
