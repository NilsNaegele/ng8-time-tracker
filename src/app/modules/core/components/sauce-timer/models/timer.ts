import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export class Timer {

    constructor(public type: BehaviorSubject<string>,
                public duration: number,
                public granularity: number,
                public tickFtns: any[],
                public running: BehaviorSubject<boolean>,
                // tslint:disable-next-line: ban-types
                public currentTime: BehaviorSubject<Object>,
                public started: Date,
                public ended: Date) {}

}
