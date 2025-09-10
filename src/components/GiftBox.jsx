import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles, Star } from "lucide-react";

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  // Generate confetti pieces
  const generateConfetti = () => {
    const pieces = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: ['#ff69b4', '#ffd700', '#ff6347', '#9370db', '#00ced1', '#98fb98'][Math.floor(Math.random() * 6)],
        shape: Math.random() > 0.5 ? 'circle' : 'square',
        size: Math.random() * 8 + 4,
        velocity: Math.random() * 3 + 2
      });
    }
    setConfettiPieces(pieces);
  };

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      generateConfetti();
      setTimeout(() => {
        setShowBouquet(true);
        setShowConfetti(true);
      }, 1000); // Increased delay for smoother transition
      setTimeout(() => setShowConfetti(false), 6000);
    }
  };

  // Enhanced SingleFlower with smoother animations
const Flower = ({ delay = 0, color = "pink", position = 0, totalFlowers = 5 }) => {
    const colorMap = {
      pink: "from-pink-400 to-pink-600",
      purple: "from-purple-400 to-purple-600",
      rose: "from-rose-400 to-rose-600",
      blue: "from-blue-400 to-blue-600",
      red: "from-red-400 to-red-600",
    };

    // Calculate position with convergence (flowers will point toward center)
    const spread = 45; // How far flowers spread out
    const convergenceFactor = 15; // Angle for convergence
    
    // Position calculation with convergence
    const leftPosition = 35 + (position * (spread / (totalFlowers - 1)));
    const angle = (position - (totalFlowers - 1)/2) * convergenceFactor;
    
    return (
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.5, rotate: angle }}
        animate={{ y: 0, opacity: 1, scale: 1, rotate: angle }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-1/2"
        style={{ left: `${leftPosition}%` }}
      >
        <div className="relative w-16 h-16">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} rounded-full`}
              style={{
                transform: `rotate(${i * 60}deg) translateY(-50%) scale(0.8)`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-yellow-300 rounded-full scale-50 shadow-lg" />
        </div>
        {/* Longer stem positioned lower */}
        <div className="w-1 h-24 bg-gradient-to-b from-green-600 to-green-800 mx-auto rounded-full mt-[-8px]" />
      </motion.div>
    );
  };

  // Enhanced Bouquet with smoother animations
  // Ubah komponen Bouquet seperti ini
const Bouquet = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, y: 50 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ 
      duration: 1.5, 
      type: "spring", 
      stiffness: 80,
      damping: 12,
      mass: 0.8
    }}
    className="relative w-80 h-96 flex items-center justify-center"
  >
    {/* Bunga di dalam wrapping paper */}
    <div className="absolute bottom-[27%] right-[18%] w-full flex justify-center">
      {[...Array(5)].map((_, i) => (
        <Flower
          key={i}
          delay={0.5 + i * 0.2}
          color={["pink","purple","yellow","red","blue"][i % 5]} // warna bunga berbeda
          position={i}
          totalFlowers={5}
        />
      ))}
    </div>

    {/* Wrapping paper */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 3, 
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="absolute bottom-0 w-56 h-40 bg-gradient-to-b from-white via-pink-50 to-pink-100 rounded-b-full opacity-90 border-2 border-pink-300 shadow-xl"
      style={{ transform: 'translateY(120px)' }}
    />

    {/* Ribbon */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        delay: 3.2, 
        type: "spring", 
        stiffness: 150, 
        damping: 10 
      }}
      className="absolute bottom-0 w-60 h-10 bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 rounded-lg shadow-lg"
      style={{ transform: 'translateY(140px)' }}
    />

    {/* Bow */}
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 3.8, 
        type: "spring", 
        stiffness: 120, 
        damping: 8 
      }}
      className="absolute bottom-0 flex items-center justify-center"
      style={{ transform: 'translateY(135px)' }}
    >
      <div className="w-8 h-6 bg-gradient-to-b from-red-400 to-red-600 rounded-full transform rotate-45 shadow-md"></div>
      <div className="w-8 h-6 bg-gradient-to-b from-red-400 to-red-600 rounded-full transform -rotate-45 shadow-md -ml-2"></div>
      <div className="absolute w-4 h-4 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-sm"></div>
    </motion.div>
  </motion.div>
);


  // Custom Confetti Component with smoother animation
  const CustomConfetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            x: piece.x, 
            y: piece.y,
            rotate: piece.rotation,
            scale: 1,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 50,
            rotate: piece.rotation + 720,
            scale: [1, 1.2, 0.8, 1],
            opacity: [1, 1, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: [0.17, 0.67, 0.83, 0.67],
            delay: Math.random() * 0.5
          }}
          className={`absolute ${piece.shape === 'circle' ? 'rounded-full' : 'rounded-sm'}`}
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            boxShadow: `0 0 10px ${piece.color}50`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden relative">
      {showConfetti && <CustomConfetti />}
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {i % 2 === 0 ? (
              <Star className="w-6 h-6 text-pink-300" />
            ) : (
              <Sparkles className="w-4 h-4 text-purple-300" />
            )}
          </motion.div>
        ))}
      </div>
     
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          type: "spring", 
          stiffness: 100, 
          damping: 10 
        }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-16 md:mb-20 text-center"
      >
        A Special Gift For You 💝
      </motion.h3>
 
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        {/* Enhanced Gift Box */}
        <AnimatePresence>
          {!showBouquet && (
            <motion.div
              key="gift-box"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  mass: 0.8 
                },
              }}
              exit={{
                scale: 0,
                rotate: 180,
                transition: { duration: 0.8 },
              }}
              className="cursor-pointer relative z-10 mb-8 group"
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Box shadow */}
              <div className="absolute inset-0 bg-pink-800 rounded-lg blur-sm opacity-50 transform translate-y-2"></div>
              
              {/* Body box */}
              <motion.div
                animate={isOpen ? { y: -40, opacity: 0.6 } : { y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-48 h-36 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-lg shadow-2xl relative z-20 border-2 border-pink-800"
              />
              
              {/* Lid with enhanced animation */}
              <motion.div
                initial={{ rotate: 0, transformOrigin: "left center" }}
                animate={isOpen ? { rotate: -120, y: -25 } : { rotate: 0, y: 0 }}
                transition={{ 
                  duration: 1, 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="w-52 h-12 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 rounded-t-lg absolute -top-6 -left-2 z-30 border-2 border-pink-900 shadow-lg"
              />
              
              {/* Ribbon horizontal */}
              <motion.div
                animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-8 h-44 bg-gradient-to-b from-gold-300 via-yellow-400 to-gold-500 left-1/2 -translate-x-1/2 -top-6 rounded-lg z-10 shadow-lg border border-yellow-600"
              />
              
              {/* Ribbon vertical */}
              <motion.div
                animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-44 h-8 bg-gradient-to-r from-gold-300 via-yellow-400 to-gold-500 top-1/2 -translate-y-1/2 left-2 rounded-lg z-10 shadow-lg border border-yellow-600"
              />
              
              {/* Click instruction */}
              {!isOpen && (
                <motion.div
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-pink-700 z-20 flex flex-col items-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                >
                  <Gift className="w-8 h-8 mx-auto animate-pulse" />
                  <p className="text-sm mt-2 text-center font-semibold bg-white/90 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-pink-200">
                    Klik untuk membuka
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
 
        {/* Enhanced opening effect */}
        <AnimatePresence>
          {isOpen && !showBouquet && (
            <>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 6, 4], opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
              
              {/* Multiple sparkle effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 2, 0], 
                    opacity: [0, 1, 0],
                    x: Math.cos(i * 45 * Math.PI / 180) * 100,
                    y: Math.sin(i * 45 * Math.PI / 180) * 100
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + i * 0.07,
                    ease: "easeOut"
                  }}
                  className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Star className="w-6 h-6 text-pink-400" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
 
        {/* Enhanced Bouquet */}
        <AnimatePresence>
          {showBouquet && (
            <motion.div
              key="bouquet"
              initial={{ scale: 0, opacity: 0, rotate: -90, y: 100 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 15, 
                  duration: 1.5,
                  mass: 0.9
                },
              }}
              className="relative z-40 mb-8 flex justify-center"
            >
              <div className="w-full h-96 flex items-center justify-center">
                <Bouquet />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
 
        {/* Enhanced love message */}
        <AnimatePresence>
          {showBouquet && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.5, 
                duration: 1, 
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="mt-8 p-8 bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl border border-pink-200 max-w-lg relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center text-pink-600 mb-6">
                  <Heart className="w-8 h-8 mr-3 fill-current text-pink-500 animate-pulse" />
                  <span className="font-bold text-xl">Once Again</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed text-lg">
Happy Birthday Babyyyyy! Thank you for being the amazing person you are. This gift is a small token of my appreciation for you.💕💕💕
                </p>
              </div>
              
              {/* Floating hearts */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute opacity-20"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`
                    }}
                  >
                    <Heart className="w-4 h-4 text-pink-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
 
export default GiftBox;