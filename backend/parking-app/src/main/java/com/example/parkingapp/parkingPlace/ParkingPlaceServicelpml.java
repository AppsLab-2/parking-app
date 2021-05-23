package com.example.parkingapp.parkingPlace;
import com.example.parkingapp.parkingLot.ParkingLotRepository;
import com.example.parkingapp.reservation.Reservation;
import org.springframework.stereotype.Service;

@Service
public class ParkingPlaceServicelpml implements ParkingPlaceService{
    ParkingPlaceRepository parkingPlaceRepository;
    ParkingLotRepository parkingLotRepository;

    public ParkingPlaceServicelpml(ParkingPlaceRepository parkingPlaceRepository, ParkingLotRepository parkingLotRepository){
        this.parkingPlaceRepository = parkingPlaceRepository;
        this.parkingLotRepository = parkingLotRepository;
    }

    @Override
    public Iterable<ParkingPlace> getAllParkingPlaces() {
        return parkingPlaceRepository.findAll();
    }

    @Override
    public void saveParkingPlace(ParkingPlace parkingPlace,long parkingLotId) {
    parkingPlace.setParkingLot(parkingLotRepository.findById(parkingLotId).orElseThrow());
        for (Reservation reservation:parkingPlace.getReservation()){
            reservation.setParkingPlace(parkingPlace);
        }
    parkingPlaceRepository.save(parkingPlace);
    }


    @Override
    public void deleteParkingPlace(long id) {
        parkingPlaceRepository.deleteById(id);}
    }


