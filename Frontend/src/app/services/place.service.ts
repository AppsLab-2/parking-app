import { Injectable } from '@angular/core';
import { catchError, distinctUntilChanged, groupBy, map, mergeMap, reduce, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FEPlace, ParkingPlace, Reservation } from '../models/place';
import { MessageService } from '../message.service';
import { url,url1 } from '../models/url';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  URL = url;
  URL1=url1;
  private placesUrl = this.URL;
  private reservationUrl = this.URL1;
  constructor(private messageService: MessageService,  private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getPlacesAlt(): Observable<FEPlace[]> {
    return this.http.get<ParkingPlace[]>(this.placesUrl)
      .pipe(
        tap(_ => this.log('fetched places')),
        catchError(this.handleError<ParkingPlace[]>('getPlaces', [])),
        map(places => places.map(place => {
          function uniqueFilter(value: any, index: number, self: any[]): boolean {
            return self.indexOf(value) === index;
          }

          function getReservationTime(reservation: Reservation): string {
            return `${reservation.startTime}-${reservation.endTime}`;
          }

          const reservations: Reservation[] = place.reservation.sort((a, b) => {
            if (a.day === b.day) {
              return a.startTime > b.startTime ? 1 : -1;
            }
            return a.day > b.day ? 1 : -1;
          });

          const time: String[] = reservations
            .map(getReservationTime)
            .filter(uniqueFilter);

          const dates: String[] = reservations
            .map(reservation => reservation.day)
            .filter(uniqueFilter)
            .map(date => date.toString());

          const isAvailable: boolean[][] = dates.map(day =>
            time.map(time =>
              reservations.find(reservation => reservation.day.toString() === day && getReservationTime(reservation) === time).available
            )
          );

          return {
            id: place.id,
            isAvailable, time, day: dates
          };
        })),
        tap(result => console.log(result))
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
  updatePlace(place: ParkingPlace[]): Observable<any> {
    return this.http.post(this.placesUrl, place, this.httpOptions);
  }
  updateReservation(reservation: Reservation):Observable<any>{
    return this.http.put<Reservation>(this.reservationUrl, reservation, this.httpOptions).pipe(
      tap(_=>this.log(`updated reservations id=${reservation.id}`)),
      catchError(this.handleError<any>('updateReservation')),
    );
  }
  getPlaces():Observable<ParkingPlace[]>{
    return this.http.get<ParkingPlace[]>(this.placesUrl)
    .pipe(
      tap(_ => this.log('fetched places')),
      catchError(this.handleError<ParkingPlace[]>('getPlaces', [])))
  }
}
