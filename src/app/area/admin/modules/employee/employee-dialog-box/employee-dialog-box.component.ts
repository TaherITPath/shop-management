import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-dialog-box',
  templateUrl: './employee-dialog-box.component.html',
  styleUrls: ['./employee-dialog-box.component.scss']
})
export class EmployeeDialogBoxComponent {
  employee : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    debugger
  this.employee = data;
}
}
