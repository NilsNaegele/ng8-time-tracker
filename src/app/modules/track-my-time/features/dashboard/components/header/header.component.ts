import { Component, OnInit, Input } from '@angular/core';
import { DateRangeType } from '../../models/date-range';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/date-range';
import { State } from '../../reducers/root';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() rangeType: DateRangeType = 'THIS_WEEK';
  @Input() totalTime = 0;
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  updateDateRange(dateRangeEl: HTMLSelectElement) {
    switch (dateRangeEl.value) {
      case 'THIS_WEEK': {
        this.store.dispatch(new actions.SetThisWeek());
        break;
      }
      case 'LAST_WEEK': {
        this.store.dispatch(new actions.SetLastWeek());
        break;
      }
      case 'THIS_MONTH': {
        this.store.dispatch(new actions.SetThisMonth());
        break;
      }
      case 'LAST_MONTH': {
        this.store.dispatch(new actions.SetLastMonth());
        break;
      }
      default: {
        this.store.dispatch(new actions.SetThisWeek());
      }
    }
  }

}
