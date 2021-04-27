import { Component, OnInit } from '@angular/core';
import { FEPlace,Reservation,ParkingPlace } from '../models/place';
import { PlaceService } from '../services/place.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface times{
  time:string;
}
@Component({
  selector: 'app-unbooking-formular',
  templateUrl: './unbooking-formular.component.html',
  styleUrls: ['./unbooking-formular.component.css']
})
export class UnbookingFormularComponent implements OnInit {
  place: FEPlace;
  places: ParkingPlace;
  reservation :Reservation;
  constructor(private location: Location,private placeService: PlaceService,    private route: ActivatedRoute) { }
  ngOnInit(){}
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
      selectedDay:string;
      selectedStartTime:string;
      selectedEndTime:string;
      I:number;
      D1:number;
      D2:number;
      G:number;
      F:number[]=[];
      isCuAv:boolean=false;
      choosedDay(day:string){
        for(var i = 0; i<7;i++){
          if (day==this.place.day[i]) {this.I=i;}
        }
      }
      choosedStartHour(startTime:string){
        for(var i = 0; i<12;i++){
          if (startTime==this.startTimes2[i]) {this.D1=i;}
        }
      }
      choosedEndHour(endTime:string){
           for(var i = 0; i<12;i++){
          if (endTime==this.endTimes2[i]) {this.D2=i;}
        }
        this.G=this.D2-this.D1
        for(var i=0;i<this.G+1;i++){
          if(this.place.isAvailable[this.I][this.D1]==false&&this.D1<=this.D2){
            this.D1++
            this.F[i]=this.D1;
          }
          else{this.isCuAv=true}

        }
      }
      unbook(){
        if(this.isCuAv==false){
          for(var i=0; i<this.G+1;i++){
            this.place.isAvailable[this.I][this.F[i]]=true;
          }
        }
      }
}
