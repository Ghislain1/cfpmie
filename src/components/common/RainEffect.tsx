import { useEffect, useRef } from 'react'

interface Drop {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  width: number
}

interface RainEffectProps {
  density?: number
  color?: string
  speed?: number
  className?: string
}

export default function RainEffect({
  density = 120,
  color = 'rgba(255,255,255,1)',
  speed = 12,
  className,
}: RainEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dropsRef = useRef<Drop[]>([])
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    dropsRef.current = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1,
      length: Math.random() * 30 + 15,
      speed: (Math.random() * 8 + 4) * speed,
      opacity: Math.random() * 0.7 + 0.08,
      width: Math.random() * 1.5 + 0.5,
    }))

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const distScale = 1

      for (const drop of dropsRef.current) {
        drop.y += drop.speed

        const relX = (drop.x - centerX) / centerX
        const windOffset = relX * 0.3
        drop.x += windOffset * drop.speed * 0.05

        if (drop.y > canvas.height) {
          drop.y = -drop.length
          drop.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x - windOffset * 0.5, drop.y - drop.length)
        ctx.strokeStyle = color
        ctx.lineWidth = drop.width
        ctx.globalAlpha = drop.opacity * distScale
        ctx.lineCap = 'round'
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [density, color, speed])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  )
}
