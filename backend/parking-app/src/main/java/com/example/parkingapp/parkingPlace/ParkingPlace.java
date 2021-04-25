package com.example.parkingapp.parkingPlace;
import com.example.parkingapp.reservation.Reservation;
import com.example.parkingapp.parkingLot.ParkingLot;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;


@Entity
public class ParkingPlace {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="parkingLot_id", nullable=false)
    private ParkingLot parkingLot;

    @OneToMany(mappedBy = "parkingPlace", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Reservation> reservation;

    public ParkingPlace(Long id, ParkingLot parkingLot, List<Reservation> reservation) {
        this.id = id;
        this.parkingLot = parkingLot;
        this.reservation = reservation;
    }

    public ParkingPlace() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ParkingLot getParkingLot() {
        return parkingLot;
    }

    public void setParkingLot(ParkingLot parkingLot) {
        this.parkingLot = parkingLot;
    }

    public List<Reservation> getReservation() {
        return reservation;
    }

    public void setReservation(List<Reservation> reservation) {
        this.reservation = reservation;
    }
}
