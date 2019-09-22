import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-sauce-timer',
  templateUrl: './sauce-timer.component.html',
  styleUrls: ['./sauce-timer.component.scss']
})
export class SauceTimerComponent implements OnInit {

  constructor(public timerService: TimerService,
              public settingsService: SettingsService) { }

  ngOnInit() {
    this.timerService.setTimer(this.settingsService.timerTypes[0]);
  }

}
