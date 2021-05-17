package com.example.parkingapp.parkingLot;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.reservation.Reservation;

public interface ParkingLotService {
    void saveParkingLot(ParkingLot parkingLot);
    ParkingLot updateParkingLot(long parkingLotId, ParkingLot parkingLot);
    Iterable<ParkingLot> getAllParkingLots();
}
