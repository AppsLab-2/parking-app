import { Component, OnInit } from '@angular/core';
import { ParkingPlace} from '../models/place';
import {PlaceService} from '../services/place.service';

export var filter1:boolean[]=[];
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedStartTime:string;
  selectedEndTime:string;
  selectedDay:string;
  I:number;
  D1:number;
  D2:number;
  G:number;
  places: ParkingPlace[]=[];

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.getPlaces();
    console.log(filter1);
  }
  getPlaces(): void{
    this.placeService.getPlaces()
    .subscribe(place =>{this.places=place;this.current();})
    }
    timeIndexes = [0, 12, 24, 36, 48, 60, 72];
    timesIndexes = [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11];
    filter(){
      this.G=this.D2-this.D1;
      for(var j=0;j<16;j++){
        for(var i=this.D1;i<this.D2+1;i++){
        if(this.places[j].reservation[i].available==true){console.log(this.places[j].reservation[i])}
        else{filter1[j]=false}
        }
      }
      console.log(filter1)
  }
  choosedDay(day:string){
    this.I=11;
    for(var i=0;i<7;i++){
      if(this.places[0].reservation[this.I].day!=day){this.I+=12}
    }
  }
    choosedStartHour(startTime:string){
      for(var i = this.I; i>this.I-12;i--){
        if (startTime==this.places[0].reservation[i].startTime) {this.D1=i;}
      }
   console.log(this.selectedStartTime,this.D1) 
  }
  choosedEndHour(endTime:string){
    for(var i = this.I; i>this.I-12;i--){
      if (endTime==this.places[0].reservation[i].endTime) {this.D2=i;}
    }
    console.log(this.selectedEndTime,this.D2)
}
current(){
  console.log("Hello");
  console.log(this.places.length);
  for(var i=0;i<this.places.length;i++)
  {
    filter1[i]=true;
  }
}
}
