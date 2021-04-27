export interface ParkingPlace {
    id: number;
    reservation: Reservation[];
  }
export interface Reservation{
  id:number;
  available: boolean;
  day:string;
  startTime:string;
  endTime:string;
}
export interface FEPlace {
  id:number;
  isAvailable: boolean[][];
  time: String[];
  day: String[];
}