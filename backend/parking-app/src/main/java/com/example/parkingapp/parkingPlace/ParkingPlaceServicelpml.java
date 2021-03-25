package com.example.parkingapp.parkingPlace;
import org.springframework.stereotype.Service;

@Service
public class ParkingPlaceServicelpml implements ParkingPlaceService{
    ParkingPlaceRepository parkingPlaceRepository;

    public ParkingPlaceServicelpml(ParkingPlaceRepository parkingPlaceRepository){
        this.parkingPlaceRepository = parkingPlaceRepository;
    }
    @Override
    public void saveParkingPlace(ParkingPlace parkingPlace) {
        parkingPlaceRepository.save(parkingPlace);
    }
}
