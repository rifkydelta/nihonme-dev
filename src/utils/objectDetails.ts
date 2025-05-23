import { ObjectDetails, objectDetailsMap } from './objectData';
import { defaultLabelMap } from './labelMapping';

// Create a reverse mapping from Japanese to English labels
const reverseLabelMap = Object.entries(defaultLabelMap).reduce((acc, [eng, jpn]) => {
  acc[jpn] = eng;
  return acc;
}, {} as Record<string, string>);

export const getObjectDetails = (label: string): ObjectDetails | null => {
  // First try to get details using the label directly
  const details = objectDetailsMap[label];
  if (details) return details;

  // If not found, try to get the English label from the Japanese label
  const englishLabel = reverseLabelMap[label];
  if (englishLabel) {
    return objectDetailsMap[englishLabel] || null;
  }

  return null;
};