import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventModel } from '../models/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }


  async getAllCountdownEvents(): Promise<EventModel[]> {
    const apiUrl = 'https://www.googleapis.com/calendar/v3/calendars/';
    const calendarId = 'iivstl9c93oe3ru6db5qapnbec@group.calendar.google.com';
    const apiKey = 'AIzaSyDH1np8O1wMRGr1DdrdcYwpW5qc0eWcA98';
    const url = `${apiUrl}${calendarId}/events?key=${apiKey}`;

    try {
      const res = await this.http.get(url).toPromise();
      const items = res['items'];

      const ret = [];

      items.map(item => {
        const e = new EventModel();
        e.name = item.summary;
        e.dueDate = new Date(item.start.dateTime);
        e.created = new Date(item.created);
        e.creatorEmail = item.creator.email;
        e.creatorName = item.creatorName;
        e.complete = item;
        ret.push(e);
      });
      return ret;
    } catch (e) {
      console.log(e);
      return [];
    }

  }


}
