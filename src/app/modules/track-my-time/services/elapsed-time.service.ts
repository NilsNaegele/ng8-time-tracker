import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { combineLatest, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import sharedSelectors, { SharedState } from '../reducers/root.reducer';

@Injectable({
  providedIn: 'root'
})
export class ElapsedTimeService {

  constructor() { }
}
