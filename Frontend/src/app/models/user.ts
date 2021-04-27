import { Reservation } from './place'
import { ParkingLot } from './patking-lot'

export interface Users{
    id:number;
    name:string;
    password:string;
    reservations: Reservation;
    parkinglots:ParkingLot;
    isAdmin:boolean;
}
