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
  places: ParkingPlace;
  reservation :Reservation;

  constructor(    private location: Location,private placeService: PlaceService,    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getPlace();
  }
  goBack(): void{
    this.location.back();
      }
      getPlace(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        //this.placeService.getPlace(id)
        //  .subscribe(place => this.place = place);
        this.placeService.getPlaces()
          .subscribe(places => this.place = places.find(place => place.id === id));
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
        {time:"24:00:00"},
      ]
      startTimes2:string []=["00:00:00","02:00:00","04:00:00","06:00:00","08:00:00","10:00:00","12:00:00","14:00:00","16:00:00","18:00:00","20:00:00","22:00:00"]
      endTimes2:string []=["02:00:00","04:00:00","06:00:00","08:00:00","10:00:00","12:00:00","14:00:00","16:00:00","18:00:00","20:00:00","22:00:00","24:00:00"]/* Dočasné, neskôr to zmením aby tu tieto zoznamy/objekty zbytočne nezavadzali*/
      selectedNumber:number=this.numbers[0].value;
      selectedDay:string;
      selectedStartTime:string;
      selectedEndTime:string;
      I:number;
      D1:number;
      D2:number;
      G:number;
      F:number[];
      isCuAv:boolean=true;
      choosedDay(day:string){
        for(var i = 0; i<7;i++){
          if (day==this.place.day[i]) {this.I=i;}
        }
      }
      choosedStartHour(startTime:string){
        console.log(startTime)
        for(var i = 0; i<12;i++){
          if (startTime==this.startTimes2[i]) {this.D1=i;}
        }
      }
      choosedEndHour(endTime:string){
        console.log(endTime)
           for(var i = 0; i<12;i++){
          if (endTime==this.endTimes2[i]) {this.D2=i;}
        }
        this.G=this.D2-this.D1
        for(var i=0;i<this.G+1;i++){
          if(this.place.isAvailable[this.I][this.D1]==true&&this.D1<=this.D2){
            this.D1++
            this.F[i]=this.D1;
          }
          else{this.isCuAv=false}

        }
      }
      book(){
        if(this.isCuAv==true){
          for(var i=0; i<this.G+1;i++){
            this.place.isAvailable[this.I][this.F[i]]=true;
            this.placeService.updateReservation(this.reservation).subscribe();
          }
        }
      }
  }