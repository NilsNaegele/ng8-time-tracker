import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event-model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventModel[] = null;

  constructor(private eventsService: EventsService) { }

  async ngOnInit() {
    this.events = await this.eventsService.getAllCountdownEvents();

    const res = this.events.sort((a: EventModel, b: EventModel) => {
      if (a.dueDate < b.dueDate) {
        return -1;
      }
      if (a.dueDate > b.dueDate) {
        return 1;
      }
      return 0;
    });
    console.log(res);
  }

}
