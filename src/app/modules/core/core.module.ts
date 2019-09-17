import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  declarations: [HomeComponent, TimerComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
