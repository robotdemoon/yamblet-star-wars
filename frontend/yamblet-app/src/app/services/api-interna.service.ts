import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiInternaService {
  private apiUrl = 'https://robotdemn.000webhostapp.com/backend/public/starwars/starships';
  constructor(
    private http: Http
  ) { }

  getStarships(): Observable<any> {
    const params = 'd=' + JSON.stringify( {action: 'getAll', id: 0} );
    return this.http.post(this.apiUrl, params, httpOptions).pipe(
      map( (r) => r.json()),
      catchError(this.handleError<any>('get All Starships'))
      );
  }

  getStarship(id: number): Observable<any> {
    const params = 'd=' + JSON.stringify( {action: 'get', id: id} );
    return this.http.post(this.apiUrl, params, httpOptions).pipe(
      map( (r) => r.json() ),
      catchError(this.handleError<any>('get One Starship'))
      );
  }

  addStarship(data: any): Observable<any> {
    const params = 'd=' + JSON.stringify( {action: 'add', data: data} );
    return this.http.post(this.apiUrl, params, httpOptions).pipe(
      map( (r) => r.json() ),
      catchError(this.handleError<any>('add Starship'))
      );
  }

  updateStarship(data: any, id: number): Observable<any> {
    const params = 'd=' + JSON.stringify( {action: 'update', data: data, id: id } );
    return this.http.post(this.apiUrl, params, httpOptions).pipe(
      map( (r) => r.json() ),
      catchError(this.handleError<any>('update Starship'))
      );
  }

  removeStarship(id: number): Observable<any> {
    const params = 'd=' + JSON.stringify( {action: 'remove', id: id} );
    return this.http.post(this.apiUrl, params, httpOptions).pipe(
      map( (r) => r.json() ),
      catchError(this.handleError<any>('remove Starship'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
