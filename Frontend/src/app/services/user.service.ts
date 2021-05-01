import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {  Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Users } from '../models/user'
import { url3 } from '../models/url'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL=url3;
  private userURL  = this.URL
  constructor(private http: HttpClient,private messageService: MessageService) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
