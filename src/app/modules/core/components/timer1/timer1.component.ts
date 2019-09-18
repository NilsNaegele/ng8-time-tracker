import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer1',
  templateUrl: './timer1.component.html',
  styleUrls: ['./timer1.component.scss']
})
export class Timer1Component {
  predefinedMinutes = [5, 10, 15, 30, 45, 60];

  maxMinutes = 0;
  currentSeconds = 0;

  isRunning = false;

  get maxSeconds(): number {
    return isNaN(this.maxMinutes) ? 0 : this.convertMinutesToSeconds(this.maxMinutes);
  }

  get currentVal(): number {
    return isNaN(this.currentSeconds) || this.currentSeconds < 0 ? 0 : this.currentSeconds;
  }

  get isFinished(): boolean {
    return this.currentVal > 0 && this.currentVal >= this.maxSeconds;
  }

  get retainMinutes(): number {
    return Math.floor(this.convertSecondsToMinutes(this.maxSeconds - this.currentSeconds));
  }

  get retainSeconds(): number {
    return (this.maxSeconds - this.currentSeconds) % 60;
  }

  start(): void {
    this.isRunning = true;
    const interVal = interval(1000);

    interVal.pipe(
      takeWhile(() => !this.isFinished),
      tap(i => this.currentSeconds += 1)
    ).subscribe();
  }


  finish(): void {
    this.currentSeconds = this.convertMinutesToSeconds(this.maxMinutes);
    this.isRunning = false;
  }

  reset(): void {
    this.currentSeconds = 0;
  }

  private convertSecondsToMinutes(seconds: number): number {
    return seconds / 60;
  }

  private convertMinutesToSeconds(minutes: number): number {
    return minutes * 60;
  }


}
