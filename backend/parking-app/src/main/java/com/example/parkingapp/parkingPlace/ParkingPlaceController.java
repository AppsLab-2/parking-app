package com.example.parkingapp.parkingPlace;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ParkingPlaceController {
    ParkingPlaceService parkingPlaceService;

    public ParkingPlaceController(ParkingPlaceService parkingPlaceService) {
        this.parkingPlaceService = parkingPlaceService;
    }
    @GetMapping("/place")
    public void ParkingPlace(ParkingPlace parkingPlace){
        parkingPlaceService.saveParkingPlace(parkingPlace);

    }
    @PostMapping(value = "/postPlace")
    public void postParkingPlace(@RequestBody ParkingPlace parkingPlace){
        parkingPlaceService.saveParkingPlace(parkingPlace);
}
}
