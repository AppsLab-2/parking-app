import { Component, OnInit } from '@angular/core';
import { ParkingLotService } from '../services/parking-lot.service';
import { ParkingLot } from '../models/patking-lot';
import { FormControl, FormGroup } from '@angular/forms';
import { examplePlace } from '../models/example';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-lot-form',
  templateUrl: './parking-lot-form.component.html',
  styleUrls: ['./parking-lot-form.component.css']
})

export class ParkingLotFormComponent implements OnInit {
  ParkinGPlace=examplePlace;
  parkingLot:ParkingLot[]=[];
  P:number;
  constructor(private lotService:ParkingLotService, private readonly router: Router,) { }
  
  createGroup = new FormGroup({
    NumberOfPP:new FormControl(null),
    NumberOfPPP:new FormControl(null),
    NameOfPL: new FormControl("")
  })
  ngOnInit(): void {
    this.getLots();
  }
  getLots(): void{
    this.lotService.getParkinglot()
    .subscribe(lot => this.parkingLot = lot)
    }

  create(){
    var ParkinGLot:ParkingLot={
      id:null,
      name:this.createGroup.value.NameOfPL,
      parkingPlace:[]=[{id:null,reservation:[]=[]}],
    }
    this.P=this.createGroup.value.NumberOfPP-this.createGroup.value.NumberOfPPP;
    for(var i=0;i<this.createGroup.value.NumberOfPP;i++){
      ParkinGLot.parkingPlace[i]=JSON.parse(JSON.stringify(this.ParkinGPlace));
      ParkinGLot.parkingPlace[i].id=null;
      for(var j=0;j<this.createGroup.value.NumberOfPP;j++){
        if(i==0){
        ParkinGLot.parkingPlace[i].reservation[j].id=null;
      }
     else{
        ParkinGLot.parkingPlace[i].reservation[j].id=null;
      }
    }
  }
  for(var i=0;i<this.createGroup.value.NumberOfPPP;i++)
  {
    for(var j=0;j<360;j++){
      ParkinGLot.parkingPlace[i].reservation[j].available=false;
    }
  }
  if(this.parkingLot.length!=undefined){
    this.parkingLot[this.parkingLot.length-1+1]=JSON.parse(JSON.stringify(ParkinGLot))
    console.log(this.parkingLot);
    this.lotService.addParkingLot(this.parkingLot[this.parkingLot.length-1]).subscribe();
    this.router.navigateByUrl('/parking-lot')
  }
  else{    this.parkingLot[0]=JSON.parse(JSON.stringify(ParkinGLot))
    console.log(this.parkingLot);
    this.lotService.addParkingLot(this.parkingLot[0]).subscribe();
    this.router.navigateByUrl('/parking-lot')}
}
}
