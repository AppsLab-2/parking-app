package com.example.parkingapp.parkingLot;
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
}
