import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
  })
  constructor( private userService:UserService, private readonly router: Router, private location: Location, ) { }

  ngOnInit(): void {
  }
  register(): void {
    if (this.registerGroup.valid) {
      const username = this.registerGroup.value.username;
      const password = this.registerGroup.value.password;
      const firstname = this.registerGroup.value.firstname;
      const lastname = this.registerGroup.value.lastname;
      this.userService.register(username, password, firstname, lastname)
        .subscribe(() => {
          this.userService.login(username, password)
            .subscribe(() => this.router.navigateByUrl('/login-form'));
        });
    }
  }
  goBack(): void{
    this.location.back();
    
      }

}
