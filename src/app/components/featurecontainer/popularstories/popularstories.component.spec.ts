import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularstoriesComponent } from './popularstories.component';

describe('PopularstoriesComponent', () => {
  let component: PopularstoriesComponent;
  let fixture: ComponentFixture<PopularstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
