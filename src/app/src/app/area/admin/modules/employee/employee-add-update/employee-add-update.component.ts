import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employee/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add-update',
  templateUrl: './employee-add-update.component.html',
  styleUrls: ['./employee-add-update.component.scss']
})
export class EmployeeAddUpdateComponent {
  form: FormGroup = new FormGroup({
    id:new FormControl(0),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    salary: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    picture:new FormControl('')
  });
  selectedFile: File | null = null;
constructor(private empService:EmployeesService, private router: Router, private activatedRouter: ActivatedRoute) {
}
ngOnInit():void{
  this.activatedRouter.paramMap.subscribe({
    next:(params)=>
    {
      const id = params.get('id');
      debugger
      if(id != null && id != ''){
        this.empService.getEmployee(parseInt(id))
        .subscribe(
          {
            next: (employees)=>{
              this.form.patchValue(employees);
            },
            error:(err) =>{
              console.log(err);
            },
          }
        )
      }
      }
  });
}
addEmployee(){
  this.empService.addEmployee(this.form.value).subscribe({
    next: (emp)=>{
      this.router.navigate(['admin/employee']);
    },
    error(err) {
        console.log(err);
    },
    
});
}
onFileSelected(event: any) {
  this.form.controls['picture'].value.set(event.target.files[0]);
} 
}
