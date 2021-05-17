import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FEPlace, ParkingPlace, Reservation } from '../models/place';
import {PlaceService} from '../services/place.service'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
 place: FEPlace;
 isCuAv:number=0;
 places:ParkingPlace;
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
    this.placeService.getPlacesAlt()
      .subscribe(places =>{ this.place = places.find(place => place.id === id); this.avCheck()});
  }
  getPlaces():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlaces()
      .subscribe(places => this.places = places.find(place => place.id === id));
  }
  goBack(): void{
this.location.back();

  }
  avCheck(){
    for(var i=0;i<12;i++){
      for(var j=0;j<7;j++){
        if(this.place.isAvailable[j][i]==true){console.log(this.isCuAv)}
        else{this.isCuAv=1;console.log(this.isCuAv)}
      }
    }

  }
  click():void{
  }
}
