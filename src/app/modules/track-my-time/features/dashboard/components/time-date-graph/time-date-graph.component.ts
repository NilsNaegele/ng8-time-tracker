import { Component, OnInit, Input } from '@angular/core';
import { GraphDataItem, BarGraphConfig } from '../../models/graph';

@Component({
  selector: 'app-dashboard-time-date-graph',
  templateUrl: './time-date-graph.component.html',
  styleUrls: ['./time-date-graph.component.scss']
})
export class TimeDateGraphComponent implements OnInit {

  @Input() data: GraphDataItem[];
  @Input() config: BarGraphConfig;
  constructor() { }

  ngOnInit() {
  }

}
