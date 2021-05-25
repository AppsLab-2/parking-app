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
        for (ParkingPlace place:parkingLot.getParkingPlace()){
        place.setParkingLot(parkingLot);
        place.getReservation();
        for (Reservation reservation:place.getReservation()){
            reservation.setParkingPlace(place);
        }
        }
        parkingLotRepository.save(parkingLot);
    }

    @Override
    public ParkingLot updateParkingLot(long parkingLotId, ParkingLot parkingLot) {
        ParkingLot parkingLotUd = parkingLotRepository.findById(parkingLotId).orElseThrow();
        parkingLot.setParkingPlace(parkingLotUd.getParkingPlace());
        parkingLotRepository.save(parkingLot); return parkingLot;
    }
    @Override
    public Iterable<ParkingLot> getAllParkingLots() {
        return parkingLotRepository.findAll();
    }

    @Override
    public void deleteParkingLot(long id){
        parkingLotRepository.deleteById(id);
    }
}
