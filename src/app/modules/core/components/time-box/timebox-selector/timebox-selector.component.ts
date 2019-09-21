import { Component, OnInit } from '@angular/core';
import { Timebox } from '../utilities/timebox';
import { TimeboxService } from '../../../services/timebox.service';

@Component({
  selector: 'app-timebox-selector',
  templateUrl: './timebox-selector.component.html',
  styleUrls: ['./timebox-selector.component.scss']
})
export class TimeboxSelectorComponent implements OnInit {
  timeboxes: Timebox[];
  selectedTimebox: Timebox;

  constructor(private timeboxService: TimeboxService) { }

  ngOnInit() {
    this.getDefaultTimeboxes();
  }

  getDefaultTimeboxes(): void {
    this.timeboxService.getDefaultTimeboxes().then(timeboxes => this.timeboxes = timeboxes);
  }

  onSelect(timebox: Timebox): void {
    this.selectedTimebox = timebox;
  }

}
