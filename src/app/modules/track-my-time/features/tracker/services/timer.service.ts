import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { TimerInfo } from '../../../shared/models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerCollection: AngularFirestoreCollection<FirestoreTimerItem>;
  constructor(private afs: AngularFirestore) {
    this.timerCollection = this.afs.collection<FirestoreTimerItem>('timer');
  }

  setTimer(userId: string, info: TimerInfo) {
    this.timerCollection.doc(userId).set({
      details: info.details,
      activity: info.activity,
      startTime: info.startTime
    });
  }

  setDetails(userId: string, details: string) {
    this.timerCollection.doc(userId).set({ details }, { merge: true });
  }

  setActivity(userId: string, activity: string) {
    this.timerCollection.doc(userId).set({ activity }, { merge: true });
  }

  setStartTime(userId: string, startTime: number) {
    this.timerCollection.doc(userId).set({ startTime }, { merge: true });
  }

  resetTimer(userId: string) {
    this.timerCollection.doc(userId).set({
      details: '',
      activity: '',
      startTime: 0
    });
  }

  getTimerInfo(userId: string): Observable<TimerInfo> {
    const timerDoc = this.timerCollection.doc<FirestoreTimerItem>(userId).valueChanges().pipe(first());
    return timerDoc.pipe(map(timer => <TimerInfo>{
      ...timer
    }));
  }

  getNowTime(): number {
    return new Date().getTime();
  }
}

export interface FirestoreTimerItem {
  details: string;
  activity: string;
  startTime: number;
}
