import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'my-super-tracker', redirectTo: '/my-tracker' },
  { path: 'my-super-dashboard', redirectTo: '/my-dashboard' },
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
  },
  {
    path: 'my-super-dashboard',
    loadChildren: () => import('./modules/track-my-time/features/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
