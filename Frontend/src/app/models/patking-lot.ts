import { from } from 'rxjs';
import { ParkingPlace, Reservation } from './place';
import { Users } from './user'
export interface ParkingLot{
    id:number;
    name:string;
    parkingPlace:ParkingPlace[];
}