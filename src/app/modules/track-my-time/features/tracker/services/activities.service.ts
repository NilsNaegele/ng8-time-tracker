import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private activitiesCollection: AngularFirestoreCollection<FirestorePlatformsItem>;
  constructor(private afs: AngularFirestore) {
    this.activitiesCollection = this.afs.collection<FirestorePlatformsItem>('activities');
  }

  getActivitiesOptions(): Observable<string[]> {
    // console.log('GETACTIVITIESOPTIONS HIT');
    const activitiesItems = this.activitiesCollection.valueChanges().pipe(first());
    return activitiesItems.pipe(map(items =>
      items.sort((a, b) => a.index - b.index)
        .map(item => item.option)));
  }
}

export interface FirestorePlatformsItem {
  index: number;
  option: string;
}
