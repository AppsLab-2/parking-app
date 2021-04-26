package com.example.parkingapp.reservation;

public interface ReservationService {
    void saveReservation(Reservation reservation);
    Reservation updateReservation(int reservationId, Reservation reservation);
}
