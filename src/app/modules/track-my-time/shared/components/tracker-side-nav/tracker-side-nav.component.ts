import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
    faBars, faChartBar, faClipboardList, faList, faSignOutAlt, faTimes
} from '@fortawesome/free-solid-svg-icons';

import { RouteEntry } from '../../../models/route';

@Component({
  selector: 'app-tracker-side-nav',
  templateUrl: './tracker-side-nav.component.html',
  styleUrls: ['./tracker-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackerSideNavComponent implements OnInit {

  @Input() trackerCaption = 'Tracker';
  trackerRoute: RouteEntry = {
    caption: 'Track My Activities',
    router: ['/my-tracker'],
    exact: true,
    icon: faClock,
    trackingCategory: 'navTracker'
  };
  bannerRoute: RouteEntry = {
    caption: 'Track My Activities',
    router: ['/timers-display'],
    trackingCategory: 'navBanner'
  };
  routes: RouteEntry[] = [{
    caption: 'Dashboard',
    router: ['/my-super-dashboard'],
    exact: true,
    icon: faChartBar,
    trackingCategory: 'navDashboard'
  },
  {
    caption: 'Library',
    router: ['/deadline-box'],
    exact: true,
    icon: faList,
    trackingCategory: 'navLibrary'
  },
  {
    caption: 'Completion',
    router: ['/simple-timer'],
    exact: true,
    icon: faClipboardList,
    trackingCategory: 'navCompletion'
  }
  ];
  hideNavContents = true;
  icons = {
    menu: faBars,
    close: faTimes
  };
  constructor() { }

  ngOnInit() {

  }


  toggleNav() {
    this.hideNavContents = !this.hideNavContents;
  }

}
