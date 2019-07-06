import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturestoriesComponent } from './featurestories.component';

describe('FeaturestoriesComponent', () => {
  let component: FeaturestoriesComponent;
  let fixture: ComponentFixture<FeaturestoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturestoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturestoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
