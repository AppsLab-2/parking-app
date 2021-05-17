import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  date:Date; 
  constructor(private userService:UserService,private readonly router: Router){
    setInterval(() => {
      this.date = new Date()
    }, 1000)}
    logout(){
      this.userService.logout();
      this.router.navigateByUrl('/login-form');
    }
  }
