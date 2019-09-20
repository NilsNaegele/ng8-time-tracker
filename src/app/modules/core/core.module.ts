import { NgModule } from '@angular/core';

import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from './components/timer/timer.component';
import { Timer1Component } from './components/timer1/timer1.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';
import { TimeboxSelectorComponent } from './components/time-box/timebox-selector/timebox-selector.component';
import { TimersDisplayComponent } from './components/timers-display/timers-display.component';


@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    Timer1Component,
    PomodoroComponent,
    MinuteSecondsPipe,
    TimeboxSelectorComponent,
    TimersDisplayComponent],
  imports: [
    SharedModule,
    RoundProgressModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
