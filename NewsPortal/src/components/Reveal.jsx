import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => node.classList.add('is-visible')

    const inView = () => {
      const top = node.getBoundingClientRect().top
      return top < window.innerHeight - 24
    }

    if (inView()) {
      const frame = requestAnimationFrame(show)
      return () => cancelAnimationFrame(frame)
    }

    if (!('IntersectionObserver' in window)) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
