import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FEPlace,ParkingPlace,Reservation } from '../models/place';
import { PlaceService } from '../services/place.service'
import { ActivatedRoute } from '@angular/router';
interface Number {
  value: number;
}

@Component({
  selector: 'app-book-formular',
  templateUrl: './book-formular.component.html',
  styleUrls: ['./book-formular.component.css']
})
export class BookFormularComponent implements OnInit {
  place: FEPlace;
  places:ParkingPlace;
  reservations:Reservation;
  numbers: Number[] = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
  ];
  daysIndexes = [0, 12, 24, 36, 48, 60, 72];
  timesIndexes = [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11];
  selectedNumber:number=this.numbers[0].value;
  selectedDay:string;
  selectedStartTime:string;
  selectedEndTime:string;
  I:number;
  D1:number;
  D2:number;
  G:number;
  F:number[]=[];
  isCuAv:boolean=true;
  constructor(    private location: Location,private placeService: PlaceService,    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getPlaces();
  }
  goBack(): void{
    this.location.back();
      }
      getPlaces():void{
        const id = +this.route.snapshot.paramMap.get('id');
        this.placeService.getPlaces()
          .subscribe(places => this.places = places.find(place => place.id === id));
      }
      choosedDay(day:string){
        for(var i=11; i<84; i++){
          if(this.selectedDay==this.places.reservation[i].day){this.I=i;}
        }
        console.log(this.I)
      }
      choosedStartHour(startTime:string){
        for(var i = this.I; i>this.I-12;i--){
          if (startTime==this.places.reservation[i].startTime) {this.D1=i;}
        }
        console.log(this.D1)
      }
      choosedEndHour(endTime:string){
           for(var i = this.I; i>this.I-12;i--){
          if (endTime==this.places.reservation[i].endTime) {this.D2=i;}
        }
        console.log(this.D2,endTime);
        this.G=this.D2-this.D1;
        for(var i = 0; i<this.G+1; i++){
        if(this.G>=0&&this.places.reservation[this.D1].available==true&&this.D1<=this.D2){
          this.F[i]=this.D1;
          this.D1++;
          this.isCuAv=true;
        }
        else{
          this.isCuAv=false;
        }
      }
      console.log(this.F,this.D1)
    }
      book(){
        if(this.isCuAv==true){
          for(var i=0; i<this.G+1;i++){
            this.places.reservation[this.F[i]].available=false;
            this.placeService.updateReservation(this.places.reservation[this.F[i]]).subscribe();
          }
        }
        console.log(this.place.isAvailable)
        console.log(this.places.reservation)
      }
  }
