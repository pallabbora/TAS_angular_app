import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Result } from './Result';

@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {
  private resturl: string = 'http://localhost:8080/TeamSurveyapp/result';
  constructor(private http: HttpClient) { }

   
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };


  createResult(result:any):Observable<Result>{
    return this.http.post<Result>(this.resturl+'/createResult',JSON.stringify(result),this.httpOptions)
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
