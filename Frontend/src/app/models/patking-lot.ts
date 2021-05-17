import { from } from 'rxjs';
import { ParkingPlace, Reservation } from './place';
import { Users } from './user'
export interface parkingLot{
    id:number;
    name:string;
    parkingPlace:ParkingPlace[];
}
export class ParkingLot {

    constructor(
        public id:number,
        public name:string,
        public parkingPlaces?:ParkingPlace[],
    ){}
  }
  
