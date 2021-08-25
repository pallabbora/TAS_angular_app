import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { Employee } from './Employee';
import { Manager } from './Manager';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  private resturl: string = 'http://localhost:8080/TeamSurveyapp/employee';
  private restUrlForManager='http://localhost:8080/TeamSurveyapp/manager';
  constructor(private http: HttpClient) {}
   
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.resturl+'/showEmployee').pipe(retry(1), catchError(this.handleError));
  }
  
  createEmployee(employee:any):Observable<Employee>{
    console.log(employee);
    return this.http.post<Employee>(this.resturl+'/createEmp',JSON.stringify(employee),this.httpOptions)
  }
  deleteEmployee(eid: any):Observable<Employee>{
    return this.http.delete<Employee>(this.resturl+'/deleteEmp/'+eid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
  getEmployeeById(eid: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.resturl+'/getById/'+eid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  updateEmployee(employee:any):Observable<Employee>{
    return this.http.put<Employee>(this.resturl+'/updateEmp',JSON.stringify(employee),this.httpOptions)
  }

  getManagers():Observable<Manager[]> {
    return this.http.get<Manager[]>(this.restUrlForManager+'/showManager').pipe(retry(1), catchError(this.handleError));
  }
  

  handleError(err: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
