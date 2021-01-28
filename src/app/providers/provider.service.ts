import { Injectable } from '@angular/core';
import { IProvider } from './provider';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  constructor( private http: HttpClient) { }

  public providerList():Observable<IProvider[]>{
   return this.http.get<IProvider[]>("https://hyref.azurewebsites.net/providers").pipe(
     tap(data => console.log('All: ' + JSON.stringify(data))),
     catchError(this.handleError)
   );
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = ' ';

    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server returned: ${err.status} error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}


