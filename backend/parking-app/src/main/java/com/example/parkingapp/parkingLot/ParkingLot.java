package com.example.parkingapp.parkingLot;
import com.example.parkingapp.parkingPlace.ParkingPlace;

import javax.persistence.*;
import java.util.List;

@Entity
public class ParkingLot {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;

    public ParkingLot() {
    }

    public ParkingLot(Long id, String name){
        this.id = id;
        this.name = name;
    }
    @OneToMany(mappedBy = "parkingLot", cascade = CascadeType.ALL)
    private List<ParkingPlace> parkingPlace;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ParkingPlace> getParkingPlace() {
        return parkingPlace;
    }

    public void setParkingPlace(List<ParkingPlace> parkingPlace) {
        this.parkingPlace = parkingPlace;
    }

}
