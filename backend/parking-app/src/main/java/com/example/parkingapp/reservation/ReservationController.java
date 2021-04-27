package com.example.parkingapp.reservation;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.parkingPlace.ParkingPlaceService;
import org.springframework.web.bind.annotation.*;

public class ReservationController {
    ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping(value = "/postReservation")
    public void postReservation(@RequestBody Reservation reservation){
        reservationService.saveReservation(reservation);
}
    @PutMapping(value = "/putReservation")
    public Reservation updateReservation(@PathVariable("reservationId") int ReservationId, @RequestBody Reservation reservation){
        return reservationService.updateReservation(ReservationId, reservation);
    }
}
