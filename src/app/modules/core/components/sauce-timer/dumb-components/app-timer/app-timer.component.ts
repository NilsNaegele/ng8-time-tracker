import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sauces-timer',
  templateUrl: './app-timer.component.html',
  styleUrls: ['./app-timer.component.scss']
})
export class AppTimerComponent implements OnInit {

  constructor(private router: Router) { }

  showTimer(): boolean {
    return this.router.url === '/sauce-timer';
  }

  ngOnInit() {
  }

}
