import { AboutSauceTimerComponent } from './components/sauce-timer/dumb-components/about-sauce-timer/about-sauce-timer.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { TimeboxSelectorComponent } from './components/time-box/timebox-selector/timebox-selector.component';
import { TimersDisplayComponent } from './components/timers-display/timers-display.component';
import { RunningTimeboxComponent } from './components/time-box/running-timebox/running-timebox.component';
import { SauceTimerComponent } from './components/sauce-timer/dumb-components/sauce-timer/sauce-timer.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'timers-display',
    component: TimersDisplayComponent
  },
  {
    path: 'pomodoro',
    component: PomodoroComponent
  },
  {
    path: 'time-box',
    component: TimeboxSelectorComponent
  },
  {
    path: 'running-timebox/:durationInSeconds',
    component: RunningTimeboxComponent
  },
  {
    path: 'sauce-timer',
    component: SauceTimerComponent
  },
  {
    path: 'about-sauce-timer',
    component: AboutSauceTimerComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
