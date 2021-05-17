import { Component, OnInit } from '@angular/core';
import { ParkingLotService } from '../services/parking-lot.service';
import { ParkingLot } from '../models/patking-lot'

@Component({
  selector: 'app-parking-lot-form',
  templateUrl: './parking-lot-form.component.html',
  styleUrls: ['./parking-lot-form.component.css']
})

export class ParkingLotFormComponent implements OnInit {
  constructor(private parkingLotService:ParkingLotService) { }

  ngOnInit(): void {
  }
   
  model = new ParkingLot(null,"",[]);

  create(){
    this.parkingLotService.addParkingLot(this.model).subscribe();
  }
}
