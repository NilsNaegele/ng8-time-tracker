import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-sauce-timer',
  templateUrl: './about-sauce-timer.component.html',
  styleUrls: ['./about-sauce-timer.component.scss']
})
export class AboutSauceTimerComponent implements OnInit {
  public currentYear: number;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

}
