import { Timer } from './../models/timer';
import { Injectable, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CamelizePipe } from '../pipes/camelize.pipe';
import { DashToSpacePipe } from '../pipes/dash-to-space.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { Title } from '@angular/platform-browser';
import { HistoryService } from './history.service';
import { SettingsService } from './settings.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private worker: Worker;
  private time: Timer;

  constructor(
    @Inject('windowObject') private window: Window,
    private datePipe: DatePipe,
    private camelizePipe: CamelizePipe,
    private dashToSpacePipe: DashToSpacePipe,
    private capitalizePipe: CapitalizePipe,
    private titleService: Title,
    private historyService: HistoryService,
    private settingsService: SettingsService
  ) {
    console.log('timerService instantiated');
  }

  private parseTime(seconds: number): object {
    return {
      minutes: ('0' + ((seconds / 60) | 0)).slice(-2),
      seconds: ('0' + ((seconds % 60) | 0)).slice(-2)
    };
  }

  getType(): string {
    return this.time.type.getValue();
  }

  setType(type: string): TimerService {
    this.time.type.next(type);

    this.setTimer(type, this.time.granularity);
    console.log('current active timer: ', type);
    return this;
  }

  setTimer(type: string, granularity?: number): TimerService {

      this.time = new Timer(new BehaviorSubject(type),
                            this.getDuration(type),
                            granularity || 1000,
                            [],
                            new BehaviorSubject(false),
                            new BehaviorSubject({}),
                            null,
                            null);
      this.getCurrentTime().subscribe((time) => {
      this.titleService.setTitle(time);
    });
      console.log('set timer', this.time);
      return this;
  }

  private getSeconds(timeObj: object): number {
        return (parseInt(timeObj['minutes'], 10) * 60) + parseInt(timeObj['seconds'], 10);
  }

  private getDuration(type: string): number {
    let time;
    for (let i = 0; i < this.settingsService.timerTypes.length; i++) {
      if (type === this.settingsService.timerTypes[i]) {
        time = this.settingsService.currentSettings[this.camelizePipe.transform(type) + 'Timer'];
      }
    }
    return time * 60;
  }

  getCurrentTime(): Observable<string> {
    if (!this.time) {
      return;
    }
    return this.time.currentTime.pipe(map((value) => {
      if (value['minutes'] && value['seconds']) {
        return value['minutes'] + ':' + value['seconds'];
      } else {
        const time = this.parseTime(this.time.duration);
        return time['minutes'] + ':' + time['seconds'];
      }
    }));
  }

  getCurrentTimePercentage(): Observable<number> {
    if (!this.time) {
      return;
    }
    const originalDuration = this.getDuration(this.time.type.getValue());

    return this.time.currentTime.pipe(map((value) => {
            if (value['minutes'] && value['seconds']) {
              const seconds = this.getSeconds(value);
              return 100 - Math.floor((seconds / originalDuration) * 100);
            } else {
              if (this.time.duration) {
                return 100 - Math.floor((this.time.duration / originalDuration) * 100);
              } else {
                return 0;
              }
            }
    }));

  }

  private getNextTimer(): string {
    this.settingsService.timerSequenceIndex =
    (this.settingsService.timerSequenceIndex === this.settingsService.timerSequence.length - 1) ?
    0 : this.settingsService.timerSequenceIndex + 1;
    return this.settingsService.timerSequence[this.settingsService.timerSequenceIndex];
  }

  startTimer(): void {
      if (this.time.running.getValue()) {
        return;
      }
      this.time.running.next(true);
      console.log('timer running: ', this.time.running.getValue());

      if (this.getDuration(this.getType()) === this.time.duration) {
        this.time.duration--;
      }

      const start = Date.now();

      this.time.started = this.time.started || new Date();

      this.worker = new Worker('../../../../../../timer.worker.js');

      const timer = () => {
        if (this.worker && this.time.running.getValue()) {
          this.worker.postMessage({ start, duration: this.time.duration, granularity: this.time.granularity});
          console.log('message posted to worker');
          this.worker.addEventListener('message', (e: MessageEvent) => {
            console.log('message received from worker', e.data);
            const diff = e.data;

            if (diff <= 0) {
              this.time.running.next(false);
              this.time.ended = new Date();

              this.historyService.addTimeSegment(
                this.time.type.getValue(),
                this.time.started,
                this.time.ended
              );

              if (this.settingsService.currentSettings.alarm !== 'none') {
                this.settingsService.playAlarm();
              }

              setTimeout(() => {
                const timerType = this.capitalizePipe.transform(this.dashToSpacePipe.transform(this.time.type.getValue()));
                this.worker.terminate();
                this.window.alert(timerType + ' ended at ' + this.datePipe.transform(this.time.ended, 'shortTime'));
              }, 1000);
              console.log('timer ended: ', this.time);
            }

            this.time.currentTime.next(this.parseTime(diff));

            if (diff === 0 && this.settingsService.currentSettings.autoswitch) {
              setTimeout(() => {
                this.setType(this.getNextTimer());
                this.startTimer();
              }, 2000);
            }

            this.time.tickFtns.forEach((ftn) => {
              ftn(this.time.currentTime.getValue()['minutes'], this.time.currentTime.getValue()['seconds']);
            }, this);

          });
        } else {
          return;
        }
      };
      timer();
  }

  pauseTimer(): TimerService {
    this.time.running.next(false);
    this.time.duration = this.getSeconds(this.time.currentTime.getValue());

    if (this.worker) {
      this.worker.terminate();
    }
    console.log('paused timer', this.time);
    return this;
  }

  restartTimer(): TimerService {
    if (this.worker) {
      this.worker.terminate();
    }

    this.setTimer(this.time.type.getValue(), this.time.granularity);
    console.log('timer restarted');
    return this;
  }

  onTick(ftn: () => {}): TimerService {
    if (typeof ftn === 'function') {
      this.time.tickFtns.push(ftn);
      console.log('added to function list: ', this.time.tickFtns);
    }
    return this;
  }

  isRunning(): BehaviorSubject<any> {
    if (!this.time) {
      return;
    }
    return this.time.running;
  }

  private timerWebWorker() {}

}
