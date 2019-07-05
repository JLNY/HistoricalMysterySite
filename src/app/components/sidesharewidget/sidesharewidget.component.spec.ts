import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesharewidgetComponent } from './sidesharewidget.component';

describe('SidesharewidgetComponent', () => {
  let component: SidesharewidgetComponent;
  let fixture: ComponentFixture<SidesharewidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesharewidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesharewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
