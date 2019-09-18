import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pomodoro',
    component: PomodoroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
