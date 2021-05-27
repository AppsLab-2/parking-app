package com.example.parkingapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@SpringBootApplication
public class ParkingAppApplication  {

	public static void main(String[] args) {
		SpringApplication.run(ParkingAppApplication.class, args);
	}

}
