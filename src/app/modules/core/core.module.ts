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
import { RunningTimeboxComponent } from './components/time-box/running-timebox/running-timebox.component';
import { SauceTimerComponent } from './components/sauce-timer/sauce-timer/sauce-timer.component';
import { AboutSauceTimerComponent } from './components/sauce-timer/about-sauce-timer/about-sauce-timer.component';
import { CamelizePipe } from './components/sauce-timer/pipes/camelize.pipe';
import { CapitalizePipe } from './components/sauce-timer/pipes/capitalize.pipe';
import { DashToSpacePipe } from './components/sauce-timer/pipes/dash-to-space.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    Timer1Component,
    PomodoroComponent,
    MinuteSecondsPipe,
    TimeboxSelectorComponent,
    TimersDisplayComponent,
    RunningTimeboxComponent,
    SauceTimerComponent,
    AboutSauceTimerComponent,
    CamelizePipe,
    CapitalizePipe,
    DashToSpacePipe],
  imports: [
    SharedModule,
    RoundProgressModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
