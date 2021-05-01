package com.example.parkingapp.user;
import com.example.parkingapp.parkingPlace.ParkingPlace;

import java.util.Optional;
public interface UserService {
    User addUser(User user);
    Optional<User> getUserByUsername(String username);
    User updateUser(User user);
    void saveUser(User user);
}
