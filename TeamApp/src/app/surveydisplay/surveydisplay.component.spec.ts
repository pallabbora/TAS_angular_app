import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydisplayComponent } from './surveydisplay.component';

describe('SurveydisplayComponent', () => {
  let component: SurveydisplayComponent;
  let fixture: ComponentFixture<SurveydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveydisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
