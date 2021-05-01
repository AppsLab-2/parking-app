package com.example.parkingapp.parkingPlace;

public interface ParkingPlaceService {
    void saveParkingPlace(ParkingPlace parkingPlace);
    Iterable<ParkingPlace> getAllParkingPlaces();
}
