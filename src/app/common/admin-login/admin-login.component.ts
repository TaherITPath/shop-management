import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AdminLoginService } from 'src/app/services/login/admin/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  errorMsg: string="" 
  constructor(private loginSer: AdminLoginService, private router: Router, private commonService: CommonService) {
  }
  ngOnInit(): void{
    localStorage.removeItem("jwt");
    this.router.navigate(['']);
  }
login(){
  this.errorMsg = ""
  if (this.form.valid) {
    this.loginSer.login(this.form.value)
    .subscribe({
       next: (res)=>{
          this.commonService.setLoggedInUserDetails(res);
          this.router.navigate(['admin']);
        },
        error:(err)=>{
          this.errorMsg = "Username or Password is incorrect"
        }
    });
  }
  else{
      this.errorMsg = "Please insert valid values";
    }
  }
}
