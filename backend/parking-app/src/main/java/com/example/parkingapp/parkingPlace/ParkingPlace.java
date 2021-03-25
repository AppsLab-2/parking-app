package com.example.parkingapp.parkingPlace;
import com.example.parkingapp.parkingLot.ParkingLot;

import javax.persistence.*;

@Entity
public class ParkingPlace {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private boolean isavalible;
    private String time;
    private String day;



    public ParkingPlace(){
    }

    public ParkingPlace(Long id, boolean isavalible, String time, String day){
        this.id = id;
        this.isavalible = isavalible;
        this.time = time;
        this.day = day;

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




    public boolean getIsavalible() {
        return isavalible;
    }

    public void setIsavalible(boolean isavalible) {
        this.isavalible = isavalible;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public ParkingLot getParkingLot() {
        return parkingLot;
    }

    public void setParkingLot(ParkingLot parkingLot) {
        this.parkingLot = parkingLot;
    }
}
