import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environment/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class CommonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    observe: 'response' as 'response'
  };
  constructor(private http: HttpClient) { }

  register(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  login(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  logout(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  ownProfile(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  allProfile(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  deleteAProfile(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  updateAProfile(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  createANote(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  uploadTopics(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  uploadRoommates(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  addExpanseDetails(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getExpanses(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getAllExpanses(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getAllRoommates(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  UpdateAExpanses(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  deleteAExpanses(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  uploadACommonExpanse(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getAllCommonExpanses(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${path}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  deleteACommonExpanse(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  deleteARoommate(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  UpdateACommonExpanse(path: string, data: {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${path}`, data, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }



  errorHandler(error) {
    let errorMessage = '';
    errorMessage = error;
    return throwError(errorMessage);
 }
}
