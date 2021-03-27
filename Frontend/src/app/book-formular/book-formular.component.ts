import { Component, OnInit } from '@angular/core';
import { Location,WeekDay } from '@angular/common';
import { Place } from '../place';
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
 place: Place;
  ngOnInit(): void {
    this.getPlace();
  }
  goBack(): void{
    this.location.back();
      }
      getPlace(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.placeService.getPlace(id)
          .subscribe(hero => this.place = hero);
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
      selectednumber:number=this.numbers[0].value;
      I1:number;
      D1:number;
      I2:number;
      D2:number;
      I3:number;
      D3:number;
      I4:number;
      D4:number;
      I5:number;
      D5:number;
      I6:number;
      D6:number;
      I7:number;
      D7:number;
      selectedday1:string;
      selectedday2:string;
      selectedday3:string;
      selectedday4:string;
      selectedday5:string;
      selectedday6:string;
      selectedday7:string;
      selectedtime1:string;
      selectedtime2:string;
      selectedtime3:string;
      selectedtime4:string;
      selectedtime5:string;
      selectedtime6:string;
      selectedtime7:string;
      compareDay1(day:string){
        if(day=="Pondelok"){this.I1=0}
       else if(day=="Utorok"){this.I1=1}
       else if(day=="Streda"){this.I1=2}
       else if(day=="Štvrtok"){this.I1=3}
       else if(day=="Piatok"){this.I1=4}
       else if(day=="Sobota"){this.I1=5}
       else if(day=="Nedeľa"){this.I1=6}
      }
      compareDay2(day:string){
        if(day=="Pondelok"){this.I2=0}
       else if(day=="Utorok"){this.I2=1}
       else if(day=="Streda"){this.I2=2}
       else if(day=="Štvrtok"){this.I2=3}
       else if(day=="Piatok"){this.I2=4}
       else if(day=="Sobota"){this.I2=5}
       else if(day=="Nedeľa"){this.I2=6}
      }
      compareDay3(day:string){
        if(day=="Pondelok"){this.I3=0}
       else if(day=="Utorok"){this.I3=1}
       else if(day=="Streda"){this.I3=2}
       else if(day=="Štvrtok"){this.I3=3}
       else if(day=="Piatok"){this.I3=4}
       else if(day=="Sobota"){this.I3=5}
       else if(day=="Nedeľa"){this.I3=6}
      }
      compareDay4(day:string){
        if(day=="Pondelok"){this.I4=0}
       else if(day=="Utorok"){this.I4=1}
       else if(day=="Streda"){this.I4=2}
       else if(day=="Štvrtok"){this.I4=3}
       else if(day=="Piatok"){this.I4=4}
       else if(day=="Sobota"){this.I4=5}
       else if(day=="Nedeľa"){this.I4=6}
      }
      compareDay5(day:string){
        if(day=="Pondelok"){this.I5=0}
       else if(day=="Utorok"){this.I5=1}
       else if(day=="Streda"){this.I5=2}
       else if(day=="Štvrtok"){this.I5=3}
       else if(day=="Piatok"){this.I5=4}
       else if(day=="Sobota"){this.I5=5}
       else if(day=="Nedeľa"){this.I5=6}
      }
      compareDay6(day:string){
        if(day=="Pondelok"){this.I6=0}
       else if(day=="Utorok"){this.I6=1}
       else if(day=="Streda"){this.I6=2}
       else if(day=="Štvrtok"){this.I6=3}
       else if(day=="Piatok"){this.I6=4}
       else if(day=="Sobota"){this.I6=5}
       else if(day=="Nedeľa"){this.I6=6}
      }
      compareDay7(day:string){
        if(day=="Pondelok"){this.I7=0}
       else if(day=="Utorok"){this.I7=1}
       else if(day=="Streda"){this.I7=2}
       else if(day=="Štvrtok"){this.I7=3}
       else if(day=="Piatok"){this.I7=4}
       else if(day=="Sobota"){this.I7=5}
       else if(day=="Nedeľa"){this.I7=6}
       console.log(this.I1,this.I2,this.I3,this.I4,this.I5,this.I6,this.I7)
      }
      compareTime1(time:string)
      {if(time=="07:00-08:00"){this.D1=0}
      else if(time=="08:00-10:00"){this.D1=1}
      else if(time=="10:00-12:00"){this.D1=2}
      else if(time=="12:00-14:00"){this.D1=3}
      else if(time=="14:00-16:00"){this.D1=4}
      else if(time=="16:00-18:00"){this.D1=5}
    }
    compareTime2(time:string){
      if(time=="07:00-08:00"){this.D2=0}
    else if(time=="08:00-10:00"){this.D2=1}
    else if(time=="10:00-12:00"){this.D2=2}
    else if(time=="12:00-14:00"){this.D2=3}
    else if(time=="14:00-16:00"){this.D2=4}
    else if(time=="16:00-18:00"){this.D2=5}
  }
  compareTime3(time:string){
    if(time=="07:00-08:00"){this.D3=0}
  else if(time=="08:00-10:00"){this.D3=1}
  else if(time=="10:00-12:00"){this.D3=2}
  else if(time=="12:00-14:00"){this.D3=3}
  else if(time=="14:00-16:00"){this.D3=4}
  else if(time=="16:00-18:00"){this.D3=5}
}
compareTime4(time:string){
  if(time=="07:00-08:00"){this.D4=0}
else if(time=="08:00-10:00"){this.D4=1}
else if(time=="10:00-12:00"){this.D4=2}
else if(time=="12:00-14:00"){this.D4=3}
else if(time=="14:00-16:00"){this.D4=4}
else if(time=="16:00-18:00"){this.D4=5}
}
compareTime5(time:string){
  if(time=="07:00-08:00"){this.D5=0}
else if(time=="08:00-10:00"){this.D5=1}
else if(time=="10:00-12:00"){this.D5=2}
else if(time=="12:00-14:00"){this.D5=3}
else if(time=="14:00-16:00"){this.D5=4}
else if(time=="16:00-18:00"){this.D5=5}
}
compareTime6(time:string){
  if(time=="07:00-08:00"){this.D6=0}
else if(time=="08:00-10:00"){this.D6=1}
else if(time=="10:00-12:00"){this.D6=2}
else if(time=="12:00-14:00"){this.D6=3}
else if(time=="14:00-16:00"){this.D6=4}
else if(time=="16:00-18:00"){this.D6=5}
}
compareTime7(time:string){
  if(time=="07:00-08:00"){this.D7=0}
else if(time=="08:00-10:00"){this.D7=1}
else if(time=="10:00-12:00"){this.D7=2}
else if(time=="12:00-14:00"){this.D7=3}
else if(time=="14:00-16:00"){this.D7=4}
else if(time=="16:00-18:00"){this.D7=5}
console.log(this.D1,this.D2,this.D3,this.D4,this.D5,this.D6,this.D7)
}
    book(){
      if(this.selectednumber==1){
      this.place.Isavailable[this.I1][this.D1]=false;
      this.placeService.updatePlace(this.place).subscribe();}
     else if(this.selectednumber==2){
      this.place.Isavailable[this.I1][this.D1]=false;
      this.place.Isavailable[this.I2][this.D2]=false;
      this.placeService.updatePlace(this.place).subscribe();}
      else if(this.selectednumber==3){
        this.place.Isavailable[this.I1][this.D1]=false;
        this.place.Isavailable[this.I2][this.D2]=false;
        this.place.Isavailable[this.I3][this.D3]=false;
        this.placeService.updatePlace(this.place).subscribe();}
        else if(this.selectednumber==4){
          this.place.Isavailable[this.I1][this.D1]=false;
          this.place.Isavailable[this.I2][this.D2]=false;
          this.place.Isavailable[this.I4][this.D3]=false;
          this.place.Isavailable[this.I3][this.D4]=false;
          this.placeService.updatePlace(this.place).subscribe();}
          else if(this.selectednumber==5){
            this.place.Isavailable[this.I1][this.D1]=false;
            this.place.Isavailable[this.I2][this.D2]=false;
            this.place.Isavailable[this.I3][this.D3]=false;
            this.place.Isavailable[this.I4][this.D4]=false;
            this.place.Isavailable[this.I5][this.D5]=false;
            this.placeService.updatePlace(this.place).subscribe();}
            else if(this.selectednumber==6){
              this.place.Isavailable[this.I1][this.D1]=false;
              this.place.Isavailable[this.I2][this.D2]=false;
              this.place.Isavailable[this.I3][this.D3]=false;
              this.place.Isavailable[this.I4][this.D4]=false;
              this.place.Isavailable[this.I5][this.D5]=false;
              this.place.Isavailable[this.I6][this.D6]=false;
              this.placeService.updatePlace(this.place).subscribe();}
              else if(this.selectednumber==7){
                this.place.Isavailable[this.I1][this.D1]=false;
                this.place.Isavailable[this.I2][this.D2]=false;
                this.place.Isavailable[this.I3][this.D3]=false;
                this.place.Isavailable[this.I4][this.D4]=false;
                this.place.Isavailable[this.I5][this.D5]=false;
                this.place.Isavailable[this.I6][this.D6]=false;
                this.place.Isavailable[this.I7][this.D7]=false;
                this.placeService.updatePlace(this.place).subscribe();}
    }
  }