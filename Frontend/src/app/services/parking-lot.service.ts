import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingLot } from '../models/patking-lot';
import { ParkingPlace } from '../models/place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url2 } from '../models/url'

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  URL = url2;
  private lotsUrl = this.URL;
  constructor(private http: HttpClient) { }

  getParkinglot():Observable<any>{
    return this.http.get<ParkingLot[]>(this.lotsUrl)
  }
}
