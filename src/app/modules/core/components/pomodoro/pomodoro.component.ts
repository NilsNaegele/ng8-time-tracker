import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  @ViewChild('bar', { static: false }) bar: ElementRef;

  time: number;
  count: number;

  focus: boolean;
  pause: boolean;
  timerActive: boolean;

  currentState: number;
  currentStateName: string;

  shortBreakTime: number;
  longBreakTime: number;
  focusTime: number;

  audio: HTMLAudioElement;



  constructor() {
    this.time = 0;

    this.focus = false;
    this.pause = false;
    this.timerActive = false;

    this.currentState = 0;
    this.currentStateName = 'set timer';

    this.shortBreakTime = 300;
    this.longBreakTime = 900;
    this.focusTime = 1500;

    this.audio = new Audio();
  }

  ngOnInit() {
    this.audio.src = '../../../../../assets/beep.mp3';
    this.audio.load();
  }

  notify() {
    const options = {
      body: `Your ${this.currentStateName} has ended.`,
      icon: '../../../../../assets/icons-256.png'
    };
  }

  setTimer(time: number, focus = false) {
      this.currentState = time;
      this.setTimerSvg(time);
      this.currentStateName = this.changeCurrentState(time);
      this.focus = focus;
      this.time = time;
      this.startTimer();
  }

  private changeCurrentState(time: number): string {
    switch (time) {
      case this.shortBreakTime:
        return 'short break';
      case this.longBreakTime:
        return 'long break';
      case this.focusTime:
        return 'focus';
        default:
          return 'set timer';
    }
  }

  setTimerSvg(time: number) {
    this.bar.nativeElement.style.strokeDashoffset = this.changeBarStroke(time);
  }


  private changeBarStroke(time: number): string {
    if (time === 0) {
      return '0';
    }
    return (848.23 * (1 - time / this.currentState)).toString();
  }

  startFocus() {
    this.focus = true;
    this.count = 0;
    this.setTimer(this.focusTime, true);
  }

  togglePause() {
    this.pause = !this.pause;
    this.startTimer();
  }

  startTimer() {
    if (!this.timerActive || this.currentState === 0) {
      this.timerActive = true;
      this.timer();
    }
  }

  timer() {
    if (this.time > 0 && !this.pause) {
      setTimeout(() => {
        if (this.time > 0) {
          if (this.time - 1 === 0) {
            this.timerActive = false;
            this.audio.play();
            this.notify();
          }
          this.time -= 1;
          this.setTimerSvg(this.time);
          this.timer();
        }
      }, 1000);
    } else {
      this.timerActive = false;
      if (this.focus && !this.pause) {
        this.count++;
        if (this.count % 7 === 0) {
          this.setTimer(this.longBreakTime, true);
        } else if (this.count % 2 === 0) {
          this.setTimer(this.focusTime, true);
        } else {
          this.setTimer(this.shortBreakTime, true);
        }
      }
    }
  }

}
