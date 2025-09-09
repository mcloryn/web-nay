import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, X, SkipForward } from 'lucide-react'
 
const BirthdayCard = ({
  partnerName,
  messages,
  cardType,
  onNext,
  showNextButton = false,
  nextButtonText = "Lanjut"
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [showSkipTooltip, setShowSkipTooltip] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const typingIntervalRef = useRef(null)
  const timeoutRef = useRef(null)
 
  // Clear any existing intervals and timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
 
  // Skip animation function
  const handleSkipAnimation = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current)
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    setSkipAnimation(true)
    // Join all messages with proper spacing
    const fullText = messages.join('\n\n')
    setDisplayedText(fullText)
    setIsTypingComplete(true)
    setCurrentMessageIndex(messages.length - 1)
  }
 
  // Smooth typing animation effect
  useEffect(() => {
    if (skipAnimation || messages.length === 0) return
    
    // Clear any existing intervals and timeouts
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current)
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Create the full text with proper spacing between messages
    const fullText = messages.join('\n\n')
    let charIndex = 0
    setDisplayedText('')
    
    const typeCharacter = () => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1))
        charIndex++
      } else {
        // Typing complete
        clearInterval(typingIntervalRef.current)
        setIsTypingComplete(true)
      }
    }
    
    // Start typing with smooth interval
    typingIntervalRef.current = setInterval(typeCharacter, 40) // Lebih smooth dengan interval 25ms
    
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }
    }
  }, [messages, skipAnimation])
 
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative overflow-hidden"
      style={{
        boxShadow: "0 20px 50px rgba(236, 72, 153, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        minHeight: "500px"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-pink-200/20"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-pink-300/20"></div>
     
      {/* Gold decorative corners */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div>
     
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNNDUgNDVIMTVWMTVoMzB2MzBtMTUgMTVWMEgwdjYwaDYwVjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
     
      {/* Skip button - positioned at top right corner with tooltip */}
      {!skipAnimation && !isTypingComplete && (
        <motion.div
          className="absolute top-3 right-3 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onMouseEnter={() => setShowSkipTooltip(true)}
          onMouseLeave={() => setShowSkipTooltip(false)}
          onFocus={() => setShowSkipTooltip(true)}
          onBlur={() => setShowSkipTooltip(false)}
        >
          {/* Tooltip */}
          {showSkipTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-pink-700 text-white text-sm font-medium py-1 px-2 rounded-md whitespace-nowrap"
            >
              Lewati animasi
              {/* Tooltip arrow */}
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-pink-700"></div>
            </motion.div>
          )}
         
          <button
            onClick={handleSkipAnimation}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors shadow-sm flex items-center justify-center group"
            aria-label="Lewati animasi"
          >
            <SkipForward className="w-4 h-4 text-pink-700" />
          </button>
        </motion.div>
      )}
     
      <div className="relative z-10 h-full flex flex-col">
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-pink-500 mx-auto" fill="currentColor" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-display text-pink-700 mt-3">
            {cardType} untuk {partnerName}
          </h2>
        </div>
       
        <div className="flex-grow flex flex-col justify-center">
          {/* Letter-style container */}
          <div className="relative bg-white/80 rounded-lg p-6 border border-pink-100 shadow-sm mb-8">
            <div className="text-pink-900 text-justify font-serif leading-relaxed text-md">
              <div 
                className="whitespace-pre-line"
                style={{ 
                  lineHeight: '1.2',
                  letterSpacing: '0.2px'
                }}
              >
                {displayedText}
                {!skipAnimation && !isTypingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-6 bg-pink-600 ml-1 align-middle"
                    style={{ verticalAlign: 'text-bottom' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
 
        {isTypingComplete && showNextButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center mx-auto hover:shadow-xl transition-shadow duration-300"
            >
              {nextButtonText} <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
 
export default BirthdayCard