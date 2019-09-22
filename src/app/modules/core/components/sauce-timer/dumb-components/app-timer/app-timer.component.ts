import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-sauces-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.scss']
})
export class AppTimerComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit() {
  }

}
