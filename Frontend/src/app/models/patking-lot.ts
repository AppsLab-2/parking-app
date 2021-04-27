import { from } from 'rxjs';
import { ParkingPlace } from './place';
import { Users } from './user'
export interface ParkingLot{
    id:number;
    name:string;
    parkingPlace:ParkingPlace
    admin:Users;
}
