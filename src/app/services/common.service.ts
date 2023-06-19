import { Injectable } from '@angular/core';
import { LoggedInUser } from '../model/logedinuser.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  setLoggedInUserDetails(token:string){
    localStorage.setItem("jwt", token);
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    const userName = decodedToken['id'];
    const currentUser: LoggedInUser = {
      id: decodedToken['id'],
      name: decodedToken['name'],
      email: decodedToken['email'],
      department: decodedToken['department'],
      phone: decodedToken['phone']
    };          
    localStorage.setItem("userInfo", JSON.stringify(currentUser));
  }

  getLoggedInUserDetails(){
    const userString = localStorage.getItem("userInfo");
    if (!userString) {
      const loggedInUserEmpty: LoggedInUser = {
        id:0,
        name: "",
        email: "",
        department: "",
        phone: ""
      };
      return loggedInUserEmpty;
    }
    const userObject = JSON.parse(userString);
    const loggedInUser: LoggedInUser = {
      id: userObject.id,
      name: userObject.name,
      email: userObject.email,
      department: userObject.department,
      phone: userObject.phone
    };
    return loggedInUser;
  }
}
