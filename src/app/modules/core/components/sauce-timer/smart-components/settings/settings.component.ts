import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CamelizePipe } from '../../pipes/camelize.pipe';
import { TimerService } from '../../services/timer.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private titleService: Title,
              public camelizePipe: CamelizePipe,
              private timerService: TimerService,
              public settingsService: SettingsService) { }

  refreshTimer() {
    this.timerService.restartTimer();
  }

  resetSettings() {
    this.settingsService.resetSettings();
    this.refreshTimer();
  }

  previewAlarm(): void {
    this.settingsService.playAlarm();
  }

  saveSettings(): void {
    this.settingsService.saveSettings();
  }

}
