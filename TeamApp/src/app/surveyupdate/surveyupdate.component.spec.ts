import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyupdateComponent } from './surveyupdate.component';

describe('SurveyupdateComponent', () => {
  let component: SurveyupdateComponent;
  let fixture: ComponentFixture<SurveyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
