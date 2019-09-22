import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.scss']
})
export class TimerToggleComponent implements OnInit {

  types: string[] [];

  constructor(private timerService: TimerService,
              public settingsService: SettingsService) { }

  isTimerType(type: string): boolean {
      return this.timerService.getType() === type;
  }

  setTimer(type: string): void {
    this.timerService.setType(type);
  }


  ngOnInit() {
  }

}
