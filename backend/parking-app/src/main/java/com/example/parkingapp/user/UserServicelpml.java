package com.example.parkingapp.user;

import com.example.parkingapp.parkingPlace.ParkingPlace;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserServicelpml implements UserService{
    UserRepository userRepository;

    public UserServicelpml(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public User addUser(User user) {
        user.setId(0);
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
}
