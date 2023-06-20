import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogBoxComponent } from './employee-dialog-box.component';

describe('EmployeeDialogBoxComponent', () => {
  let component: EmployeeDialogBoxComponent;
  let fixture: ComponentFixture<EmployeeDialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDialogBoxComponent]
    });
    fixture = TestBed.createComponent(EmployeeDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
