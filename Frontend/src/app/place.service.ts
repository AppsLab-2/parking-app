import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Place } from './place';
import { PLACES } from './parking-place';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  constructor(private messageService: MessageService) { }

  getPlaces(): Observable<Place[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PlaceService: fetched places');
    return of(PLACES);
  }

  getPlace(id: number): Observable<Place> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PlaceService: fetched place id=${id}`);
    return of(PLACES.find(place => place.id === id));
  }
}