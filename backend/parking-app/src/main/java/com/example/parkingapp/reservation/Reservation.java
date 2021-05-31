package com.example.parkingapp.reservation;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.userdetails.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private boolean isAvailable;
    private LocalDate day;
    private LocalTime startTime;
    private LocalTime endTime;


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="parkingPlace_id", nullable=false)
    private ParkingPlace parkingPlace;

    @ManyToMany
    @JoinTable(name = "reservation_user",joinColumns = @JoinColumn(name = "reservation_id"),inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> user;

    public Reservation() {
    }

    public Reservation(Long id, boolean isAvailable, LocalDate day, LocalTime startTime, LocalTime endTime) {
        this.id = id;
        this.isAvailable = isAvailable;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public ParkingPlace getParkingPlace() {
        return parkingPlace;
    }

    public void setParkingPlace(ParkingPlace parkingPlace) {
        this.parkingPlace = parkingPlace;
    }

    public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }
}
