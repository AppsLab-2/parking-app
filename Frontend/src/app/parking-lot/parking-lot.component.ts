import { Component, OnInit } from '@angular/core';
import { ParkingLotService } from '../services/parking-lot.service';
import { parkingLot } from '../models/patking-lot';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {
  parkingLot:parkingLot[];
  constructor(private lotService:ParkingLotService) { }

  ngOnInit(): void {
    this.getLots();
  }
  getLots(): void{
    this.lotService.getParkinglot()
    .subscribe(lot => this.parkingLot = lot)
    }
}
