import { Injectable } from '@angular/core';
import { catchError, distinctUntilChanged, groupBy, map, mergeMap, reduce, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FEPlace, ParkingPlace, Reservation } from './place';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  constructor(private messageService: MessageService,  private http: HttpClient) { }
  private placesUrl = 'http://localhost:8081/places';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getPlaces(): Observable<FEPlace[]> {
    return this.http.get<ParkingPlace[]>(this.placesUrl)
      .pipe(
        tap(_ => this.log('fetched places')),
        catchError(this.handleError<ParkingPlace[]>('getPlaces', [])),
        mergeMap(places => from(places)),
        mergeMap(place => {
          function uniqueFilter(value: any, index: number, self: any[]): boolean {
            return self.indexOf(value) === index;
          }
  
          const reservations: Reservation[] = place.reservation.sort((a, b) => {
            if (a.day === b.day) {
              return a.startTime > b.startTime ? 1 : -1;
            }
            return a.day > b.day ? 1 : -1;
          });
  
          const time: String[] = reservations
            .map(reservation => `${reservation.startTime}-${reservation.endTime}`)
            .filter(uniqueFilter);
  
          const dates: String[] = reservations
            .map(reservation => reservation.day)
            .filter(uniqueFilter)
            .map(date => {
              console.log(date);
              return date.toString();
            });

          return from(reservations).pipe(
            groupBy(reservation => reservation.day),
            mergeMap(group => group.pipe(
              reduceToArray<Reservation>(),
              map(reservations => from(reservations).pipe(
                groupBy(reservation => reservation.startTime),
                mergeMap(group => group.pipe(
                  map(reservation => reservation.available),
                  reduceToArray<boolean>(),
                )),
                reduceToArray<boolean[]>(),
              )),
              mergeMap(observable => observable)
            )),
            map(available => ({
              id: place.id,
              isAvailable: available,
              time: time,
              day: dates
            }))
          )
        }),
        distinctUntilChanged((a, b) => a.id === b.id), // dočasné
        tap(place => console.log(place)),
        reduceToArray<FEPlace>()
      );
  }
  getPlace(id: number): Observable<ParkingPlace> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.get<ParkingPlace>(url).pipe(
      tap(_ => this.log(`fetched place id=${id}`)),
      catchError(this.handleError<ParkingPlace>(`getPlace id=${id}`))
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
  updatePlace(place: ParkingPlace): Observable<any> {
    return this.http.put(this.placesUrl, place, this.httpOptions).pipe(
      tap(_ => this.log(`updated place id=${place.id}`)),
      catchError(this.handleError<any>('updatePlace'))
    );
  }
}

function reduceToArray<T>() {
  return reduce((acc: T[], val: T) => {
    acc.push(val);
    return acc;
  }, [] as T[])
}