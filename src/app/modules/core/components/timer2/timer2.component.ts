import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { ConfigConstsService } from '../../services/config-consts.service';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.scss']
})
export class Timer2Component implements OnInit {

  private timer;
  private bgTimer;

  ticks = 0;
  storeTicks = 0;
  bgTicks = 0;

  secondsDisplay = 0;
  minutesDisplay = 0;
  hoursDisplay = 0;

  preTime = 0;
  curTime = 0;

  isPlayed = false;
  isPaused = false;

  STARTBTN = false;
  STOPBTN = false;
  RESETBTN = false;
  WAITBTN = false;


  startBtn = 'START';
  stopBtn = 'STOP';
  resetBtn = 'RESET';
  waitBtn = 'WAIT';

  subscription: Subscription;
  bgSubscription: Subscription;



  constructor(private configConstantsService: ConfigConstsService) { }

  ngOnInit() {
    this.STARTBTN = true;
    this.bgTimer = timer(0, this.configConstantsService.DEFAULT_WAIT_TIME);
    this.bgSubscription = this.bgTimer.subscribe(e => {
      this.bgTicks = e;
    });
  }

  startTimer() {
    this.STARTBTN = false;
    this.STOPBTN = this.RESETBTN = this.WAITBTN = true;
    this.timer = timer(1, this.configConstantsService.DEFAULT_TIME);
    if (!this.isPaused) {
      this.subscription = this.timer.subscribe(t => {
        this.ticks = t;
        this.secondsDisplay = this.getSeconds(this.ticks);
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);
      });
    } else {
      this.startBtn = 'START';
      this.subscription = this.timer.subscribe(t => {
        this.ticks = this.storeTicks + t;
        this.secondsDisplay = this.getSeconds(this.ticks);
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);
      });
    }
    this.isPlayed = true;
    this.isPaused = true;
  }

  resetTimer() {
    this.subscription.unsubscribe();
    this.startBtn = 'START';

    this.secondsDisplay = this.minutesDisplay = this.hoursDisplay = 0;
    this.ticks = this.storeTicks = 0;
    this.isPaused = this.isPlayed = false;
    this.STARTBTN = true;
    this.STOPBTN = this.RESETBTN = this.WAITBTN = false;
  }

  stopTimer() {
    this.subscription.unsubscribe();
    this.startBtn = 'RESUME';

    this.isPlayed = this.STOPBTN = this.WAITBTN = false;
    this.isPaused = this.STARTBTN = this.RESETBTN = true;

    this.storeTicks = this.ticks;
  }

  resumeTimer() {
    this.startTimer();
  }

  waitTimer() {
    this.stopTimer();
  }

  private getSeconds(ticks: number) {
    return this.pad(ticks % this.configConstantsService.DEFAULT_MINISEC_TIME);
  }

  private getMinutes(ticks: number) {
    return this.pad(
      (Math.floor(ticks / this.configConstantsService.DEFAULT_MINISEC_TIME)) % this.configConstantsService.DEFAULT_MINISEC_TIME);
  }

  private getHours(ticks: number) {
    return this.pad(
      (Math.floor(ticks / this.configConstantsService.DEFAULT_HOUR_TIME)) / this.configConstantsService.DEFAULT_HOUR_TIME);
  }


  private pad(digit: any) {
    return digit <= this.configConstantsService.CLOCK_DIGIT ? '0' + digit : digit;
  }
}
