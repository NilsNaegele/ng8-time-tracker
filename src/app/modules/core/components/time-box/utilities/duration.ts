const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
const MINUTES_PER_HOUR = 60;
const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const HOURS_PER_DAY = 24;


export class Duration {
    private milliseconds: number;

    private static msToSec(milliseconds: number): number {
        return Math.floor(milliseconds / MILLISECONDS_PER_SECOND);
    }

    constructor(milliseconds: number) {
        this.milliseconds = milliseconds;
    }

    static ofMilliseconds(milliseconds: number): Duration {
        return new Duration(milliseconds);
    }

    getSeconds(): number {
        return Math.floor(Math.abs(this.milliseconds) / 1000) % SECONDS_PER_MINUTE;
    }

    getMinutes(): number {
        return Math.floor(Math.abs(this.milliseconds) / MILLISECONDS_PER_MINUTE) % MINUTES_PER_HOUR;
    }

    getHours(): number {
        return Math.floor(Math.abs(this.milliseconds) / MILLISECONDS_PER_HOUR) % MINUTES_PER_HOUR;
    }

    asSeconds(): number {
        return Duration.msToSec(this.milliseconds);
    }

    asMilliseconds(): number {
        return this.milliseconds;
    }

    deltaToInMilliseconds(other: Duration): number {
        return this.milliseconds - other.milliseconds;
    }

    deltaToInSeconds(other: Duration): number {
        return Duration.msToSec(this.deltaToInMilliseconds(other));
    }





}
