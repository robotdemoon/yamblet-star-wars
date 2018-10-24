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
export class SwapiService {
  private apiUrl = 'https://swapi.co/api/';
  constructor(
    private http: Http
  ) { }

  getFilms(): Observable<any> {
    return this.http.get(this.apiUrl + 'films', httpOptions).pipe(
      map( (r) => r.json().results),
      catchError(this.handleError<any>('get Films'))
      );
  }

  getFilm(film: number, property: string = ''): Observable<any> {
    return this.http.get(this.apiUrl + 'films/' + film + '/', httpOptions).pipe(
      map( (r) => (property === '') ? r.json() : r.json()[property] ),
      catchError(this.handleError<any>('get Films'))
      );
  }

  getStarshipProperty(url: string, property: 'name'): Observable<any> {
    let str = url;
    str = str.replace(this.apiUrl + 'starships/', '');
    str = str.slice(0, -1);
    const res = { name: '', id: +str };
    return this.http.get(url, httpOptions).pipe(
      map( (r) => { res.name = r.json()[property];  return res; } ),
      catchError(this.handleError<any>('get Films'))
      );
  }

  getStarship(id: number): Observable<any> {
    return this.http.get(this.apiUrl + 'starships/' + id + '/', httpOptions).pipe(
      map( (r) => r.json() ),
      catchError(this.handleError<any>('get Films'))
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
