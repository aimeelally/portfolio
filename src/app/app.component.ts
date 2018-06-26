import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';


  timeOfDay = '';

  constructor() { }

  ngOnInit() {
    this.getTimeBasedStyleSheet();
  }

  makeBackground(time) {
    document.body.classList.add(time);
  }

  getTimeBasedStyleSheet() {
    
    var currentTime = new Date().getHours();

    // 12AM - 4:59AM
    if (0 <= currentTime&&currentTime < 5) {
      this.timeOfDay = 'night';
      this.makeBackground(this.timeOfDay);
    }
    // 5AM - 10:59AM
    if (5 <= currentTime&&currentTime < 11) {
      this.timeOfDay = 'morning';
      this.makeBackground(this.timeOfDay);
    }
    // 11AM - 3:59PM
    if (11 <= currentTime&&currentTime < 16) {
      this.timeOfDay = 'day';
      this.makeBackground(this.timeOfDay);
    }
    // 4PM - 9:59PM
    if (16 <= currentTime&&currentTime < 22) {
      this.timeOfDay = 'evening';
      this.makeBackground(this.timeOfDay);
    }
    // 10PM - 11:59PM
    if (22 <= currentTime&&currentTime <= 24) {
      this.timeOfDay = 'night';
      this.makeBackground(this.timeOfDay);
    }
    
  }
}

