'use client'

import { useEffect, useRef } from 'react'

export default function ModelViewerComponent() {
  const viewerRef = useRef<any>(null)

  useEffect(() => {
    const viewer = viewerRef.current;
    if (viewer) {
      viewer.addEventListener('load', () => {
        viewer.model?.materials?.forEach((mat: any) => {
          if (mat.pbrMetallicRoughness) {
            mat.pbrMetallicRoughness.setMetallicFactor(0.2);
            mat.pbrMetallicRoughness.setRoughnessFactor(0.8);
          }
        });
      });
    }
  }, [])

  return (
    <model-viewer
      ref={viewerRef}
      id="robot"
      src="/model1.glb"
      alt="Robot Mascot"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      shadow-intensity="1"
      shadow-softness="1"
      environment-image="legacy"
      exposure="1"
      style={{ width: '100%', height: '100%', backgroundColor: 'transparent', '--poster-color': 'transparent' } as any}
    />
  )
}
