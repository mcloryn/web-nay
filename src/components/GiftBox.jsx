import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowModel(true), 800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-b from-pink-50 to-purple-50 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Menambahkan margin bottom yang lebih besar pada h3 */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-pink-700 mb-16 md:mb-20 text-center"
      >
        A Special Gift For You 💝
      </motion.h3>

      <div className="relative flex flex-col items-center w-full max-w-5xl">
        {/* Kotak hadiah */}
        <AnimatePresence>
          {!showModel && (
            <motion.div
              key="gift-box"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              exit={{
                scale: 0,
                rotate: 180,
                transition: { duration: 0.5 },
              }}
              className="cursor-pointer relative z-10 mb-8"
              onClick={handleOpen}
            >
              {/* Body box */}
              <motion.div
                animate={isOpen ? { y: -30, opacity: 0.7 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-40 h-28 md:w-48 md:h-32 bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700 rounded-lg shadow-2xl relative z-20 border-2 border-pink-800"
              />
              {/* Lid */}
              <motion.div
                initial={{ rotate: 0, transformOrigin: "left center" }}
                animate={isOpen ? { rotate: -110, y: -20 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-44 h-8 md:w-52 md:h-10 bg-gradient-to-b from-pink-600 via-pink-700 to-pink-800 rounded-t-lg absolute -top-4 md:-top-5 -left-2 z-30 border-2 border-pink-900"
              />
              {/* Ribbon */}
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-32 md:w-8 md:h-40 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 left-1/2 -translate-x-1/2 -top-5 md:-top-6 rounded-sm z-10 shadow-md"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute w-32 h-6 md:w-40 md:h-8 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 top-1/2 -translate-y-1/2 left-3 md:left-4 rounded-sm z-10 shadow-md"
              />
              {/* Teks klik */}
              {!isOpen && (
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-pink-700 z-20 flex flex-col items-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Gift className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
                  <p className="text-xs md:text-sm mt-1 text-center font-medium bg-white/80 px-2 py-1 rounded-full shadow-sm">
                    Klik untuk membuka
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sparkles efek - Diperbaiki posisinya */}
        <AnimatePresence>
          {isOpen && !showModel && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 4, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Ditambahkan positioning
            >
              <Sparkles className="w-10 h-10 text-yellow-400" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Isi hadiah - Sketchfab Embed dengan loader - Landscape */}
        <AnimatePresence>
          {showModel && (
            <motion.div
              key="model"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="relative z-40 mb-8 w-full flex justify-center"
            >
              <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center p-2 relative">
                {/* Loader pakai AnimatePresence */}
                <AnimatePresence>
                  {!modelLoaded && (
                    <motion.div
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center bg-white/70 z-10"
                    >
                      <motion.div
                        className="rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Iframe 3D Landscape */}
                <motion.iframe
                  key="iframe"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: modelLoaded ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                  frameBorder="0"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/0ffbf12f08764e83aaa154cb5e7d9710/embed?preload=1"
                  className="w-full h-full rounded-lg"
                  onLoad={() => setModelLoaded(true)}
                  style={{ aspectRatio: "16/9" }}
                ></motion.iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pesan cinta */}
        <AnimatePresence>
          {showModel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-pink-200 max-w-md"
            >
              <div className="flex items-center justify-center text-pink-600 mb-4">
                <Heart className="w-6 h-6 mr-2 fill-current text-pink-500" />
                <span className="font-semibold">Once again</span>
              </div>
              <p className="text-gray-700 text-center">
                Happy Birthday Babyyyyy
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GiftBox;