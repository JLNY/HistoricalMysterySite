import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahottagComponent } from './metahottag.component';

describe('MetahottagComponent', () => {
  let component: MetahottagComponent;
  let fixture: ComponentFixture<MetahottagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetahottagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahottagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
