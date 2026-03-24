import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string | number;
        'shadow-softness'?: string | number;
        'environment-image'?: string;
        exposure?: string | number;
      };
    }
  }
}
