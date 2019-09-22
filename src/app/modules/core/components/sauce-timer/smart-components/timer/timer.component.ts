import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-sauce-timer-smart',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class SauceTimerSmartComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit() {
  }

}
