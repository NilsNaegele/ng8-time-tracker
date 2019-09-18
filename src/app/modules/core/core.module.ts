import { NgModule } from '@angular/core';

import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from './components/timer/timer.component';
import { Timer1Component } from './components/timer1/timer1.component';


@NgModule({
  declarations: [HomeComponent, TimerComponent, Timer1Component],
  imports: [
    SharedModule,
    RoundProgressModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
