import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: number = Date.now();
  date:Date; 
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)}
  }
