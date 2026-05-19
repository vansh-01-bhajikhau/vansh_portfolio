import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    let mx = 0, my = 0, rx = 0, ry = 0
    
    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (cur) {
        cur.style.transform = `translate(${mx - 6}px, ${my - 6}px)`
      }
    }
    
    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring) {
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      }
      requestAnimationFrame(animateRing)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    const animId = requestAnimationFrame(animateRing)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])
  
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  )
}