import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphDataItem, GraphConfig, BarGraphConfig, PieChartConfig } from './models/graph';
import { DateRangeType } from './models/date-range';
import { selectColorScheme } from './utils/color-scheme';
import { formatTime } from '../../shared/utils/date.utils';
import { Store } from '@ngrx/store';
import sharedSelectors, { State as SharedState } from '../../shared/reducers/root.reducer';
import dashboardSelectors, { State as DashboardState } from './reducers/root';
import { getPaddedGraphData, getGraphData, getSortedGraphData } from './utils/graph-data';
import { map } from 'rxjs/operators';
import { ElapsedTimeService } from '../../services/elapsed-time.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  trackerNavCaption$: Observable<string>;
  timeVsDateGraphData$: Observable<GraphDataItem[]>;
  timeVsActivityGraphData$: Observable<GraphDataItem[]>;
  timeVsDetailsGraphData$: Observable<GraphDataItem[]>;

  totalTime$: Observable<number>;

  dateRangeType$: Observable<DateRangeType>;

  private graphConfig: GraphConfig = {
    view: undefined,
    colorScheme: {
      domain: selectColorScheme('cool')
    },
    showLegend: false,
    gradient: false,
    animations: true,
  };
  private barGraphBaseConfig: BarGraphConfig = {
    ...this.graphConfig,
    showXAxis: true,
    showYAxis: true,
    showXAxisLabel: false,
    showYAxisLabel: false,
    showGridLines: true,
    xAxisLabel: '',
    yAxisLabel: '',
    axisTickFormatting: formatTime,
    scaleMax: 3600 * 10
  };
  dateGraphConfig: BarGraphConfig = {
    ...this.barGraphBaseConfig,
    xAxisLabel: 'Date',
    yAxisLabel: 'Total Time Active'
  };
  gameGraphConfig: BarGraphConfig = {
    ...this.barGraphBaseConfig,
    xAxisLabel: 'Total Time Active',
    yAxisLabel: 'Details'
  };
  platformGraphConfig: PieChartConfig = {
    ...this.graphConfig,
    showLabels: true,
    explodeSlices: false,
    doughnut: true
  };
  constructor(private sharedStore: Store<SharedState>,
              private dashboardStore: Store<DashboardState>,
              private elapsedTimeService: ElapsedTimeService) { }

  ngOnInit() {
    const dateList = this.dashboardStore.select(dashboardSelectors.dateList);
    const groupingsByDate = this.sharedStore.select(sharedSelectors.historyGroupingsByDate);
    const groupingsByActivity = this.sharedStore.select(sharedSelectors.historyGroupingsByActivity);
    const groupingsByDetails = this.sharedStore.select(sharedSelectors.historyGroupingsByDetails);

    this.timeVsDateGraphData$ = getPaddedGraphData(groupingsByDate, dateList);
    this.timeVsActivityGraphData$ = getGraphData(groupingsByActivity, dateList);
    this.timeVsDetailsGraphData$ = getSortedGraphData(groupingsByDetails, dateList);

    this.totalTime$ = this.timeVsDateGraphData$.pipe(map(x => x.reduce((a, b) => a + b.value, 0)));
    this.dateRangeType$ = this.dashboardStore.select(dashboardSelectors.rangeType);
    this.trackerNavCaption$ = this.elapsedTimeService.getElapsedTime('Tracker');
  }

}
