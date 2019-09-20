import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { TimeboxSelectorComponent } from './components/time-box/timebox-selector/timebox-selector.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pomodoro',
    component: PomodoroComponent
  },
  {
    path: 'time-box',
    component: TimeboxSelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
