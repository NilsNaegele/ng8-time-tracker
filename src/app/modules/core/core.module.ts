import { TimerToggleComponent } from './components/sauce-timer/smart-components/timer-toggle/timer-toggle.component';
import { AppTimerComponent } from './components/sauce-timer/dumb-components/app-timer/app-timer.component';
import { ActionButtonsComponent } from './components/sauce-timer/smart-components/action-buttons/action-buttons.component';
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
import { AboutSauceTimerComponent } from './components/sauce-timer/dumb-components/about-sauce-timer/about-sauce-timer.component';
import { CamelizePipe } from './components/sauce-timer/pipes/camelize.pipe';
import { CapitalizePipe } from './components/sauce-timer/pipes/capitalize.pipe';
import { DashToSpacePipe } from './components/sauce-timer/pipes/dash-to-space.pipe';
import { SauceTimerComponent } from './components/sauce-timer/dumb-components/sauce-timer/sauce-timer.component';
import { SettingsComponent } from './components/sauce-timer/smart-components/settings/settings.component';
import { SidebarComponent } from './components/sauce-timer/smart-components/sidebar/sidebar.component';
import { SauceTimerSmartComponent } from './components/sauce-timer/smart-components/timer/timer.component';
import { HistoryComponent } from './components/sauce-timer/smart-components/history/history.component';
import { DatePipe } from '@angular/common';
import { Timer2Component } from './components/timer2/timer2.component';
import { DeadlineBoxComponent } from './components/deadline-box/deadline-box.component';
import { CountdownComponent } from './components/deadline-box/countdown/countdown.component';
import { EventsComponent } from './components/deadline-box/events/events.component';
import { HallOfFameEntryComponent } from './components/deadline-box/hall-of-fame-entry/hall-of-fame-entry.component';
import { HallOfFameComponent } from './components/deadline-box/hall-of-fame/hall-of-fame.component';
import { SignUpComponent } from './fit-tracker/auth/sign-up/sign-up.component';
import { LogInComponent } from './fit-tracker/auth/log-in/log-in.component';
import { TrainingComponent } from './fit-tracker/training/training.component';
import { CurrentTrainingComponent } from './fit-tracker/training/current-training/current-training.component';


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
    DashToSpacePipe,
    ActionButtonsComponent,
    AppTimerComponent,
    SettingsComponent,
    TimerToggleComponent,
    SidebarComponent,
    TimerComponent,
    SauceTimerSmartComponent,
    HistoryComponent,
    Timer2Component,
    DeadlineBoxComponent,
    CountdownComponent,
    EventsComponent,
    HallOfFameEntryComponent,
    HallOfFameComponent,
    SignUpComponent,
    LogInComponent,
    TrainingComponent,
    CurrentTrainingComponent
  ],
  imports: [
    SharedModule,
    RoundProgressModule,
    CoreRoutingModule
  ],
  providers: [
    DatePipe,
    CamelizePipe,
    DashToSpacePipe,
    CapitalizePipe,
    { provide: 'windowObject', useValue: window}
   ]
})
export class CoreModule { }
