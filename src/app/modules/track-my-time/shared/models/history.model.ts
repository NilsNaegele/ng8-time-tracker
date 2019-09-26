export interface HistoryListItem {
    id: string;
    activity: string;
    details: string;
    startTime: number;
    endTime: number;
    dateRange: [Date, Date];
    locked: boolean;
}

export interface HistoryGrouping {
    key: string;
    totalTime: number;
    historyItems: HistoryListItem[];
}

export interface UpdateHistoryItemActivityPayload {
    itemId: string;
    activity: string;
}

export interface UpdateHistoryItemDetailsPayload {
    itemId: string;
    details: string;
}

export interface UpdateHistoryItemTimesPayload {
    itemId: string;
    startTime: number;
    endTime: number;
}

export type UpdatePayload = UpdateHistoryItemActivityPayload | UpdateHistoryItemDetailsPayload | UpdateHistoryItemTimesPayload;
