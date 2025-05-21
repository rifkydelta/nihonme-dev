import { ObjectDetails, objectDetailsMap } from './objectData';

export const getObjectDetails = (label: string): ObjectDetails | null => {
  return objectDetailsMap[label] || null;
};