import { Injectable } from '@angular/core';
import { Timebox } from '../components/time-box/utilities/timebox';
import { TIMEBOXES } from '../components/time-box/utilities/default-timeboxes';

@Injectable({
  providedIn: 'root'
})
export class TimeboxService {

  getDefaultTimeboxes(): Promise<Timebox[]> {
    return Promise.resolve(TIMEBOXES);
  }

  getTimeboxBySeconds(seconds: number): Promise<Timebox> {
    return Promise.resolve(Timebox.fromSeconds(seconds));
  }
}
