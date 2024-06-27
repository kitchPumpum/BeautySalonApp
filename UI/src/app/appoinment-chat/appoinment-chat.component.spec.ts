import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentChatComponent } from './appoinment-chat.component';

describe('AppoinmentChatComponent', () => {
  let component: AppoinmentChatComponent;
  let fixture: ComponentFixture<AppoinmentChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentChatComponent]
    });
    fixture = TestBed.createComponent(AppoinmentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
