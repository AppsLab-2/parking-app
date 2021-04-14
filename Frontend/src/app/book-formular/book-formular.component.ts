import { Component, OnInit } from '@angular/core';
import { Location,WeekDay } from '@angular/common';
import { FEPlace,ParkingPlace,Reservation } from '../place';
import { PlaceService } from '../place.service'
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

  constructor(    private location: Location,private placeService: PlaceService,    private route: ActivatedRoute) { }
  place: FEPlace;
  places: ParkingPlace;
  reservation :Reservation;
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
      selectedNumber:number=this.numbers[0].value;
      selectedDay:string;
      selectedStartTime:string;
      selectedEndTime:string;
      I:number;
      D:number;
      book(){
        
      }
  }