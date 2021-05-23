package com.example.parkingapp.parkingPlace;

public interface ParkingPlaceService {
    void saveParkingPlace(ParkingPlace parkingPlace,long parkingLotId);
    Iterable<ParkingPlace> getAllParkingPlaces();

    void deleteParkingPlace(long id);

}
