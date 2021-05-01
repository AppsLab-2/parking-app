package com.example.parkingapp.reservation;

import org.springframework.stereotype.Service;

@Service
public class ReservationServicelpml implements ReservationService {
    ReservationRepository reservationRepository;

    public ReservationServicelpml(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public void saveReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }

    @Override
    public Reservation updateReservation(long reservationId, Reservation reservation) {
        Reservation reservationUd = reservationRepository.findById(reservationId).orElseThrow();
        reservation.setParkingPlace(reservationUd.getParkingPlace());
        reservationRepository.save(reservation); return reservation;
    }
}
