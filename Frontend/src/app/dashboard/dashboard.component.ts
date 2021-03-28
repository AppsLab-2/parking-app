import { Component, OnInit } from '@angular/core';
import {FEPlace, ParkingPlace,Reservation} from '../place';
import {PlaceService} from '../place.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  places: FEPlace[];
  constructor(private placeService: PlaceService)  {}
  today: Date;
  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces(): void{
  this.placeService.getPlaces()
  .subscribe(place => this.places = place)
  }
  I:number;
comparetime(){
  this.today = new Date();
  if (this.today.getHours()>=0&&this.today.getHours()<2) {
   this.I=0
  }
  else if(this.today.getHours()>=2&&this.today.getHours()<4){
    this.I=1
  }
  else if(this.today.getHours()>=4&&this.today.getHours()<6){
    this.I=2
  }
  else if(this.today.getHours()>=6&&this.today.getHours()<8){
    this.I=3
  }
  else if(this.today.getHours()>=8&&this.today.getHours()<10){
    this.I=4
  }
  else if(this.today.getHours()>=10&&this.today.getHours()<12){
    this.I=5
  }
  else if(this.today.getHours()>=12&&this.today.getHours()<14){
    this.I=6
  }
  else if(this.today.getHours()>=14&&this.today.getHours()<16){
    this.I=7
  }
  else if(this.today.getHours()>=16&&this.today.getHours()<18){
    this.I=8
  }
  else if(this.today.getHours()>=18&&this.today.getHours()<20){
    this.I=9
  }
  else if(this.today.getHours()>20&&this.today.getHours()<22){
    this.I=10
  }
  else if(this.today.getHours()>=22&&this.today.getHours()<0){
    this.I=11
  }
 else{this.I=0}
 console.log(this.I);
  }

}
