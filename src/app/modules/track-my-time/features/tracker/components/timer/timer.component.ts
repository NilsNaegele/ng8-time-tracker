import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { faBan, faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { TimerService } from '../../services/timer.service';

import * as actions from '../../../../shared/actions/timer.actions';

import { State } from '../../reducers/root.reducer';

import { AddTimerInfo, TimerInfo } from '../../../../shared/models/timer.model';
import { NgSelectValue } from '../../../../shared/models/shared.model';

import { getValueFromNgSelect } from '../../../../shared/utils/ng-select.utils';


@Component({
  selector: 'app-tracker-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerTrackerComponent implements OnInit {
  @Input() info: TimerInfo;
  @Input() elapsedTime = '00:00:00';
  @Input() activitiesOptions: string[] = [];
  @Input() trackedDetails: string[] = [];
  @Input() details: string | NgSelectValue | null = null;

  private userId = 'abc.xyz.123.890';
  icons = {
    start: faPlayCircle,
    stop: faStopCircle,
    cancel: faBan
  };

  constructor(private store: Store<State>, private timerService: TimerService) { }

  ngOnInit() {
    // console.log(this.activitiesOptions);
  }

  startTimer() {
    const now = this.timerService.getNowTime();
    this.store.dispatch(new actions.SetStartTime(now));
    this.timerService.setTimer(this.userId, {
      ...this.info,
      startTime: now
    });
  }

  stopTimer() {
    const info = {
      userId: this.userId,
      details: this.info.details,
      activity: this.info.activity,
      startTime: this.info.startTime,
      endTime: this.timerService.getNowTime()
    } as AddTimerInfo;
    this.store.dispatch(new actions.SaveTimerInfo(info));
    this.timerService.resetTimer(this.userId);
  }

  cancelTimer() {
    this.store.dispatch(new actions.CancelTimer());
    this.timerService.resetTimer(this.userId);
  }

  setDetails() {
    if (this.details) {
      const details = getValueFromNgSelect(this.details);
      this.store.dispatch(new actions.SetDetails(details));
      if (this.info.startTime !== 0) {
        this.timerService.setDetails(this.userId, details);
      }
    }
  }

  resetDetails() {
    this.store.dispatch(new actions.SetDetails(''));
    if (this.info.startTime !== 0) {
      this.timerService.setDetails(this.userId, '');
    }
  }

  setActivity(activityEl: HTMLSelectElement) {
    const activity = activityEl.value;
    this.store.dispatch(new actions.SetActivity(activity));
    if (this.info.startTime !== 0) {
      this.timerService.setActivity(this.userId, activity);
    }
  }

  setStartTime(startTimeEl: HTMLInputElement) {
    if (startTimeEl.value) {
      const startTime = new Date(startTimeEl.value).getTime();
      this.store.dispatch(new actions.SetStartTime(startTime));
      if (this.info.startTime !== 0) {
        this.timerService.setStartTime(this.userId, startTime);
      }
    }
  }

  openDateTimePicker(el: HTMLInputElement) {
    if (this.info.startTime !== 0) {
      el.click();
    }
  }

  getCurrentTimeDate(): Date {
    const now = this.timerService.getNowTime();
    return new Date(now);
  }


}
