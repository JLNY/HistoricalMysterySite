import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabarComponent } from './metabar.component';

describe('MetabarComponent', () => {
  let component: MetabarComponent;
  let fixture: ComponentFixture<MetabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
