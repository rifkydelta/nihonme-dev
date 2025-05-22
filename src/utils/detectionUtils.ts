import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { ObjectDetection } from '../types';
import { getModel } from './modelLoader';
import { mapLabel } from './labelMapping';

// Simplified detection function - same for mobile and desktop
export const detectObjects = async (
  imageElement: HTMLImageElement | HTMLVideoElement
): Promise<ObjectDetection[]> => {
  const model = getModel();
  
  if (!model) {
    throw new Error('Model not loaded');
  }
  
  try {
    // Use the same detection method for all devices
    const predictions = await model.detect(imageElement);
    
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

// Simplified drawing function - same for mobile and desktop
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
    
    // Ensure the box isn't drawn outside the canvas boundaries
    const safeX = Math.max(0, Math.min(x, ctx.canvas.width - 2));
    const safeY = Math.max(0, Math.min(y, ctx.canvas.height - 2));
    const safeWidth = Math.min(width, ctx.canvas.width - safeX - 2);
    const safeHeight = Math.min(height, ctx.canvas.height - safeY - 2);
    
    // Standard rectangle for all devices
    ctx.strokeRect(safeX, safeY, safeWidth, safeHeight);
    
    // Draw background for label
    ctx.fillStyle = `${boxColor}DD`;
    ctx.font = '14px Arial';
    const textMetrics = ctx.measureText(`${detection.class} ${score}%`);
    const textHeight = 20;
    const labelX = safeX;
    const labelY = Math.max(textHeight, safeY);
    ctx.fillRect(labelX, labelY - textHeight, textMetrics.width + 10, textHeight);
    
    // Draw label with class name and confidence
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${detection.class} ${score}%`, labelX + 5, labelY - 5);
  });
};

// Calculate color for confidence level (CSS color)
export const getConfidenceColor = (score: number): string => {
  if (score > 0.7) return 'text-green-500 dark:text-green-400';
  if (score > 0.5) return 'text-yellow-500 dark:text-yellow-400';
  return 'text-red-500 dark:text-red-400';
};