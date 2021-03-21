import { Component, OnInit } from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  places: Place[];
  constructor(private placeService: PlaceService)  {}
  today: Date;
  ngOnInit(): void {
    this.getPlaces();
    this.comparetime();
  }
  getPlaces(): void{
  this.placeService.getPlaces()
  .subscribe(place => this.places = place)
  }
  I:number;
  D:number=0;
Mon(){ this.D=0};
Tur(){this.D=1};
Wen(){this.D=2};
Thur(){this.D=3};
Fri(){this.D=4};
Sat(){this.D=5};
Sun(){this.D=6};
comparetime(){
  this.today = new Date();
  if(this.today.getHours()>=7&&this.today.getHours()<8){
    this.I=0
  }
  if(this.today.getHours()>=8&&this.today.getHours()<10){
    this.I=1
  }
  if(this.today.getHours()>=10&&this.today.getHours()<12){
    this.I=2
  }
  if(this.today.getHours()>=12&&this.today.getHours()<14){
    this.I=3
  }
  if(this.today.getHours()>=14&&this.today.getHours()<16){
    this.I=4
  }
  if(this.today.getHours()>=16&&this.today.getHours()<18){
    this.I=5
  }
  if(this.today.getHours()>=18&&this.today.getHours()<19){
    this.I=6
  }
}
}
