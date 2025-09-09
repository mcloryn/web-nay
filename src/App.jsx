import { useState } from 'react'
import HomePage from './pages/HomePage'
import { MotionConfig } from 'framer-motion'

function App() {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden relative">
        {/* Bokeh background effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-pink-200/30 blur-xl"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <HomePage 
          showGallery={showGallery} 
          setShowGallery={setShowGallery} 
        />
      </div>
    </MotionConfig>
  )
}

export default App