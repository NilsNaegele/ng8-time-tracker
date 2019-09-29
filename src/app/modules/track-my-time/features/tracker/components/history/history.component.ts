import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { HistoryGrouping } from 'src/app/modules/track-my-time/shared/models/history.model';

@Component({
  selector: 'app-tracker-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  @Input() groups: HistoryGrouping[] = [];
  @Input() activitiesOptions: string[] = [];
  @Input() trackedDetails: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
