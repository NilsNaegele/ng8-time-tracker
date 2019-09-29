import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ActivitiesService } from '../services/activities.service';

import * as appActions from '../../../actions/app.actions';
import * as activitiesActions from '../../../shared/actions/activities.actions';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesEffects {

  constructor(private actions$: Actions, private activitiesService: ActivitiesService) { }

  @Effect() loadOptions$ =
    this.actions$
      .pipe(
        ofType(activitiesActions.LOAD_OPTIONS),
        switchMap(() => this.activitiesService.getActivitiesOptions()
          .pipe(
            map(data => new activitiesActions.LoadOptionsSucceeded(data)),
            catchError(err => of(new appActions.Error(activitiesActions.LOAD_OPTIONS, err.message))))));
}

