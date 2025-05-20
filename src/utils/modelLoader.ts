import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

let model: cocoSsd.ObjectDetection | null = null;

export const loadModel = async (): Promise<cocoSsd.ObjectDetection> => {
  if (model) {
    return model;
  }
  
  // Ensure TensorFlow.js is ready
  await tf.ready();
  
  // Load the COCO-SSD model
  model = await cocoSsd.load({
    base: 'mobilenet_v2' // Use MobileNetV2 as base for better balance of speed/accuracy
  });
  
  return model;
};

export const getModel = (): cocoSsd.ObjectDetection | null => {
  return model;
};