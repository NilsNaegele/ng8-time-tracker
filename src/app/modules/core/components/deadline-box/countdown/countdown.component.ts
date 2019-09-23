import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../models/event-model';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() event: EventModel;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit() {
    this.calculateTimeDifference();
    setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  calculateTimeDifference(): void {
    let timeRemaining = this.event.dueDate.getTime() + this.event.dueDate.getTimezoneOffset() - Date.now();
    timeRemaining += 1000 * 60 * 60 * 24;
    timeRemaining -= 1000 * 60 * 60;

    this.seconds = Math.floor((timeRemaining / 1000) % 60);
    this.minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    this.hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    }

}
