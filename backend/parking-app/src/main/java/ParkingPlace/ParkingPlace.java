package ParkingPlace;
import ParkingLot.ParkingLot;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class ParkingPlace {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private int number;
    private LocalDate parkingTime;

    public ParkingPlace(){
    }

    public ParkingPlace(Long id, int number, LocalDate parkingTime){
        this.id = id;
        this.number = number;
        this.parkingTime = parkingTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }
    @ManyToOne
    @JoinColumn(name="parkingLot_id", nullable=false)
    private ParkingLot parkingLot;


    public int getNumber() {

        return number;
    }

    public void setNumber(int number) {

        this.number = number;
    }

    public LocalDate getParkingTime() {
        return parkingTime;
    }

    public void setParkingTime(LocalDate parkingTime) {
        this.parkingTime = parkingTime;
    }
}
