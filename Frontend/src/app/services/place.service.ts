import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FEPlace, ParkingPlace, Reservation } from '../models/place';
import { ParkingLot } from '../models/patking-lot';
import { MessageService } from '../message.service';
import { Place,SaveReservation,DeletePlace,CreatePlace } from '../models/url';
import { ParkingLotService } from './parking-lot.service'

@Injectable({ providedIn: 'root' })
export class PlaceService {
  parkingLot:ParkingLot;
  private placesUrl = Place;
  private reservationUrl = SaveReservation;
  private deletePlaceUrl=DeletePlace;
  private addPlaceUrl=CreatePlace;
  constructor(private messageService: MessageService,  private http: HttpClient, private parkingLotService:ParkingLotService) { }
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
  savePlace(place: ParkingPlace[]): Observable<any> {
    return this.http.post(this.placesUrl, place, this.httpOptions);
  }
  updateReservation(reservation: Reservation):Observable<any>{
    return this.http.put<Reservation>(this.reservationUrl+"/"+reservation.id, reservation, this.httpOptions).pipe(
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
  deletePrakingPlace(parkingPlace:ParkingPlace | number): Observable<any> {
    const id = typeof parkingPlace === 'number' ? parkingPlace : parkingPlace.id;
    const url = `${this.deletePlaceUrl}/${id}`;

    return this.http.delete<ParkingPlace>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Parking Place id=${id}`)),
      catchError(this.handleError<ParkingPlace>('deleteParkingPlace'))
    );
}
addParkingPlace(parkingPlace:ParkingPlace,parkingLot:ParkingLot):Observable<any>{
  return this.http.post<ParkingPlace>(this.addPlaceUrl+"/"+parkingLot.id, parkingPlace, this.httpOptions)
}
}
