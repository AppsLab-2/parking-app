package ParkingPlace;
import ParkingLot.ParkingLot;
import ParkingLot.ParkingLotRepository;
import org.springframework.stereotype.Service;

@Service
public class ParkingPlaceServicelpml implements ParkingPlaceService{
    ParkingPlaceRepository parkingPlaceRepository;

    public ParkingPlaceServicelpml(ParkingPlaceRepository parkingPlaceRepository){
        this.parkingPlaceRepository = parkingPlaceRepository;
    }
    @Override
    public void saveParkingPlace(ParkingPlace parkingPlace) {ParkingPlaceRepository parkingPlaceRepository;

    }
}
