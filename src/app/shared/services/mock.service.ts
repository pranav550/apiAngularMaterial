import { PeriodicElement } from './../models/data';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../consants';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor(private http: HttpClient) { }
  getData(): Observable<PeriodicElement> {
    return this.http.get<PeriodicElement>(Constant.url)
      .pipe(catchError(this.handleError))
  }
  handleError(error) {
    return throwError(error.message)
  }

 
}
