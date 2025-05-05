"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoData } from '../data/videos';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoCarouselProps {
  videos: VideoData[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Ekran boyutuna göre sayfa başına gösterilecek video sayısını hesapla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // İlk yükleme
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.max(1, Math.ceil(videos.length / itemsPerPage));

  // Şu anda görüntülenen videoları hesapla
  const currentVideos = () => {
    const startIndex = currentPage * itemsPerPage;
    return videos.slice(startIndex, startIndex + itemsPerPage);
  };

  // Sonraki sayfaya geç
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Önceki sayfaya geç
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Belirli bir sayfaya git
  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12">
      <div className="relative">
        {/* Prev Button - Left Side */}
        {totalPages > 1 && (
          <button
            onClick={prevPage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-600/80 hover:bg-purple-700 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-purple-400/30"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        <div ref={carouselRef} className="w-full overflow-hidden px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`
              }}
            >
              {currentVideos().map((video) => (
                <div
                  key={video.id}
                  className="p-2 transition-all duration-300 h-full"
                >
                  <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/40 rounded-xl overflow-hidden border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 group h-full flex flex-col">
                    <div className="aspect-video relative flex-grow" style={{ minHeight: "300px" }}>
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-5 h-16 flex items-center">
                      <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors truncate overflow-hidden whitespace-nowrap" title={video.title}>{video.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Next Button - Right Side */}
        {totalPages > 1 && (
          <button
            onClick={nextPage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-600/80 hover:bg-purple-700 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-purple-400/30"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Pagination dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-2.5 h-2.5 mx-1.5 rounded-full transition-all duration-300 ${
                currentPage === idx
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCarousel; 