import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturecontainerComponent } from './featurecontainer.component';

describe('FeaturecontainerComponent', () => {
  let component: FeaturecontainerComponent;
  let fixture: ComponentFixture<FeaturecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
