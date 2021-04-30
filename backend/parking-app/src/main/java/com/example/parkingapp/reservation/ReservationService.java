package com.example.parkingapp.reservation;

import com.example.parkingapp.parkingPlace.ParkingPlace;

public interface ReservationService {
    void saveReservation(Reservation reservation);
    Reservation updateReservation(long reservationId, Reservation reservation);
}
