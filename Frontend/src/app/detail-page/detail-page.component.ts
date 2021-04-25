import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FEPlace, Reservation } from '../models/place';
import {PlaceService} from '../services/place.service'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
 place: FEPlace;
 timeIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 dateIndexes = [0, 1, 2, 3, 4, 5, 6];
  constructor(
    private location: Location,
    private placeService: PlaceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.placeService.getPlace(id)
    //  .subscribe(place => this.place = place);
    this.placeService.getPlaces()
      .subscribe(places => this.place = places.find(place => place.id === id));
  }
  goBack(): void{
this.location.back();

  }
  click():void{
    
  }
}
