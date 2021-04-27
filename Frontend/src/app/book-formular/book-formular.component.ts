import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FEPlace,ParkingPlace,Reservation } from '../models/place';
import { PlaceService } from '../services/place.service'
import { ActivatedRoute } from '@angular/router';
interface Number {
  value: number;
}
interface times{
  time:string;
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
  constructor(    private location: Location,private placeService: PlaceService,    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getPlace();
    this.getPlaces();
  }
  goBack(): void{
    this.location.back();
      }
      getPlace(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        //this.placeService.getPlace(id)
        //  .subscribe(place => this.place = place);
        this.placeService.getPlacesAlt()
          .subscribe(places => this.place = places.find(place => place.id === id));
      }
      getPlaces():void{
        const id = +this.route.snapshot.paramMap.get('id');
        this.placeService.getPlaces()
          .subscribe(places => this.places = places.find(place => place.id === id));
      }
      numbers: Number[] = [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5},
        {value: 6},
        {value: 7},
      ];
      startTimes: times[]=[
        {time:"00:00:00"},
        {time:"02:00:00"},
        {time:"04:00:00"},
        {time:"06:00:00"},
        {time:"08:00:00"},
        {time:"10:00:00"},
        {time:"12:00:00"},
        {time:"14:00:00"},
        {time:"16:00:00"},
        {time:"18:00:00"},
        {time:"20:00:00"},
        {time:"22:00:00"}
      ]
      endTimes: times[]=[
        {time:"02:00:00"},
        {time:"04:00:00"},
        {time:"06:00:00"},
        {time:"08:00:00"},
        {time:"10:00:00"},
        {time:"12:00:00"},
        {time:"14:00:00"},
        {time:"16:00:00"},
        {time:"18:00:00"},
        {time:"20:00:00"},
        {time:"22:00:00"},
        {time:"00:00:00"},
      ]/* Dočasné, neskôr to zmením aby tu tieto objekty zbytočne nezavadzali*/
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
      choosedDay(day:string){
        /*for(var i = 0; i<7;i++){
          if (day==this.place.day[i]) {this.I=i;}
        }*/
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
            this.placeService.updateReservation(this.places.reservation[this.F[i]]).subscribe()
          }
        }
        console.log(this.place.isAvailable)
        console.log(this.places.reservation)
      }
  }
