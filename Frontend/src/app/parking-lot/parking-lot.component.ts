import { Component, OnInit } from '@angular/core';
import { ParkingLotService } from '../services/parking-lot.service';
import { ParkingLot } from '../models/patking-lot';


@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  edit:boolean=false;
  parkingLot:ParkingLot[]=[];
  constructor(private lotService:ParkingLotService) { }


  ngOnInit(): void {
    this.getLots();
  }
  getLots(): void{
    this.lotService.getParkinglot()
    .subscribe(lot => this.parkingLot = lot)
    }
    editF(){
  if(this.edit==false){this.edit=true}
  else if(this.edit==true){this.edit=false}
  console.log(this.edit);
}
deleteParkingLot(parkingLot: ParkingLot): void {
  this.parkingLot = this.parkingLot.filter(h => h !== parkingLot);
  this.lotService.deletePrakingLot(parkingLot).subscribe();
}
}
