import { Action } from '@ngrx/store';

export const LOAD_OPTIONS = '[Activities] Load Options';
export class LoadOptions implements Action {
    readonly type = LOAD_OPTIONS;
    constructor() {}
}

export const LOAD_OPTIONS_SUCCEEDED = '[Activities] Load Options Succeeded';
export class LoadOptionsSucceeded implements Action {
    readonly type = LOAD_OPTIONS_SUCCEEDED;
    constructor(public activities: string[]) {}
}

export type All = LoadOptions | LoadOptionsSucceeded;


