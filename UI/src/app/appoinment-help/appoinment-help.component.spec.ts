import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentHelpComponent } from './appoinment-help.component';

describe('AppoinmentHelpComponent', () => {
  let component: AppoinmentHelpComponent;
  let fixture: ComponentFixture<AppoinmentHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentHelpComponent]
    });
    fixture = TestBed.createComponent(AppoinmentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
