package com.example.parkingapp.reservation;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.parkingPlace.ParkingPlaceService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class ReservationController {
    ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping(value = "/postReservation")
    public void postReservation(@RequestBody Reservation reservation){
        reservationService.saveReservation(reservation);
}
    @PutMapping(value = "/{reservationId}")
    public Reservation updateReservation(@PathVariable("reservationId") int ReservationId, @RequestBody Reservation reservation){
        return reservationService.updateReservation(ReservationId, reservation);
    }

}
