package com.example.parkingapp.parkingPlace;
import org.springframework.stereotype.Service;

@Service
public class ParkingPlaceServicelpml implements ParkingPlaceService{
    ParkingPlaceRepository parkingPlaceRepository;

    public ParkingPlaceServicelpml(ParkingPlaceRepository parkingPlaceRepository){
        this.parkingPlaceRepository = parkingPlaceRepository;
    }

    @Override
    public Iterable<ParkingPlace> getAllParkingPlaces() {
        return parkingPlaceRepository.findAll();
    }

    @Override
    public void saveParkingPlace(ParkingPlace parkingPlace) {
        parkingPlaceRepository.save(parkingPlace);
    }


    @Override
    public void deleteParkingPlace(long id) {
        parkingPlaceRepository.deleteById(id);}
    }


