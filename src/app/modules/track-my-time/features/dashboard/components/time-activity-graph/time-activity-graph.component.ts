import { Component, OnInit, Input } from '@angular/core';
import { GraphDataItem, PieChartConfig } from '../../models/graph';

@Component({
  selector: 'app-dashboard-time-activity-graph',
  templateUrl: './time-activity-graph.component.html',
  styleUrls: ['./time-activity-graph.component.scss']
})
export class TimeActivityGraphComponent implements OnInit {

  @Input() data: GraphDataItem[];
  @Input() config: PieChartConfig;
  constructor() { }

  ngOnInit() {
  }

}
