import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-display',
  templateUrl: './timers-display.component.html',
  styleUrls: ['./timers-display.component.scss']
})
export class TimersDisplayComponent implements OnInit {
  start = false;
  constructor() { }

  ngOnInit() {
  }

}
