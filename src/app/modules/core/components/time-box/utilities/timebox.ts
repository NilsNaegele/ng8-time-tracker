import { Duration } from './duration';


const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MAX_DURATION_IN_SECONDS = SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;

export class Timebox extends Duration {

    private static trimValidating(rawSeconds: number): number {
        let totalSeconds = Math.floor(rawSeconds);

        if (totalSeconds >= MAX_DURATION_IN_SECONDS) {
            console.warn('Timebox was trimmed to under 24 hours from ' + totalSeconds + ' seconds');
            totalSeconds = MAX_DURATION_IN_SECONDS;
        } else if (totalSeconds <= 0) {
            console.warn('Set timebox to minimal value of 1 second instead of ' + totalSeconds);
            totalSeconds = 1;
        }
        return totalSeconds;
    }

    private constructor(seconds: number) {
        super(seconds * 1000);
    }

    static fromSeconds(rawSeconds: number): Timebox {
        const totalSeconds = Timebox.trimValidating(rawSeconds);
        return new Timebox(totalSeconds);
    }

}
