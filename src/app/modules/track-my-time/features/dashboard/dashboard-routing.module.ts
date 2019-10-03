import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';



const dashboardRoutes: Routes = [
    // { path: 'my-super-tracker', redirectTo: '/my-tracker' },
    { path: 'my-dashboard', component: DashboardComponent }
//   {
//     path: 'track-my-time',
//     component: TrackerComponent
//   },
//   {
//     path: '',
//     component:
//   }
//   {
//     path: '**',
//     redirectTo: '/'
//   },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

