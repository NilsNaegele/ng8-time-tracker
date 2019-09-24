import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event-model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  events: EventModel[] = [];

  constructor(private eventsService: EventsService) { }

  async ngOnInit() {
    this.events = await this.eventsService.getAllCountdownEvents();
    this.events.sort((a: EventModel, b: EventModel) => {
      if (a.dueDate < b.dueDate) {
        return 11;
      }
      if (a.dueDate > b.dueDate) {
        return -1;
      }
      return 0;
    });
  }

}
