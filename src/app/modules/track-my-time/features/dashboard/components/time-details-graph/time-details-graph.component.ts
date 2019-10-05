import { Component, OnInit, Input } from '@angular/core';
import { GraphDataItem, BarGraphConfig } from '../../models/graph';

@Component({
  selector: 'app-dashboard-time-details-graph',
  templateUrl: './time-details-graph.component.html',
  styleUrls: ['./time-details-graph.component.scss']
})
export class TimeDetailsGraphComponent implements OnInit {

  @Input() data: GraphDataItem[];
  @Input() config: BarGraphConfig;
  constructor() { }

  ngOnInit() {
  }

}
