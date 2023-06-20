import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddUpdateComponent } from './employee-add-update.component';

describe('EmployeeAddUpdateComponent', () => {
  let component: EmployeeAddUpdateComponent;
  let fixture: ComponentFixture<EmployeeAddUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAddUpdateComponent]
    });
    fixture = TestBed.createComponent(EmployeeAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
