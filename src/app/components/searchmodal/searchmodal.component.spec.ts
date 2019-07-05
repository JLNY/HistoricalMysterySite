import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmodalComponent } from './searchmodal.component';

describe('SearchmodalComponent', () => {
  let component: SearchmodalComponent;
  let fixture: ComponentFixture<SearchmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
