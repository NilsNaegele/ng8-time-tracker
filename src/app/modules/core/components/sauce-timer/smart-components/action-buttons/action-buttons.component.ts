import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit() {
  }

  toggleTimer() {
    if (this.timerService.isRunning().getValue()) {
        this.timerService.pauseTimer();
    } else {
      this.timerService.startTimer();
    }
  }

  restartTimer() {
    this.timerService.restartTimer();
  }

}
