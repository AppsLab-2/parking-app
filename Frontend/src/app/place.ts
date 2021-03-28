export interface ParkingPlace {
    id: number;
    reservation: Reservation[];
  }
export interface Reservation{
  id:number;
  available: boolean;
  day:Date;
  startTime:Date;
  endTime:Date;
}
export interface FEPlace {
  id:number;
  isAvailable: boolean[][];
  time: String[];
  day: String[];
}