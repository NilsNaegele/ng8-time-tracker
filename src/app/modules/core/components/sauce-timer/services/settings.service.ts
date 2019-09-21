import { Settings } from './../models/settings';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  currentSettings: Settings;

  alarmTypes: Array<string> = [];

  timerTypes: Array<string> = [];

  // 4 pomodoros / 3 short breaks / 1 long break
  timerSequence: string[] = [];

  timerSequenceIndex: number;

  constructor(private storageService: StorageService) {
    const savedSettings = this.storageService.get('settings');

    if (savedSettings) {
      this.currentSettings = savedSettings;
    } else {
      this.resetSettings();
    }

    this.alarmTypes = [
      'beep',
      'siren',
      'zen-bell'
    ];

    this.timerTypes = [
      'pomodoro',
      'short-break',
      'long-break'
    ];

    this.timerSequence = [
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[1],
      this.timerTypes[0],
      this.timerTypes[2]
    ];

    this.timerSequenceIndex = 0;
    console.log('settingsService instantiated');
  }

  resetSettings(): void {
    this.currentSettings = new Settings(
      25,
      5,
      15,
      false,
      'zen-bell'
    );
    this.saveSettings();
    console.log('reset settings: ', this.currentSettings);
  }

  playAlarm(): void {
    if (this.currentSettings.alarm === 'none') {
      return;
    }

    const audio = new Audio();
    audio.src = `assets/audio/${this.currentSettings.alarm}.mp3}]`;
    audio.load();
    audio.play();
    console.log('palyed alarm sound: ', this.currentSettings.alarm);
  }

  saveSettings(): void {
    this.storageService.save('settings', this.currentSettings);
  }


}
