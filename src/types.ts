export interface ObjectDetection {
  bbox: [number, number, number, number]; // [x, y, width, height]
  class: string;
  score: number;
}

export interface DetectionResults {
  detections: ObjectDetection[];
  sourceWidth: number;
  sourceHeight: number;
}