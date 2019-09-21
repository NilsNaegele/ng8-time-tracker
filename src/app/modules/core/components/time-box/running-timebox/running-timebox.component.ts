import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Duration } from './../utilities/duration';
import { Timebox } from '../utilities/timebox';
import { PointInTime } from '../utilities/point-in.time';
import { TimeboxService } from '../../../services/timebox.service';
import { switchMap } from 'rxjs/operators';


const TIMEOUT_OFFSET_IN_SECONDS = 60;

@Component({
  selector: 'app-running-timebox',
  templateUrl: './running-timebox.component.html',
  styleUrls: ['./running-timebox.component.scss']
})
export class RunningTimeboxComponent implements OnInit, OnDestroy {
  timebox: Timebox;
  startTime: PointInTime;
  remainingDuration: Duration;
  remainingInPercentsValue: number;
  remainingInPercents; string;
  remainingColor: string;
  heightValue: number;
  intervalHandle: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private timeboxService: TimeboxService,
              private titleService: Title) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
    switchMap((params: ParamMap) => this.timeboxService.getTimeboxBySeconds(+params.get('durationInSeconds')))
    ).subscribe(timebox => this.startTimebox(timebox));
    this.resetTitle();
  }

  resetTitle(): void {
    this.titleService.setTitle('Timebox-Timer');
  }

  startTimebox(newTimeBox: Timebox): void {
    console.log('Starting timebox of ' + newTimeBox.getHumanReadableText());
    this.timebox = newTimeBox;
    this.startTime = this.currentTime();
    this.startContinualRefresh();
    this.stopRefreshAfterDoubleTimebox();
  }

  currentTime(): PointInTime {
    return PointInTime.now();
  }

  startContinualRefresh(): void {
    this.stopContinualRefresh();
    this.refreshRemaingingTime();
    this.intervalHandle = setInterval(() => { this.refreshRemaingingTime(); }, 100);
  }

  stopContinualRefresh(): void {
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle);
    }
  }

  stopRefreshAfterDoubleTimebox(): void {
    setTimeout(() => { this.stopContinualRefresh(); }, this.timebox.doubled().asMilliseconds());
  }

  refreshRemaingingTime(): void {
    this.remainingDuration = this.timebox.minus(this.startTime.durationUntilNow());
    this.remainingInPercentsValue = Math.max(0, this.remainingDuration.percentOf(this.timebox));
    this.remainingInPercents = this.remainingInPercentsValue * (100) + '%';
    this.heightValue = Math.max(1, 2 * Math.min(100, Math.pow(110 - this.remainingInPercentsValue, 4) / 1000000));
    const redValue = this.toColor(this.remainingInPercentsValue * 3.5);
    const greenValue = this.toColor(this.remainingInPercentsValue * 8);
    const blueValue = 0;
    this.remainingColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';

    if (this.remainingDuration.isNegative()) {
      this.resetTitle();
    } else {
      this.titleService.setTitle(this.remainingDuration.getHumanReadableText() + ' remaining');
    }

  }

  toColor(percentValue: number) {
    return 255 * Math.max(0, Math.min(100, percentValue)) / 100;
  }

  ngOnDestroy(): void {
    this.stopContinualRefresh();
    this.resetTitle();
  }

}
