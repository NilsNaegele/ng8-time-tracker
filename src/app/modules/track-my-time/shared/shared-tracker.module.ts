import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';


import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { TimePipe } from './pipes/time.pipe';

import { reducers1 } from './reducers/root.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', reducers1),
  ],
  declarations: [
    ElapsedTimePipe,
    TimePipe,
    PluralizePipe
  ],
  exports: [
    ElapsedTimePipe,
    TimePipe,
    PluralizePipe
  ]
})
export class SharedTrackerModule { }
