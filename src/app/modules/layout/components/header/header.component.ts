import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../shared/services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleSidenav() {
    this.sideNavService.toggle();
    }

  constructor(private sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
