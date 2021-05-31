import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FEPlace, ParkingPlace, Reservation } from '../models/place';
import {PlaceService} from '../services/place.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
 place:ParkingPlace;
 dateForm=new FormGroup({
  date:new FormControl(''),
})
arr:number[]=[0,12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240,252,264,276,288,300,312,324,336,348,360];
F:number=0;
ava:number[]=[];
G:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
D:number;
  constructor(
    private location: Location,
    private placeService: PlaceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    for(var i=0;i<12;i++){
      this.ava[i]=this.F
      this.F++
    }
    this.getPlace();
  }
  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getPlaces()
      .subscribe(places =>{ this.place = places.find(place => place.id === id);});
  }
  goBack(): void{
this.location.back();

  }
  choosedDay(){
    for(var i=0;i<30;i++){
      if(this.place.reservation[this.arr[i]].day==this.dateForm.value.date){this.F=this.arr[i];this.D=this.arr[i]}
    }
    for(var i=0;i<12;i++){
      this.ava[i]=this.F
      this.F++
    }
  }
}
