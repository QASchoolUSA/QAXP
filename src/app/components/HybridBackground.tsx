'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import StaticBackground from './StaticBackground'

// Dynamically import AnimatedBackground to avoid SSR issues
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-radial from-purple-900/20 via-cyan-900/10 to-transparent" />
  )
})

interface DeviceCapabilities {
  isHighPerformance: boolean
  supportsWebGL: boolean
  hasGoodGPU: boolean
}

function detectDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return { isHighPerformance: false, supportsWebGL: false, hasGoodGPU: false }
  }

  // Check WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  const supportsWebGL = !!gl

  let hasGoodGPU = false
  if (gl) {
    const webglContext = gl as WebGLRenderingContext
    const renderer = webglContext.getParameter(webglContext.RENDERER)
    const vendor = webglContext.getParameter(webglContext.VENDOR)
    
    // More conservative GPU detection - only allow dedicated GPUs
    hasGoodGPU = (
      renderer?.includes('NVIDIA') ||
      renderer?.includes('AMD') ||
      renderer?.includes('Radeon') ||
      (renderer?.includes('Apple') && renderer?.includes('M1')) ||
      (renderer?.includes('Apple') && renderer?.includes('M2')) ||
      (renderer?.includes('Apple') && renderer?.includes('M3'))
    )
  }

  // Check device memory and cores - be more conservative
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 2
  const cores = navigator.hardwareConcurrency || 2
  
  // Require higher specs for animated mode
  const isHighPerformance = memory >= 8 && cores >= 8 && hasGoodGPU

  return { isHighPerformance, supportsWebGL, hasGoodGPU }
}

export default function HybridBackground() {
  const [renderMode, setRenderMode] = useState<'loading' | 'static' | 'animated'>('loading')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const caps = detectDeviceCapabilities()
    
    // Check for user preference to force static mode
    const forceStatic = localStorage.getItem('forceStaticBackground') === 'true'
    
    // Be very conservative - default to static unless explicitly high-performance
    if (forceStatic || !caps.supportsWebGL || !caps.isHighPerformance) {
      setRenderMode('static')
    } else {
      setRenderMode('animated')
    }
    
    // Log capabilities for debugging
    console.log('Device capabilities:', caps)
    console.log('Force static:', forceStatic)
    console.log('Render mode:', (forceStatic || !caps.isHighPerformance) ? 'static' : 'animated')
  }, [])

  // Show simple gradient during SSR and initial loading
  if (!isMounted || renderMode === 'loading') {
    return (
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-radial from-purple-900/20 via-cyan-900/10 to-transparent" />
    )
  }

  // Static/CSS mode for low-power devices
  if (renderMode === 'static') {
    return <StaticBackground />
  }

  // Animated canvas mode for high-performance devices
  return <AnimatedBackground />
}