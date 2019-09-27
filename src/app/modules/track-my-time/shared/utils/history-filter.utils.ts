import { HistoryGrouping, HistoryListItem } from '../models/history.model';

import { HistoryListItemKeyFunction } from './history.utils';

export const getUniqueFrom = (items: HistoryListItem[], keyFunction: HistoryListItemKeyFunction): string[] => {
  const data = items.map(keyFunction);
  return Array.from(new Set(data));
};

export const filterPlatforms = (groupings: HistoryGrouping[], game: string | null): string[] => {
  const selectedDetailsGrouping = groupings.find(grouping => grouping.key === game);
  return selectedDetailsGrouping ? getUniqueFrom(selectedDetailsGrouping.historyItems, item => item.activity) : [];
};

export const filterStartTimes = (groupings: HistoryGrouping[], details: string | null, activity: string): number[] => {
  const selectedDetailsGrouping = groupings.find(grouping => grouping.key === details);
  return selectedDetailsGrouping ? selectedDetailsGrouping.historyItems
    .filter(item => item.activity === activity)
    .map(item => item.startTime).reverse() : [];
};

export const filterHistoryItemsAfter = (grouping: HistoryGrouping | undefined, startEntry: HistoryListItem): HistoryListItem[] => {
  return grouping ? grouping.historyItems.filter(historyItem =>
    historyItem.activity === startEntry.activity && historyItem.startTime >= startEntry.startTime) : [];
};

export const filterHistoryItemsBetween =
  (grouping: HistoryGrouping | undefined, startEntry: HistoryListItem, endEntry: HistoryListItem): HistoryListItem[] => {
    const filtered = filterHistoryItemsAfter(grouping, startEntry);
    return filtered.filter(item => item.endTime <= endEntry.endTime);
  };
