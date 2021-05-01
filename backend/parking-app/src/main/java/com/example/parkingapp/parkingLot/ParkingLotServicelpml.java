package com.example.parkingapp.parkingLot;
import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.reservation.Reservation;
import org.springframework.stereotype.Service;

@Service
public class ParkingLotServicelpml implements ParkingLotService{
    ParkingLotRepository parkingLotRepository;


    public ParkingLotServicelpml(ParkingLotRepository parkingLotRepository){
        this.parkingLotRepository = parkingLotRepository;
    }
    @Override
    public void saveParkingLot(ParkingLot parkingLot) {
        parkingLotRepository.save(parkingLot);
    }

    @Override
    public ParkingLot updateParkingLot(long parkingLotId, ParkingLot parkingLot) {
        parkingLotRepository.save(parkingLot); return parkingLot;
    }
}
