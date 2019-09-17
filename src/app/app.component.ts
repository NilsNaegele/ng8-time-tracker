import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SideNavService } from './modules/shared/services/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng8-time-tracker';
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }
}
