import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerostoriesComponent } from './herostories.component';

describe('HerostoriesComponent', () => {
  let component: HerostoriesComponent;
  let fixture: ComponentFixture<HerostoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerostoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerostoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
