'use client'

import { useEffect, useRef } from 'react'

export default function ModelViewerComponent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically load the model-viewer script
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js'
    document.head.appendChild(script)

    // Create the model-viewer element
    const viewer = document.createElement('model-viewer') as any
    viewer.setAttribute('src', '/model1.glb')
    viewer.setAttribute('alt', 'Robot Mascot')
    viewer.setAttribute('camera-controls', '')
    viewer.setAttribute('auto-rotate', '')
    viewer.setAttribute('rotation-per-second', '30deg')
    viewer.setAttribute('shadow-intensity', '1')
    viewer.setAttribute('shadow-softness', '1')
    viewer.setAttribute('environment-image', 'legacy')
    viewer.setAttribute('exposure', '1')
    viewer.style.width = '100%'
    viewer.style.height = '100%'
    viewer.style.backgroundColor = 'transparent'
    viewer.style.setProperty('--poster-color', 'transparent')

    viewer.addEventListener('load', () => {
      viewer.model?.materials?.forEach((mat: any) => {
        if (mat.pbrMetallicRoughness) {
          mat.pbrMetallicRoughness.setMetallicFactor(0.2)
          mat.pbrMetallicRoughness.setRoughnessFactor(0.8)
        }
      })
    })

    if (containerRef.current) {
      containerRef.current.appendChild(viewer)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
