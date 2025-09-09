import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BirthdayCard from "../components/BirthdayCard";
import PhotoGallery from "../components/PhotoGallery";
import MusicPlayer from "../components/MusicPlayer";
import GiftBox from "../components/GiftBox";
import { Heart, Images, Music, Home, RotateCcw } from "lucide-react";

const HomePage = ({ showGallery, setShowGallery }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showGift, setShowGift] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [partnerName, setPartnerName] = useState("Nayla Virginnia");
  const [showHearts, setShowHearts] = useState([]);
  const containerRef = useRef(null);

  // Ganti dengan nama pasangan yang diinginkan
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    if (name) {
      setPartnerName(name);
    }
  }, []);

  const handleOpenCard = () => {
    setCurrentCard(1);
  };

  const handleNextCard = () => {
    setCurrentCard(2);
  };

  const handleShowGift = () => {
    setShowGift(true);
  };

  const handleReplay = () => {
    setCurrentCard(1);
    setShowGift(false);
  };

  const handleBackToHome = () => {
    setCurrentCard(0);
    setShowGift(false);
  };

  // Pesan untuk kartu pertama (ucapan)
  const greetingMessages = [
    `Selamat ulang tahun, babyyyyyy nda kerasa ya sekarang kamu udah kepala dua sudah makin tuwir. Aku bersyukur banget kita masih bareng sampai hari ini, jadi aku bisa ngerayain ulang tahun kamu lagihhhhh.`,
    `Makasih ya udah selalu ada, selalu sabar sama aku, dan mau bertahan sama semua drama aku (walaupun kamu sih si ratu dramanya). Aku janji bakal terus belajar biar bisa jadi pasangan yang lebih baik buat kamu.`,
    `Mungkin aku nda bisa ngasi lebih, tapi aku buat ini spesial buat kamuuu semoga kamu sukaaa yaaaah, fyi aku start buat tuh dari hari senin anjai jadi kalo misalnya ada bug yaa harap maklum yaaah waokwkaoawokkoaw.`,
  ];

  // Pesan untuk kartu kedua (harapan)
  const wishMessages = [
    `Hummm apa yaaa, Harapan aku buat kamu, semoga dengan umur baru ini kamu jadi makin sabar, makin sayang sama diri sendiri, makin sayang sama akuu, makin dewasa terutama waktu kita lagi ada masalah. Dan yang terpenting mulai mauu makan sayurrrr supaya tinggi biar jadi model`,
    `Dan untuk kita berdua aku berharap kita  tetap bareng selamanya, semua masalah kita bicarakan baik-baik, saling bergantung satu sama lain, saling mendukung, saling mengerti. Kedepannya juga aku bakal berusaha sebaik mungkin untuk hubungan kita `,
    `Semoga setiap ulang tahun kamu selalu sama aku ngerayainnyaaa. Akuu sayanggg bangett samaaa kamuuuu `,
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-100 font-sans"
    >
      {/* Floating action buttons - DIPINDAHKAN KE LUAR KONDISIONAL */}
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col gap-4 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowGallery(!showGallery)}
          className="bg-white p-4 rounded-xl shadow-lg text-pink-600"
          title={showGallery ? "Kembali ke Home" : "Lihat Kenangan"}
          style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
        >
          {showGallery ? <Home className="w-6 h-6" /> : <Images className="w-6 h-6" />}
        </motion.button>

        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {showGallery ? (
          <PhotoGallery setShowGallery={setShowGallery} />
        ) : (
          <>
            {currentCard === 0 ? (
              <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-300 opacity-50"></div>

                {/* Hero content */}
                <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
                  <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl">
                    <h1
                      className="text-4xl md:text-6xl font-display text-pink-600 mb-4"
                      style={{ fontFamily: '"Dancing Script", cursive' }}
                    >
                      Happy Birthday, {partnerName}!
                    </h1>

                    <p className="text-xl md:text-2xl text-pink-700 mb-8">
                      A Something Special For My Love
                    </p>

                    <p className="text-pink-600 mb-10">
                      Thursday September 11, 2025
                    </p>

                    <motion.button
                      onClick={handleOpenCard}
                      className="bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500 shadow-md hover:shadow-lg px-8 py-4 rounded-2xl font-medium text-lg"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Open your special card
                    </motion.button>
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/* Tombol navigasi di pojok kanan atas */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBackToHome}
                    className="bg-white p-3 rounded-xl shadow-lg text-pink-600"
                    title="Kembali ke Home"
                    style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
                  >
                    <Home className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Kartu ucapan atau gift box */}
                <AnimatePresence mode="wait">
                  {!showGift ? (
                    currentCard === 1 ? (
                      <BirthdayCard
                        key="card1"
                        partnerName={partnerName}
                        messages={greetingMessages}
                        cardType="Ucapan"
                        onNext={handleNextCard}
                        showNextButton={true}
                      />
                    ) : (
                      <BirthdayCard
                        key="card2"
                        partnerName={partnerName}
                        messages={wishMessages}
                        cardType="Harapan"
                        onNext={handleShowGift}
                        showNextButton={true}
                        nextButtonText="Buka Hadiah"
                      />
                    )
                  ) : (
                    <GiftBox />
                  )}
                </AnimatePresence>
              </>
            )}
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HomePage;