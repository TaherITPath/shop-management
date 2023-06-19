import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }
  isJwtExpired(){
    return this.jwtHelper.isTokenExpired(localStorage.getItem("jwt"));
  }
}
