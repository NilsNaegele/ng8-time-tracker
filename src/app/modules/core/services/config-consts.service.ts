import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigConstsService {
  CLICK_TIME = 3;
  DEFAULT_TIME = 1000;
  DEFAULT_WAIT_TIME = 300;
  DEFAULT_MINISEC_TIME = 60;
  DEFAULT_HOUR_TIME = 3600;
  CLOCK_DIGIT = 9;
}
