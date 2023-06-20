import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  loggedInUser : any;
    
  constructor(private router: Router, private commonService: CommonService) {
  }
  ngOnInit():void{
    this.isUserAuthenticated();
    this.loggedInUser = this.commonService.getLoggedInUserDetails()
  }
  isUserAuthenticated(){
  const token: any=localStorage.getItem("jwt");
  if(token){
    //this.router.navigate(['employee']);
    return true;
  } 
  else{
   //this.router.navigate(['login']);
    return false;
  }
  }
  logOut(){
    localStorage.removeItem("jwt");
    this.router.navigate(['']);
  }
}
