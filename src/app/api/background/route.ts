import { NextRequest, NextResponse } from 'next/server'

// Server-side background generation for low-power devices
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = parseInt(searchParams.get('width') || '1920')
  const height = parseInt(searchParams.get('height') || '1080')
  const particleCount = parseInt(searchParams.get('particles') || '50')
  
  // Generate SVG background with particles (lighter than canvas)
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const x = Math.random() * width
    const y = Math.random() * height
    const size = Math.random() * 3 + 1
    const opacity = Math.random() * 0.8 + 0.2
    const color = Math.random() > 0.5 ? '#7a00ff' : '#00e5ff'
    
    return `<circle cx="${x}" cy="${y}" r="${size}" fill="${color}" opacity="${opacity}" />`
  }).join('')
  
  // Generate connection lines
  const lines = []
  const positions = Array.from({ length: Math.min(particleCount, 20) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height
  }))
  
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const dx = positions[i].x - positions[j].x
      const dy = positions[i].y - positions[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150 && lines.length < 15) {
        const opacity = (150 - distance) / 150 * 0.3
        lines.push(`<line x1="${positions[i].x}" y1="${positions[i].y}" x2="${positions[j].x}" y2="${positions[j].y}" stroke="#7a00ff" stroke-width="1" opacity="${opacity}" />`)
      }
    }
  }
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(122, 0, 255, 0.1)" />
          <stop offset="50%" stop-color="rgba(0, 229, 255, 0.05)" />
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      ${lines.join('')}
      ${particles}
    </svg>
  `
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
    }
  })
}