package com.example.parkingapp.parkingLot;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.reservation.Reservation;
import org.springframework.web.bind.annotation.*;

@RestController
public class ParkingLotController {
    ParkingLotService parkingLotService;

    public ParkingLotController(ParkingLotService parkingLotService) {
        this.parkingLotService = parkingLotService;
    }

    @PostMapping(value = "/postParkingLot")
    public void postParkingLot(@RequestBody ParkingLot parkingLot) {
        parkingLotService.saveParkingLot(parkingLot);
    }

    @GetMapping("/parkingLot")
    public Iterable<ParkingLot> parkingLot() {
        return parkingLotService.getAllParkingLots();
    }

    @PutMapping(value = "/putParkingLot/{parkingLotId}")
    public ParkingLot updateParkingLot(@PathVariable("parkingLotId") int ParkingLotId, @RequestBody ParkingLot parkingLot){
        return parkingLotService.updateParkingLot(ParkingLotId, parkingLot);
}

    @DeleteMapping("/deleteParkingLot")
    public void ParkingLot(@RequestBody long id){
        parkingLotService.deleteParkingLot(id);
    }
}