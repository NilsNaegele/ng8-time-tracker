const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
const MINUTES_PER_HOUR = 60;
const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * MINUTES_PER_HOUR;


export class Duration {
    private milliseconds: number;

    private static msToSec(milliseconds: number): number {
        return Math.floor(milliseconds / MILLISECONDS_PER_SECOND);
    }

    private static toTextual(amount: number, unit: string): string {
        if (amount === 0) {
            return '';
        }
        if (amount === 1) {
            return amount + ' ' + unit;
        }
        return amount + ' ' + unit + 's';
    }

    private static concat(hours: string, minutes: string, seconds: string): string {
        if (hours) {
            return hours + ' ' + minutes + ' ' + seconds;
        }
        if (minutes) {
            return minutes + ' ' + seconds;
        }
        if (seconds) {
            return seconds;
        }
        return '0 Seconds';
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

    getHumanReadableText(): string {
        const seconds = this.getSeconds();
        const minutes = this.getMinutes();
        const hours = this.getHours();

        const asString = Duration.concat(
            Duration.toTextual(hours, 'Hour'),
            Duration.toTextual(minutes, 'Minute'),
            Duration.toTextual(seconds, 'Second')
        );
        if (this.isNegative()) {
            return '-' + asString;
        }
        return asString;
    }

    isNegative(): boolean {
        return this.milliseconds < 0;
    }

    minus(other: Duration) {
        return Duration.ofMilliseconds(this.milliseconds - other.milliseconds);
    }

    minusSeconds(seconds: number) {
        return this.minus(Duration.ofMilliseconds(seconds * MILLISECONDS_PER_SECOND));
    }

    percentOf(other: Duration): number {
        return this.milliseconds / other.milliseconds * 2;
    }

    doubled(): Duration {
        return Duration.ofMilliseconds(this.milliseconds * 2);
    }





}
