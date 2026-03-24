'use client';

import { useEffect, useRef } from 'react';

// Declare model-viewer as a valid JSX element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'environment-image'?: string;
        exposure?: string;
        id?: string;
        style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}

export default function ModelViewer() {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoad = () => {
      // @ts-expect-error model-viewer custom element
      const model = viewer.model;
      if (model?.materials) {
        model.materials.forEach((mat: {
          pbrMetallicRoughness?: {
            setMetallicFactor: (v: number) => void;
            setRoughnessFactor: (v: number) => void;
          }
        }) => {
          if (mat.pbrMetallicRoughness) {
            mat.pbrMetallicRoughness.setMetallicFactor(0.2);
            mat.pbrMetallicRoughness.setRoughnessFactor(0.8);
          }
        });
      }
    };

    viewer.addEventListener('load', handleLoad);
    return () => viewer.removeEventListener('load', handleLoad);
  }, []);

  const resetCamera = () => {
    const viewer = viewerRef.current;
    if (viewer) {
      // @ts-expect-error model-viewer custom element
      viewer.cameraOrbit = '0deg 75deg 105%';
    }
  };

  return { viewerRef, resetCamera };
}
