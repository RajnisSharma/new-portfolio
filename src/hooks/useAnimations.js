import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for Text-to-Speech welcome message
 * Speaks a welcome message when component mounts
 */
export function useWelcomeMessage(message = "Welcome to Rajnish Sharma's portfolio.", enabled = true) {
  useEffect(() => {
    if (!('speechSynthesis' in window)) return undefined

    window.speechSynthesis.cancel()
    if (!enabled) return undefined

    const utterance = new SpeechSynthesisUtterance(message)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 0.8

    const timeoutId = window.setTimeout(() => {
      window.speechSynthesis.speak(utterance)
    }, 500)

    return () => {
      window.clearTimeout(timeoutId)
      window.speechSynthesis.cancel()
    }
  }, [enabled, message])
}

/**
 * Custom hook for Intersection Observer animations
 * Triggers animations when elements come into view
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return ref
}

/**
 * Custom hook for smooth scroll animations
 * Adds parallax or scroll-based animations
 */
export function useParallax(offset = 30) {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY
        ref.current.style.transform = `translateY(${scrollY * offset * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return ref
}

/**
 * Custom hook for element counter animation
 * Animates numbers from 0 to target
 */
export function useCounter(target = 100, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(target * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return count
}
