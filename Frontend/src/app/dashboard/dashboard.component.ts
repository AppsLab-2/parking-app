import { Component, OnInit } from '@angular/core';
import { FEPlace, ParkingPlace,Reservation } from '../models/place';
import { PlaceService } from '../services/place.service';
import { filter1 } from '../filter/filter.component';
import { ParkingLot } from '../models/patking-lot';
import { ParkingLotService } from '../services/parking-lot.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  places: FEPlace[];
  today: Date;
  parkingLot:ParkingLot;
  filter2=filter1;
  I:number;
  place:ParkingPlace[]=[];
  D:number[]=[]
  reservation:Reservation[]=[];
  edit:boolean=false;
  dashboardFilter=this.filter2;
  arr:number[]=[11,23,35,47,59,61,73];
  constructor(private placeService: PlaceService, private parkingLotservice: ParkingLotService,private route: ActivatedRoute)  {}
  ngOnInit(): void {
    this.getPlaces();
    this.compareTime();
    this.getParkingLot();
    this.getPlace();
  }
  getPlaces(): void{
  this.placeService.getPlacesAlt()
  .subscribe(place => this.places = place)
  }
  getPlace(): void{
    this.placeService.getPlaces()
    .subscribe(place =>{this.place=place})
    }
  getParkingLot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parkingLotservice.getParkinglot()
      .subscribe(parkingLots => this.parkingLot = parkingLots.find(parkingLot => parkingLot.id === id));
  }
compareTime(){
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
  else if(this.today.getHours()>=20&&this.today.getHours()<22){
    this.I=10
  }
  else if(this.today.getHours()>=22&&this.today.getHours()<24){
    this.I=11
  }
}
editF(){
  if(this.edit==false){this.edit=true}
  else if(this.edit==true){this.edit=false}
  console.log(this.edit);
}
deletePlace(place: ParkingPlace): void {
  this.place = this.place.filter(h => h !== place);
  this.placeService.deletePrakingPlace(place).subscribe();
}
create(){
  this.parkingLot.parkingPlace[this.parkingLot.parkingPlace.length-1+1]=JSON.parse(JSON.stringify(this.parkingLot.parkingPlace[13]));
  this.parkingLot.parkingPlace[this.parkingLot.parkingPlace.length-1].id=null;
  for(var i=0;i<84;i++){
    this.parkingLot.parkingPlace[this.parkingLot.parkingPlace.length-1].reservation[i].id=null;
  }
  console.log(this.parkingLot)
  this.placeService.addParkingPlace(this.parkingLot.parkingPlace[this.parkingLot.parkingPlace.length-1],this.parkingLot).subscribe();
}
}

