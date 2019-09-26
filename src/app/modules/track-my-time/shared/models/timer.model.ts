export interface TimerInfo {
    details: string;
    activity: string;
    startTime: number;
}

export interface AddTimerInfo {
    userId: string;
    details: string;
    activity: string;
    startTime: number;
    endTime: number;
}
