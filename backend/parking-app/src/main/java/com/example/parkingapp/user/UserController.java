package com.example.parkingapp.user;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import com.example.parkingapp.parkingPlace.ParkingPlaceService;
import com.example.parkingapp.reservation.Reservation;
import org.springframework.web.bind.annotation.*;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.util.List;

@RestController
public class UserController {
    public UserController(UserService userService) {
        this.userService = userService;
    }

    UserService userService;

    @GetMapping("/user")
    public void getUser() {
    }



    @PostMapping("/postUser")
    public void postUser(@RequestBody User user){
        System.out.println(user.getLastname());
        userService.saveUser(user);
    }
    @PutMapping(value = "/putUser/{userId}")
    public User updateUser(@PathVariable("userId") int UserId, @RequestBody User user){
        return userService.updateUser(user);
    }
}