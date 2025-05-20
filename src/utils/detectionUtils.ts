import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { ObjectDetection } from '../types';
import { getModel } from './modelLoader';
import { mapLabel } from './labelMapping';

// Detect objects in an image/video frame
export const detectObjects = async (
  imageElement: HTMLImageElement | HTMLVideoElement
): Promise<ObjectDetection[]> => {
  const model = getModel();
  
  if (!model) {
    throw new Error('Model not loaded');
  }
  
  try {
    // Run detection
    const predictions = await model.detect(imageElement);
    
    // Transform the predictions to our internal format and map labels
    return predictions.map(prediction => ({
      bbox: prediction.bbox as [number, number, number, number],
      class: mapLabel(prediction.class),
      score: prediction.score
    }));
  } catch (error) {
    console.error('Detection error:', error);
    return [];
  }
};

// Draw detected objects on a canvas
export const drawDetections = (
  ctx: CanvasRenderingContext2D,
  detections: ObjectDetection[],
  filteredClass: string | null = null
): void => {
  // Clear the canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  // Filter detections if a specific class is selected
  const filteredDetections = filteredClass 
    ? detections.filter(detection => detection.class === filteredClass)
    : detections;
  
  // Draw each detection
  filteredDetections.forEach(detection => {
    const [x, y, width, height] = detection.bbox;
    const score = Math.round(detection.score * 100);
    
    // Set styles based on confidence
    let boxColor = '#FF3B30'; // Low confidence
    if (detection.score > 0.5) boxColor = '#FFCC00'; // Medium confidence
    if (detection.score > 0.7) boxColor = '#34C759'; // High confidence
    
    // Draw bounding box
    ctx.strokeStyle = boxColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    
    // Draw background for label
    ctx.fillStyle = `${boxColor}DD`;
    const textMetrics = ctx.measureText(`${detection.class} ${score}%`);
    const textHeight = 20; // Approximate height
    ctx.fillRect(x, y - textHeight, textMetrics.width + 10, textHeight);
    
    // Draw label with class name and confidence
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '14px Arial';
    ctx.fillText(`${detection.class} ${score}%`, x + 5, y - 5);
  });
};

// Calculate color for confidence level (CSS color)
export const getConfidenceColor = (score: number): string => {
  if (score > 0.7) return 'text-green-500 dark:text-green-400';
  if (score > 0.5) return 'text-yellow-500 dark:text-yellow-400';
  return 'text-red-500 dark:text-red-400';
};