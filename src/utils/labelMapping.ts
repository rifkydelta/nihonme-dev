export type LabelMap = {
  [key: string]: string;
};

// Default mappings - add your custom mappings here
export const defaultLabelMap: LabelMap = {
  'person': 'orang',
  // Add more mappings as needed
};

export const mapLabel = (originalLabel: string, customMap: LabelMap = defaultLabelMap): string => {
  return customMap[originalLabel] || originalLabel;
};