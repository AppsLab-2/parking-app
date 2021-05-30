import { Component, OnInit } from '@angular/core';
import { ParkingPlace} from '../models/place';
import {PlaceService} from '../services/place.service';
import { ParkingLotService } from '../services/parking-lot.service';
import { ActivatedRoute } from '@angular/router';
import { ParkingLot } from '../models/patking-lot';
import { lngth } from '../dashboard/dashboard.component'
import { FormControl, FormGroup } from '@angular/forms';

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
  parkingLot:ParkingLot;
  dateForm=new FormGroup({
    date:new FormControl(''),
  })
  constructor(private placeService: PlaceService, private parkingLotService:ParkingLotService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPlaces();
    this.getParkingLot();
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
      for(var j=0;j<this.parkingLot.parkingPlace.length;j++){
        for(var i=this.D1;i<this.D2+1;i++){
        if(this.parkingLot.parkingPlace[j].reservation[i].available==true){}
        else{filter1[j]=false}
        }
      }
  }
  choosedDay(){
    this.I=11;
    for(var i=0;i<30;i++){
      if(this.parkingLot.parkingPlace[0].reservation[this.I].day!=this.dateForm.value.date){this.I+=12}
    }
    console.log(this.dateForm.value.date,this.I)
  }
    choosedStartHour(startTime:string){
      for(var i = this.I; i>this.I-12;i--){
        if (startTime==this.parkingLot.parkingPlace[0].reservation[i].startTime) {this.D1=i;}
      }
   console.log(this.selectedStartTime,this.D1)
  }
  choosedEndHour(endTime:string){
    for(var i = this.I; i>this.I-12;i--){
      if (endTime==this.parkingLot.parkingPlace[0].reservation[i].endTime) {this.D2=i;}
    }
    console.log(this.selectedEndTime,this.D2)
}
current(){
  for(var i=0;i<lngth;i++)
  {
    filter1[i]=true;
  }
}
getParkingLot(){
  const id = +this.route.snapshot.paramMap.get('id');
  this.parkingLotService.getParkinglot()
    .subscribe(parkingLots => this.parkingLot = parkingLots.find(parkingLot => parkingLot.id === id));
}
}
