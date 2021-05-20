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

    @PostMapping(value = "/postPlace")
    public void postParkingPlace(@RequestBody ParkingPlace parkingPlace){
        parkingPlaceService.saveParkingPlace(parkingPlace);
    }

    @DeleteMapping(value = "/delete")
    public void ParkingPlace(@RequestBody long id) {
        parkingPlaceService.deleteParkingPlace(id);
    }
}
