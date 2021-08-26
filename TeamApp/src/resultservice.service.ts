import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './Result';
import { Observable ,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {
  private resturl: string = 'http://localhost:8080/TeamSurveyapp/result';
  constructor(private http: HttpClient) { 
  }
  }
  const httpOptions ={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),

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
  
