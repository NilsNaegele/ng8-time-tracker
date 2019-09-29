import { TrackerComponent } from './tracker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const trackerRoutes: Routes = [
    // { path: 'my-super-tracker', redirectTo: '/my-tracker' },
    { path: 'my-tracker',  component: TrackerComponent }
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
  imports: [RouterModule.forChild(trackerRoutes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
