import { Component, OnInit } from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service'
import {PLACES} from '../parking-place'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  today: number = Date.now();
  places: Place[];
  constructor(private placeService: PlaceService)  {}

  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces(): void{
  this.placeService.getPlaces()
  .subscribe(place => this.places = place)
  }

}
