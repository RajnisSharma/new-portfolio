import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-circle">
          <div className="loader-circle-inner" />
        </div>
        <span className="loader-text">Rajnish Sharma</span>
      </div>
    </div>
  )
}
