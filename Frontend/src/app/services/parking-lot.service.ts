import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { ParkingLot } from '../models/patking-lot';
import { ParkingPlace } from '../models/place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url2,url4 } from '../models/url'
import { MessageService } from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  URL = url2;
  URL2=url4;
  private postUrl=this.URL2;
  private lotsUrl = this.URL;
  constructor(private http: HttpClient,private messageService: MessageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getParkinglot():Observable<any>{
    return this.http.get<ParkingLot>(this.lotsUrl).pipe(
      tap(_=>this.log(`got parkingLot`)),
      catchError(this.handleError<any>('updateParkingLot')),
    );
  }
  updateParkingLot(parkingLot:ParkingLot):Observable<any>{
    return this.http.put<ParkingLot>(this.lotsUrl, parkingLot, this.httpOptions).pipe(
      tap(_=>this.log(`updated parkingLot id=${parkingLot.id}`)),
      catchError(this.handleError<any>('updateParkingLot')),
    );
  }
  addParkingLot(parkingLot:ParkingLot):Observable<any>{
  return this.http.post<ParkingLot>(this.postUrl, parkingLot, this.httpOptions).pipe(
    tap(_=>this.log(`created parkinglot id=${parkingLot.id}`)),
    catchError(this.handleError<any>('createParkingLot')),
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
}
