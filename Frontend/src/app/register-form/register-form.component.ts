import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor( private userService:UserService, private readonly router: Router ) { }

  ngOnInit(): void {
  }
  register(): void {
    if (this.registerGroup.valid) {
      const username = this.registerGroup.value.username;
      const password = this.registerGroup.value.password;
      this.userService.register(username, password)
        .subscribe(() => {
          this.userService.login(username, password)
            .subscribe(() => this.router.navigateByUrl('/login-form'));
        });
    }
  }

}
