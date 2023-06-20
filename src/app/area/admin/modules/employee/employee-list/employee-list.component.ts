import { Component } from '@angular/core';
import { Employee } from '../../../model/employee.model';
import { EmployeesService } from '../../../services/employee/employees.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees : Employee[]=[];
  singleEmployee: Employee={
    id:0,
    name:'',
    email:'',
    department:'',
    password:''
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'department','action'];
  constructor(private empService: EmployeesService,public dialog: MatDialog) {
  
  }
  ngOnInit(): void{
    this.getEmployee();
  }
  getEmployee(){
    this.empService.getAllEmployess()
    .subscribe(
      {
        next: (employees)=>{
          this.employees = employees;
        },
        error:(err) =>{
          console.log(err);
        },
      }
      )
  }
  deleteEmployee(id:number){
    this.empService.deleteEmployee(id)
    .subscribe(
      {
        next: ()=>{
          this.getEmployee();
        },
        error:(err) =>{
          console.log(err);
          this.getEmployee();
        },
      }
      )
    }
  getSingleEmployee(id:number){
    this.empService.getEmployee(id)
    .subscribe(
      {
        next: (employees)=>{
          this.singleEmployee = employees;
        },
        error:(err) =>{
          console.log(err);
        },
      }
    )  
  }
  openDialog(cId:number) {
    // this.dialog.open(EmployeeDialogBoxComponent, {
    //   data: this.employees.find(x=>x.id == cId)
    // });
  }
}
