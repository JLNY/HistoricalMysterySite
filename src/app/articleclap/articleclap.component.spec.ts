import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleclapComponent } from './articleclap.component';

describe('ArticleclapComponent', () => {
  let component: ArticleclapComponent;
  let fixture: ComponentFixture<ArticleclapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleclapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleclapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
