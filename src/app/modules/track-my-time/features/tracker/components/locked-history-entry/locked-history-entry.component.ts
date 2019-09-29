import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { faLock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';


import { TimerService } from '../../services/timer.service';

import * as timerActions from '../../../../shared/actions/timer.actions';

import { State } from '../../reducers/root.reducer';

import { HistoryListItem } from '../../../../shared/models/history.model';

import { TimerInfo } from '../../../../shared/models/timer.model';

@Component({
  selector: 'app-tracker-locked-history-entry',
  templateUrl: './locked-history-entry.component.html',
  styleUrls: ['./locked-history-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockedHistoryEntryComponent implements OnInit {

  @Input() item: HistoryListItem;
  userId = 'abc.xyz.123.890';
  icons = {
    lock: faLock,
    quickStart: faPlay
  };

  constructor(private store: Store<State>, private timerService: TimerService) { }

  ngOnInit() {
  }

  quickStart() {
    const timerInfo: TimerInfo = {
      details: this.item.details,
      activity: this.item.activity,
      startTime: this.timerService.getNowTime()
    };
    this.store.dispatch(new timerActions.SetTimerInfo(timerInfo));
    this.timerService.setTimer(this.userId, timerInfo);
  }

}
