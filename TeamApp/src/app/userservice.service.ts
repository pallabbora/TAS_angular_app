import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginCredentials } from './LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private resturl: string = 'http://localhost:8080/TeamSurveyapp/login';

  $isLoggedIn=new EventEmitter();
  
  logIn(user:any){
    this.$isLoggedIn.emit(user);
  }



  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
    };

    // getDetailByEmail(email: any): Observable<LoginCredentials[]> {
    //   return this.http.get<LoginCredentials[]>(this.resturl+'/getByEmail/'+email,this.httpOptions).pipe(retry(1), catchError(this.handleError));
    // }

    validateUser(user:any):Observable<LoginCredentials>{
        
      return this.http.post<LoginCredentials>(this.resturl + '/validate',JSON.stringify(user),this.httpOptions).pipe(retry(1),catchError(this.handleError));
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
