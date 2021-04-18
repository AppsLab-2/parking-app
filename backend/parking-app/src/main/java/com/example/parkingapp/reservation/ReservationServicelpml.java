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
}
