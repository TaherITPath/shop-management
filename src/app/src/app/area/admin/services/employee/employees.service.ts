import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployess(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/API/Employees');
  }
  addEmployee(addEmp: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl+'/API/Employees/Add', addEmp);
  }
  getEmployee(id:number): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/API/Employees/'+id);
  }
  deleteEmployee(id:number): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/API/Employees/'+id);
  }
}
