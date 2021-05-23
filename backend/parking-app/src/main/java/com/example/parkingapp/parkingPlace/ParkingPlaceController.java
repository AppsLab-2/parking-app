package com.example.parkingapp.parkingPlace;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class ParkingPlaceController {
    ParkingPlaceService parkingPlaceService;

    public ParkingPlaceController(ParkingPlaceService parkingPlaceService) {
        this.parkingPlaceService = parkingPlaceService;
    }
    @GetMapping("/places")
    public Iterable<ParkingPlace> parkingPlace(){
        return parkingPlaceService.getAllParkingPlaces();
    }

    @PostMapping(value = "/postPlace/{parkingLotId}")
    public void postParkingPlace(@RequestBody ParkingPlace parkingPlace,@PathVariable long parkingLotId ){
        parkingPlaceService.saveParkingPlace(parkingPlace,parkingLotId);
    }

    @DeleteMapping(value = "/delete/{parkingPlaceId}")
    public void ParkingPlace(@PathVariable long parkingPlaceId) {
        parkingPlaceService.deleteParkingPlace(parkingPlaceId);
    }
}
