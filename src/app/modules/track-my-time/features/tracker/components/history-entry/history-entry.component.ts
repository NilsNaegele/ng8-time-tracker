import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HistoryListItem,
         UpdateHistoryItemDetailsPayload,
         UpdateHistoryItemTimesPayload,
        UpdateHistoryItemActivityPayload } from 'src/app/modules/track-my-time/shared/models/history.model';
import { NgSelectValue } from 'src/app/modules/track-my-time/shared/models/shared.model';
import { faTrash, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/timer.reducer';
import { TimerService } from '../../services/timer.service';
import { getValueFromNgSelect } from 'src/app/modules/track-my-time/shared/utils/ng-select.utils';
import { TimerInfo } from 'src/app/modules/track-my-time/shared/models/timer.model';

import * as historyActions from '../../../../shared/actions/history.actions';
import * as timerActions from '../../../../shared/actions/timer.actions';

@Component({
  selector: 'app-tracker-history-entry',
  templateUrl: './history-entry.component.html',
  styleUrls: ['./history-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryEntryComponent implements OnInit {

  @Input() item: HistoryListItem;
  @Input() activitiesOptions: string[] = [];
  @Input() trackedDetails: string[] = [];
  @Input() details: string | NgSelectValue | null = null;

  userId = 'abc.xyz.123.890';

  icons = {
    remove: faTrash,
    quickStart: faPlay
  };

  constructor(private store: Store<State>,
              private timerService: TimerService) { }

  ngOnInit() {
  }

  updateDetails() {
    if (this.details) {
      const payload = <UpdateHistoryItemDetailsPayload>{
        itemId: this.item.id,
        details: getValueFromNgSelect(this.details)
      };
      this.store.dispatch(new historyActions.UpdateDetails(this.userId, payload));
    }
  }

  updateActivity(activitiesEl: HTMLSelectElement) {
    const payload = <UpdateHistoryItemActivityPayload>{
      itemId: this.item.id,
      activity: activitiesEl.value
    };
    this.store.dispatch(new historyActions.UpdateActivity(this.userId, payload));
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

  remove() {
    this.store.dispatch(new historyActions.RemoveHistoryItem(this.userId, this.item.id));
  }

  updateElapsedTime(elapsedTimeEl: HTMLInputElement) {
    if (elapsedTimeEl.value) {
      const dateStrings = elapsedTimeEl.value.split('~').map(dateString => dateString.trim());
      const startTime = new Date(dateStrings[0]).getTime();
      const endTime = new Date(dateStrings[1]).getTime();

      const payload = <UpdateHistoryItemTimesPayload>{
        itemId: this.item.id,
        startTime,
        endTime
      };
      this.store.dispatch(new historyActions.UpdateElapsedTime(this.userId, payload));
    }
  }

  openDateTimePicker(el: HTMLInputElement) {
    el.click();
  }

}
