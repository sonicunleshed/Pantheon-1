"use client"
import { useEffect, useRef } from "react"

export const CanvasRevealEffect = ({
  colors = [[255, 255, 255]],
  dotSize = 3,
  animationSpeed = 4,
  containerClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dotRadius = dotSize
  const dots: {
    x: number
    y: number
    vx: number
    vy: number
    color: number[]
    size: number
  }[] = []

  const initCanvas = () => {
    if (!canvasRef.current || !containerRef.current) return
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvasSize.current.w = container.offsetWidth
      canvasSize.current.h = container.offsetHeight
      canvas.width = canvasSize.current.w
      canvas.height = canvasSize.current.h
      initDots()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }

  const initDots = () => {
    dots.length = 0
    const numberOfDots = Math.min(Math.floor((canvasSize.current.w * canvasSize.current.h) / 1000), 1000)

    for (let i = 0; i < numberOfDots; i++) {
      const x = Math.random() * canvasSize.current.w
      const y = Math.random() * canvasSize.current.h
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = dotRadius
      dots.push({ x, y, vx, vy, color, size })
    }
  }

  const drawDots = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)

    dots.forEach((dot) => {
      // Update position
      dot.x += dot.vx
      dot.y += dot.vy

      // Bounce off walls
      if (dot.x < 0 || dot.x > canvasSize.current.w) dot.vx *= -1
      if (dot.y < 0 || dot.y > canvasSize.current.h) dot.vy *= -1

      // Calculate distance from mouse
      const dx = mouse.current.x - dot.x
      const dy = mouse.current.y - dot.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 100

      if (distance < maxDistance) {
        const angle = Math.atan2(dy, dx)
        const force = (maxDistance - distance) / maxDistance
        const moveX = Math.cos(angle) * force * animationSpeed
        const moveY = Math.sin(angle) * force * animationSpeed
        dot.x -= moveX
        dot.y -= moveY
      }

      // Draw dot
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, 0.8)`
      ctx.fill()
    })

    requestAnimationFrame(drawDots)
  }

  useEffect(() => {
    const cleanup = initCanvas()
    requestAnimationFrame(drawDots)
    return cleanup
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${containerClassName}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
