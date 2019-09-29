import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'my-super-tracker', redirectTo: '/my-tracker' },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/core/core.module').then(mod => mod.CoreModule)
  },
  {
    path: 'my-super-tracker',
    loadChildren: () => import('./modules/track-my-time/features/tracker/tracker.module').then(mod => mod.TrackerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
