import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/timer.reducer';

import * as actions from '../../actions/display.actions';

@Component({
  selector: 'app-tracker-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  AMOUNT_TO_LOAD = 4;
  constructor(private store: Store<State>) { }

  loadMoreEntries() {
    this.store.dispatch(new actions.IncrementDaysToShow(this.AMOUNT_TO_LOAD));
  }

  ngOnInit() {
  }

}
