import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideNavComponent],
  imports: [
    SharedModule
  ],
  exports: [ HeaderComponent, FooterComponent, SideNavComponent ]
})
export class LayoutModule { }
