import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingLot } from '../models/patking-lot';
import { Reservation } from '../models/place';
import { Users } from '../models/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url3 } from '../models/url'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL=url3;
  private userURL  = this.URL
  constructor(private http: HttpClient) { }
  getParkinglot():Observable<any>{
    return this.http.get<Users[]>(this.userURL)
  }
}
