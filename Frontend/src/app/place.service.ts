import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from './place';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  constructor(private messageService: MessageService,  private http: HttpClient) { }
  private placesUrl = 'api/places';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl)
      .pipe(
        tap(_ => this.log('fetched places')),
        catchError(this.handleError<Place[]>('getPlaces', []))
      );
  }
  getPlace(id: number): Observable<Place> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.get<Place>(url).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      catchError(this.handleError<Place>(`getPlace id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`PlaceService: ${message}`);
  }
  updatePlace(place: Place): Observable<any> {
    return this.http.put(this.placesUrl, place, this.httpOptions).pipe(
      tap(_ => this.log(`updated place id=${place.id}`)),
      catchError(this.handleError<any>('updatePlace'))
    );
  }
}