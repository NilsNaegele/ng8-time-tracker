export interface ProgressItem {
    id: string;
    startEntryId: string;
    endEntryId: string;
    notes: string;
}

export interface CompletedItem {
    activity: string;
    details: string;
    startTime: number;
    endTime: number;
    timeWorked: number;
}

export interface MarkCompletePayload {
    itemId: string;
    endEntryId: string;
}

export interface SetNotesPayload {
    itemId: string;
    notes: string;
}
