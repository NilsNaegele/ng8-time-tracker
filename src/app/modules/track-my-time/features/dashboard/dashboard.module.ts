import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SharedTrackerModule } from '../../shared/shared-tracker.module';
import { GraphTooltipComponent } from './components/graph-tooltip/graph-tooltip.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeDateGraphComponent } from './components/time-date-graph/time-date-graph.component';
import { TimeDetailsGraphComponent } from './components/time-details-graph/time-details-graph.component';
import { TimeActivityGraphComponent } from './components/time-activity-graph/time-activity-graph.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/root';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphTooltipComponent,
    HeaderComponent,
    TimeDateGraphComponent,
    TimeDetailsGraphComponent,
    TimeActivityGraphComponent
  ],
  imports: [
    SharedModule,
    SharedTrackerModule,
    NgxChartsModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
