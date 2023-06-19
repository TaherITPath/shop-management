import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/model/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  baseUrl: string = environment.baseApiUrl;
    constructor(private http: HttpClient) { }
    login(model:Login): Observable<string>{
      return this.http.post(this.baseUrl+'/API/Login',model, { responseType: 'text' });
    }
}
