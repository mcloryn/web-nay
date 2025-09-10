import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart, Folder, Clock, MapPin, Camera, ArrowLeft } from 'lucide-react'

const PhotoGallery = ({ setShowGallery }) => {
  const [currentView, setCurrentView] = useState('moments') // 'moments' or 'grid' or 'carousel'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMoment, setSelectedMoment] = useState(null)
  
  // Data momen dengan beberapa foto di setiap momen
  const moments = [
    {
      id: 1,
      title: "Nganter ke bandara pertama kali",
      date: "18 April 2023",
      location: "Bandara Kualanamu",
      coverPhoto: "/photos/cover/2.png",
      photos: [
        { id: 1, src: "/photos/moments/bandara/1.png", aspect: "portrait" },
        { id: 2, src: "/photos/moments/bandara/2.png", aspect: "portrait" },
        { id: 3, src: "/photos/moments/bandara/3.png", aspect: "portrait" },
        { id: 4, src: "/photos/moments/bandara/4.png", aspect: "portrait" },
        { id: 5, src: "/photos/moments/bandara/5.png", aspect: "portrait" },
        { id: 6, src: "/photos/moments/bandara/6.png", aspect: "portrait" },
        { id: 7, src: "/photos/moments/bandara/7.png", aspect: "portrait" },
        { id: 8, src: "/photos/moments/bandara/8.png", aspect: "portrait" },
        { id: 9, src: "/photos/moments/bandara/9.png", aspect: "portrait" },
        { id: 10, src: "/photos/moments/bandara/10.png", aspect: "portrait" },
      ]
    },
    {
      id: 2,
      title: "Petama Jemput dari Bandara",
      date: "5 Mei 2023",
      location: "Bandara Kualanamu",
      coverPhoto: "/photos/cover/3.png",
      photos: [
        { id: 11, src: "/photos/moments/pertama jemput/1.png", aspect: "portrait" },
        { id: 12, src: "/photos/moments/pertama jemput/2.png", aspect: "portrait" },
        { id: 13, src: "/photos/moments/pertama jemput/3.png", aspect: "portrait" },
        { id: 14, src: "/photos/moments/pertama jemput/4.png", aspect: "portrait" },
        { id: 15, src: "/photos/moments/pertama jemput/5.png", aspect: "portrait" },
        { id: 16, src: "/photos/moments/pertama jemput/6.png", aspect: "portrait" },
      ]
    },
    {
      id: 3,
      title: "Matcha Date",
      date: "22 Mei 2023",
      location: "Matcha Bar, Medan",
      coverPhoto: "/photos/cover/1.webp",
      photos: [
        { id: 17, src: "/photos/moments/matcha date/1.png", aspect: "portrait" },
        { id: 18, src: "/photos/moments/matcha date/2.png", aspect: "portrait" },
        { id: 19, src: "/photos/moments/matcha date/3.png", aspect: "portrait" },
        { id: 20, src: "/photos/moments/matcha date/4.png", aspect: "portrait" },
        { id: 21, src: "/photos/moments/matcha date/5.png", aspect: "portrait" },

      ]
    },
    {
      id: 4,
      title: "Nonton Bioskop",
      date: "-",
      location: "Bioskop, Medan",
      coverPhoto: "/photos/cover/4.png",
      photos: [
        { id: 22, src: "/photos/moments/nonton/1.png", aspect: "portrait" },
        { id: 23, src: "/photos/moments/nonton/2.png", aspect: "portrait" },
        { id: 24, src: "/photos/moments/nonton/3.png", aspect: "portrait" },
        { id: 25, src: "/photos/moments/nonton/4.png", aspect: "portrait" },
        { id: 26, src: "/photos/moments/nonton/5.png", aspect: "portrait" },
        { id: 27, src: "/photos/moments/nonton/6.png", aspect: "portrait" },
        { id: 28, src: "/photos/moments/nonton/7.png", aspect: "portrait" },
        { id: 29, src: "/photos/moments/nonton/8.png", aspect: "portrait" },
        { id: 30, src: "/photos/moments/nonton/9.png", aspect: "portrait" },
        { id: 31, src: "/photos/moments/nonton/10.png", aspect: "portrait" },
        { id: 32, src: "/photos/moments/nonton/11.png", aspect: "portrait" },
        { id: 33, src: "/photos/moments/nonton/12.png", aspect: "portrait" },
        { id: 34, src: "/photos/moments/nonton/13.png", aspect: "portrait" },
        { id: 35, src: "/photos/moments/nonton/14.png", aspect: "portrait" },
        { id: 36, src: "/photos/moments/nonton/15.png", aspect: "portrait" },
        { id: 37, src: "/photos/moments/nonton/16.png", aspect: "portrait" },
        { id: 38, src: "/photos/moments/nonton/17.png", aspect: "portrait" },
        { id: 39, src: "/photos/moments/nonton/18.png", aspect: "portrait" },
        { id: 40, src: "/photos/moments/nonton/19.png", aspect: "portrait" },
        { id: 41, src: "/photos/moments/nonton/20.png", aspect: "portrait" },
        { id: 42, src: "/photos/moments/nonton/21.png", aspect: "portrait" },
        { id: 43, src: "/photos/moments/nonton/22.png", aspect: "portrait" },
        { id: 44, src: "/photos/moments/nonton/23.png", aspect: "portrait" },
        { id: 45, src: "/photos/moments/nonton/24.png", aspect: "portrait" },
      ]
    },
    {
      id: 6,
      title: "Undangan Bareng pertama kali",
      date: "2 September 2023",
      location: "Bonjol, Binjai",
      coverPhoto: "/photos/cover/5.png",
      photos: [
        { id: 47, src: "/photos/moments/first kondangan/1.png", aspect: "portrait" },
        { id: 48, src: "/photos/moments/first kondangan/2.png", aspect: "portrait" },
        { id: 49, src: "/photos/moments/first kondangan/3.png", aspect: "portrait" },
        { id: 50, src: "/photos/moments/first kondangan/4.png", aspect: "portrait" },
        { id: 51, src: "/photos/moments/first kondangan/5.png", aspect: "portrait" },
        { id: 52, src: "/photos/moments/first kondangan/6.png", aspect: "portrait" },
        { id: 53, src: "/photos/moments/first kondangan/7.png", aspect: "portrait" },
      ]
    },
    {
      id: 7,
      title: "Nay's First Birthday",
      date: "11 September 2023",
      location: "Muda Burger n Dylan's Cafe",
      coverPhoto: "/photos/cover/6.png",
      photos: [
        { id: 54, src: "/photos/moments/first ur bd/1.png", aspect: "portrait" },
        { id: 55, src: "/photos/moments/first ur bd/2.png", aspect: "portrait" },
        { id: 56, src: "/photos/moments/first ur bd/3.png", aspect: "portrait" },
        { id: 57, src: "/photos/moments/first ur bd/4.png", aspect: "portrait" },
        { id: 58, src: "/photos/moments/first ur bd/5.png", aspect: "portrait" },
        { id: 59, src: "/photos/moments/first ur bd/6.png", aspect: "portrait" },
        { id: 60, src: "/photos/moments/first ur bd/7.png", aspect: "portrait" },
        { id: 61, src: "/photos/moments/first ur bd/8.png", aspect: "portrait" },
        { id: 62, src: "/photos/moments/first ur bd/9.png", aspect: "portrait" },
        { id: 63, src: "/photos/moments/first ur bd/10.png", aspect: "portrait" },
        { id: 64, src: "/photos/moments/first ur bd/11.png", aspect: "portrait" },
        { id: 65, src: "/photos/moments/first ur bd/12.png", aspect: "portrait" },
        { id: 66, src: "/photos/moments/first ur bd/13.png", aspect: "portrait" },
        { id: 67, src: "/photos/moments/first ur bd/14.png", aspect: "portrait" },
        { id: 68, src: "/photos/moments/first ur bd/15.png", aspect: "portrait" },
        { id: 69, src: "/photos/moments/first ur bd/16.png", aspect: "portrait" },

      ]
    },
    {
      id: 8,
      title: "Another nganter ke bandara",
      date: "19 September 2023",
      location: "Bandara Kualanamu",
      coverPhoto: "/photos/cover/7.png",
      photos: [
        { id: 70, src: "/photos/moments/another bandara/1.png", aspect: "portrait" },
        { id: 71, src: "/photos/moments/another bandara/2.png", aspect: "portrait" },
        { id: 72, src: "/photos/moments/another bandara/3.png", aspect: "portrait" },
        { id: 73, src: "/photos/moments/another bandara/4.png", aspect: "portrait" },
        { id: 74, src: "/photos/moments/another bandara/5.png", aspect: "portrait" },
        { id: 75, src: "/photos/moments/another bandara/6.png", aspect: "portrait" },
        { id: 76, src: "/photos/moments/another bandara/7.png", aspect: "portrait" },
        { id: 77, src: "/photos/moments/another bandara/8.png", aspect: "portrait" },
        { id: 78, src: "/photos/moments/another bandara/9.png", aspect: "portrait" },
        { id: 79, src: "/photos/moments/another bandara/10.png", aspect: "portrait" },
      ]
    },
    {
      id: 9,
      title: "Sid's Birthday",
      date: "18 December 2023",
      location: "Soeta Cafe",
      coverPhoto: "/photos/cover/8.png",
      photos: [
        { id: 80, src: "/photos/moments/ma bd/1.png", aspect: "portrait" },
        { id: 81, src: "/photos/moments/ma bd/2.png", aspect: "portrait" },
        { id: 82, src: "/photos/moments/ma bd/3.png", aspect: "portrait" },
        { id: 83, src: "/photos/moments/ma bd/4.png", aspect: "portrait" },
        { id: 84, src: "/photos/moments/ma bd/5.png", aspect: "portrait" },
        { id: 85, src: "/photos/moments/ma bd/6.png", aspect: "portrait" },
        { id: 86, src: "/photos/moments/ma bd/7.png", aspect: "portrait" },
      ]
    },
    {
      id: 10,
      title: "Sova Cafe Date",
      date: "-",
      location: "Sova Cafe, Binjai",
      coverPhoto: "/photos/cover/9.png",
      photos: [
        { id: 87, src: "/photos/moments/sova cafe/1.png", aspect: "portrait" },
        { id: 88, src: "/photos/moments/sova cafe/2.png", aspect: "portrait" },
        { id: 89, src: "/photos/moments/sova cafe/3.png", aspect: "portrait" },
        { id: 90, src: "/photos/moments/sova cafe/4.png", aspect: "portrait" },
        { id: 91, src: "/photos/moments/sova cafe/5.png", aspect: "portrait" },
        { id: 92, src: "/photos/moments/sova cafe/6.png", aspect: "portrait" },
        { id: 93, src: "/photos/moments/sova cafe/7.png", aspect: "portrait" },
      ]
    },
    {
      id: 11,
      title: "Beach Date",
      date: "29 June 2024",
      location: "Pantai Mangrove, Perbaungan",
      coverPhoto: "/photos/cover/10.png",
      photos: [
        { id: 94, src: "/photos/moments/beach date/1.png", aspect: "portrait" },
        { id: 95, src: "/photos/moments/beach date/2.png", aspect: "portrait" },
        { id: 96, src: "/photos/moments/beach date/3.png", aspect: "portrait" },
        { id: 97, src: "/photos/moments/beach date/4.png", aspect: "portrait" },
        { id: 98, src: "/photos/moments/beach date/5.png", aspect: "portrait" },
        { id: 99, src: "/photos/moments/beach date/6.png", aspect: "portrait" },
        { id: 100, src: "/photos/moments/beach date/7.png", aspect: "portrait" },
        { id: 101, src: "/photos/moments/beach date/8.png", aspect: "portrait" },
        { id: 102, src: "/photos/moments/beach date/9.png", aspect: "portrait" },
        { id: 103, src: "/photos/moments/beach date/10.png", aspect: "portrait" },
      ]
    },
    {
      id: 12,
      title: "Undangan deol",
      date: "-",
      location: "-",
      coverPhoto: "/photos/cover/11.png",
      photos: [
        { id: 104, src: "/photos/moments/kondangan deol/1.png", aspect: "portrait" },
        { id: 105, src: "/photos/moments/kondangan deol/2.png", aspect: "portrait" },
        { id: 106, src: "/photos/moments/kondangan deol/3.png", aspect: "portrait" },
        { id: 107, src: "/photos/moments/kondangan deol/4.png", aspect: "portrait" },
        { id: 108, src: "/photos/moments/kondangan deol/5.png", aspect: "portrait" },

      ]
    },
    {
      id: 13,
      title: "First Anniversary",
      date: "22 Maret 2024",
      location: "Soeta Cafw",
      coverPhoto: "/photos/cover/12.png",
      photos: [
        { id: 109, src: "/photos/moments/first anniv/1.png", aspect: "portrait" },
        { id: 110, src: "/photos/moments/first anniv/2.png", aspect: "portrait" },
        { id: 111, src: "/photos/moments/first anniv/3.png", aspect: "portrait" },
        { id: 112, src: "/photos/moments/first anniv/4.png", aspect: "portrait" },
        { id: 113, src: "/photos/moments/first anniv/5.png", aspect: "portrait" },

      ]
    },
    {
      id: 14,
      title: "Kalia Cafe Double Date",
      date: "-",
      location: "Kalia Cafe, Medan",
      coverPhoto: "/photos/cover/13.png",
      photos: [
        { id: 114, src: "/photos/moments/kalia/PNG image.png", aspect: "portrait" },
        { id: 115, src: "/photos/moments/kalia/PNG image 2.png", aspect: "portrait" },
        { id: 116, src: "/photos/moments/kalia/PNG image 3.png", aspect: "portrait" },
        { id: 117, src: "/photos/moments/kalia/PNG image 4.png", aspect: "portrait" },
        { id: 118, src: "/photos/moments/kalia/PNG image 5.png", aspect: "portrait" },
        { id: 119, src: "/photos/moments/kalia/PNG image 6.png", aspect: "portrait" },
        { id: 120, src: "/photos/moments/kalia/PNG image 7.png", aspect: "portrait" },
        { id: 121, src: "/photos/moments/kalia/PNG image 8.png", aspect: "portrait" },
      ]
    },
    {
      id: 15,
      title: "Hidden Place Date",
      date: "12 Juli 2025",
      location: "Hidden Place, Medan",
      coverPhoto: "/photos/cover/14.png",
      photos: [
        { id: 122, src: "/photos/moments/hidden/PNG image.png", aspect: "portrait" },
        { id: 123, src: "/photos/moments/hidden/PNG image 2.png", aspect: "portrait" },
        { id: 124, src: "/photos/moments/hidden/PNG image 3.png", aspect: "portrait" },
        { id: 125, src: "/photos/moments/hidden/PNG image 4.png", aspect: "portrait" },
        { id: 126, src: "/photos/moments/hidden/PNG image 5.png", aspect: "portrait" },
        { id: 127, src: "/photos/moments/hidden/PNG image 6.png", aspect: "portrait" },
        { id: 128, src: "/photos/moments/hidden/PNG image 7.png", aspect: "portrait" },
        { id: 129, src: "/photos/moments/hidden/PNG image 8.png", aspect: "portrait" },
        { id: 130, src: "/photos/moments/hidden/PNG image 9.png", aspect: "portrait" },
      ]
    },
    {
      id: 16,
      title: "Bukber Floc Coffe",
      date: "15 Maret 2025",
      location: "Floc Coffe, Medan",
      coverPhoto: "/photos/cover/15.png",
      photos: [
        { id: 131, src: "/photos/moments/bukber floc/PNG image.png", aspect: "portrait" },
        { id: 132, src: "/photos/moments/bukber floc/PNG image 2.png", aspect: "portrait" },
        { id: 133, src: "/photos/moments/bukber floc/PNG image 3.png", aspect: "portrait" },
        { id: 134, src: "/photos/moments/bukber floc/PNG image 4.png", aspect: "portrait" },
        { id: 135, src: "/photos/moments/bukber floc/PNG image 5.png", aspect: "portrait" },
        { id: 136, src: "/photos/moments/bukber floc/PNG image 6.png", aspect: "portrait" },
        { id: 137, src: "/photos/moments/bukber floc/PNG image 7.png", aspect: "portrait" },
        { id: 138, src: "/photos/moments/bukber floc/PNG image 8.png", aspect: "portrait" },
        { id: 139, src: "/photos/moments/bukber floc/PNG image 9.png", aspect: "portrait" },
        { id: 140, src: "/photos/moments/bukber floc/PNG image 10.png", aspect: "portrait" },
        
      ]
    },
    {
      id: 17,
      title: "Liberty's",
      date: "11 Juni 2025",
      location: "Liberty's, Medan",
      coverPhoto: "/photos/cover/16.png",
      photos: [
        { id: 141, src: "/photos/moments/apart podo/PNG image.png", aspect: "portrait" },
        { id: 142, src: "/photos/moments/apart podo/PNG image 2.png", aspect: "portrait" },
        { id: 143, src: "/photos/moments/apart podo/PNG image 3.png", aspect: "portrait" },
        { id: 144, src: "/photos/moments/apart podo/PNG image 4.png", aspect: "portrait" },
        { id: 145, src: "/photos/moments/apart podo/PNG image 5.png", aspect: "portrait" },
        { id: 146, src: "/photos/moments/apart podo/PNG image 6.png", aspect: "portrait" },
        { id: 147, src: "/photos/moments/apart podo/PNG image 7.png", aspect: "portrait" },
        { id: 149, src: "/photos/moments/apart podo/PNG image 9.png", aspect: "portrait" },
        { id: 150, src: "/photos/moments/apart podo/PNG image 10.png", aspect: "portrait" },
      ]
    },
    {
      id: 18,
      title: "2nd Anniversary",
      date: "22 maret 2025",
      location: "Penthouse 18th Floor, Medan",
      coverPhoto: "/photos/cover/17.png",
      photos: [
        { id: 151, src: "/photos/moments/sec annv/PNG image.png", aspect: "portrait" },
        { id: 152, src: "/photos/moments/sec annv/PNG image 2.png", aspect: "portrait" },
        { id: 153, src: "/photos/moments/sec annv/PNG image 3.png", aspect: "portrait" },
        { id: 154, src: "/photos/moments/sec annv/PNG image 4.png", aspect: "portrait" },
        { id: 155, src: "/photos/moments/sec annv/PNG image 5.png", aspect: "portrait" },
        { id: 156, src: "/photos/moments/sec annv/PNG image 6.png", aspect: "portrait" },
        { id: 157, src: "/photos/moments/sec annv/PNG image 7.png", aspect: "portrait" },
        { id: 158, src: "/photos/moments/sec annv/PNG image 8.png", aspect: "portrait" },
        { id: 159, src: "/photos/moments/sec annv/PNG image 9.png", aspect: "portrait" },
        { id: 160, src: "/photos/moments/sec annv/PNG image 10.png", aspect: "portrait" },
        { id: 162, src: "/photos/moments/sec annv/PNG image 12.png", aspect: "portrait" },
        { id: 163, src: "/photos/moments/sec annv/PNG image 13.png", aspect: "portrait" },
        { id: 164, src: "/photos/moments/sec annv/PNG image 14.png", aspect: "portrait" },
        { id: 165, src: "/photos/moments/sec annv/PNG image 15.png", aspect: "portrait" },
        { id: 167, src: "/photos/moments/sec annv/PNG image 17.png", aspect: "portrait" },
      ]
    },
    {
      id: 19,
      title: "2nd ur b'day",
      date: "11 September 2024",
      location: "Omotesando, Medan",
      coverPhoto: "/photos/cover/18.png",
      photos: [
        { id: 168, src: "/photos/moments/sec ur bd/PNG image.png", aspect: "portrait" },
        { id: 169, src: "/photos/moments/sec ur bd/PNG image 2.png", aspect: "portrait" },
        { id: 170, src: "/photos/moments/sec ur bd/PNG image 3.png", aspect: "portrait" },
        { id: 171, src: "/photos/moments/sec ur bd/PNG image 4.png", aspect: "portrait" },  
        { id: 172, src: "/photos/moments/sec ur bd/PNG image 5.png", aspect: "portrait" },
        { id: 173, src: "/photos/moments/sec ur bd/PNG image 6.png", aspect: "portrait" },
        { id: 174, src: "/photos/moments/sec ur bd/PNG image 7.png", aspect: "portrait" },
        { id: 175, src: "/photos/moments/sec ur bd/PNG image 8.png", aspect: "portrait" },
        { id: 176, src: "/photos/moments/sec ur bd/PNG image 9.png", aspect: "portrait" },
        { id: 177, src: "/photos/moments/sec ur bd/PNG image 10.png", aspect: "portrait" },
      ]
    },
  ]

  const goToPrevious = () => {
    if (selectedMoment) {
      setCurrentIndex(prevIndex => 
        prevIndex === 0 ? selectedMoment.photos.length - 1 : prevIndex - 1
      )
    }
  }

  const goToNext = () => {
    if (selectedMoment) {
      setCurrentIndex(prevIndex => 
        prevIndex === selectedMoment.photos.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  // Tampilan Daftar Momen (Folder-folder)
  const MomentsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {moments.map((moment) => (
        <motion.div
          key={moment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: moment.id * 0.1 }}
          className="bg-white/30 rounded-2xl overflow-hidden cursor-pointer group border border-white/30 backdrop-blur-sm"
          onClick={() => {
            setSelectedMoment(moment);
            setCurrentView('grid');
            setCurrentIndex(0);
          }}
        >
          <div className="relative overflow-hidden h-48">
            <img 
              src={moment.coverPhoto} 
              alt={moment.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white w-full">
                <div className="flex items-center mb-2">
                  <Folder className="w-5 h-5 mr-2 text-pink-200" />
                  <h3 className="font-semibold text-lg">{moment.title}</h3>
                </div>
                <div className="flex items-center text-sm text-pink-100">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="mr-4">{moment.date}</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{moment.location}</span>
                </div>
                <div className="mt-2 text-xs text-pink-200">
                  {moment.photos.length} foto
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  // Tampilan Grid Foto dalam satu Momen
  const GridView = () => (
    <div>
      {/* Header Momen */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white/40 rounded-xl p-4 mb-6 flex items-center justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold text-pink-800">{selectedMoment.title}</h3>
          <div className="flex items-center text-sm text-pink-700 mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <span className="mr-4">{selectedMoment.date}</span>
            <MapPin className="w-4 h-4 mr-1" />
            <span>{selectedMoment.location}</span>
          </div>
        </div>
        <button
          onClick={() => {
            setSelectedMoment(null);
            setCurrentView('moments');
          }}
          className="text-pink-600 hover:text-pink-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Grid Foto */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {selectedMoment.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[3/4]"
            onClick={() => {
              setCurrentIndex(index);
              setCurrentView('carousel');
            }}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="font-semibold">{photo.alt}</p>
                <p className="text-sm mt-1">Klik untuk melihat</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

// Tampilan Carousel untuk melihat foto satu per satu dengan bingkai
const CarouselView = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center h-full w-full max-w-4xl mx-auto"
      >
        {/* Container utama dengan padding lebih kecil */}
        <div className="relative p-2 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow-xl">
          {/* Bingkai luar dengan efek dekoratif tipis */}
          <div className="absolute inset-0 border-2 border-pink-300/40 rounded-lg pointer-events-none"></div>
          
          {/* Container untuk foto dengan bingkai dalam */}
          <div className="relative p-1 bg-white border-4 border-pink-100 rounded-md shadow-inner overflow-hidden">
            {/* Gambar dengan ukuran maksimal */}
            <img 
              src={selectedMoment.photos[currentIndex].src} 
              alt={selectedMoment.photos[currentIndex].alt}
              className="max-h-[80vh] max-w-full object-contain"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
    
    <button 
      onClick={goToPrevious}
      className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-pink-500/80 hover:bg-pink-600/80 backdrop-blur-sm transition-all duration-300 z-20"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    
    <button 
      onClick={goToNext}
      className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-pink-500/80 hover:bg-pink-600/80 backdrop-blur-sm transition-all duration-300 z-20"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
    
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {selectedMoment.photos.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-pink-500 scale-125' : 'bg-white/70 hover:bg-white'
          }`}
        />
      ))}
    </div>
    
    <div className="absolute bottom-16 left-0 right-0 text-center">
      <p className="text-white text-lg font-semibold bg-black/60 inline-block px-4 py-2 rounded-full">
        {selectedMoment.photos[currentIndex].alt}
      </p>
    </div>

    {/* Kembali ke Grid */}
    <button
      onClick={() => setCurrentView('grid')}
      className="absolute top-4 left-4 text-white p-2 rounded-full bg-pink-500/80 hover:bg-pink-600/80 backdrop-blur-sm transition-all duration-300 z-20"
    >
      < ArrowLeft className="w-5 h-5 mr-1" />
    </button>
  </div>
)  // Header Component
const Header = () => (
  <motion.header 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg rounded-t-2xl"
  >
    <div className="container mx-auto px-6 py-4 flex justify-center items-center">
      <div className="flex items-center">
        <Camera className="w-8 h-8 mr-3" />
        <h1 
          className="text-2xl font-bold" 
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Photo Gallery
        </h1>
      </div>
    </div>
  </motion.header>
)

  // Footer Component
  const Footer = () => (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-b-2xl mt-6"
    >
    </motion.footer>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-100/95 to-pink-200/95 z-50 flex flex-col items-center justify-between p-4 overflow-auto"
      onClick={() => setShowGallery(false)}
    >
      {/* Background dengan efek soft */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-pink-300/20"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-pink-400/20"></div>
      
      <button 
        className="absolute top-4 right-4 text-pink-700 p-2 rounded-full bg-white/90 hover:bg-white z-50 transition-all duration-300 shadow-md"
        onClick={() => setShowGallery(false)}
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="relative max-w-6xl w-full flex flex-col min-h-screen">
        <Header />
        
        <div className="flex-1 p-6 mt-2" onClick={e => e.stopPropagation()}>
          {/* Header Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="inline-block mb-3"
            >
              <Heart className="w-10 h-10 text-pink-600 mx-auto" fill="currentColor" />
            </motion.div>
            <h2 className="text-3xl font-display text-pink-800 mb-2" style={{ fontFamily: '"Dancing Script", cursive' }}>Our Memory Album</h2>
            <p className="text-pink-700">A collection of special moments we’ve captured together</p>
          </motion.div>

          {/* Breadcrumb */}
          {selectedMoment && currentView !== 'moments' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center text-sm text-pink-700 mb-6 bg-white/50 py-2 px-4 rounded-lg"
            >
              <button 
                onClick={() => {
                  setSelectedMoment(null);
                  setCurrentView('moments');
                }}
                className="hover:text-pink-900 transition-colors"
              >
                Semua Momen
              </button>
              <ChevronRight className="w-4 h-4 mx-2 text-pink-600" />
              <span className="text-pink-900">{selectedMoment.title}</span>
              {currentView === 'carousel' && (
                <>
                  <ChevronRight className="w-4 h-4 mx-2 text-pink-600" />
                  <span className="text-pink-900">Foto {currentIndex + 1}</span>
                </>
              )}
            </motion.div>
          )}

          {/* Content Area */}
          <div className="bg-white/40 rounded-2xl p-6 border border-white/30 backdrop-blur-sm mb-6">
            {currentView === 'moments' && <MomentsView />}
            {currentView === 'grid' && selectedMoment && <GridView />}
            {currentView === 'carousel' && selectedMoment && <CarouselView />}
          </div>

          {/* Kembali ke Daftar Momen (jika sedang melihat detail momen) */}
          {currentView !== 'moments' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6"
            >
              <button
                onClick={() => {
                  setSelectedMoment(null);
                  setCurrentView('moments');
                }}
                className="text-pink-700 hover:text-pink-900 transition-colors flex items-center justify-center mx-auto bg-white/70 py-2 px-4 rounded-lg"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Kembali ke Semua Momen
              </button>
            </motion.div>
          )}
        </div>
        
        <Footer />
      </div>
    </motion.div>
  )
}

export default PhotoGallery