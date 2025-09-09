import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music } from 'lucide-react'

const MusicPlayer = ({ musicPlaying, setMusicPlaying }) => {
  const audioRef = useRef(null)
  
  useEffect(() => {
    // Inisialisasi audio
    audioRef.current = new Audio('music/1.mp3') // Ganti dengan path file musik
    audioRef.current.loop = true
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])
  
  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error)
      })
    }
    setMusicPlaying(!musicPlaying)
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className={`p-3 rounded-full shadow-lg ${
        musicPlaying ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
      }`}
      title={musicPlaying ? "Pause Musik" : "Putar Musik"}
    >
      {musicPlaying ? <Pause className="w-6 h-6" /> : <Music className="w-6 h-6" />}
    </motion.button>
  )
}

export default MusicPlayer