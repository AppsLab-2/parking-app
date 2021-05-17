import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-formular',
  templateUrl: './login-formular.component.html',
  styleUrls: ['./login-formular.component.css']
})
export class LoginFormularComponent {

  loginGroup = new FormGroup( {
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private location: Location,
  ) { }

  login(): void {
    if (this.loginGroup.valid) {
      const username = this.loginGroup.value.username;
      const password = this.loginGroup.value.password;
      this.userService.login(username, password)
        .subscribe(() => this.router.navigateByUrl('/parking-lot'));
    }
  }
  goBack(): void{
    this.location.back();
    
      }
}
