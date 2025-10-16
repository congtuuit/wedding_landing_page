'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Expand } from 'lucide-react';

interface GalleryProps {
  data: {
    title: string;
    images: string[];
  };
}

export default function Gallery({ data }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? data.images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === data.images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section ref={ref} className="section-padding bg-gradient-to-b from-white via-ivory-50/20 to-blush-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/3 -left-20 w-40 h-40 bg-gradient-to-br from-blush-200/20 to-transparent rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 -right-20 w-32 h-32 bg-gradient-to-bl from-sage-200/20 to-transparent rounded-full blur-2xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
              <Heart className="w-5 h-5 text-blush-400 fill-current heartbeat" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-blush-300 to-transparent"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 elegant-text"
            >
              {data.title}
            </motion.h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  z: 50
                }}
                className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    whileHover={{ filter: "brightness(1.1) saturate(1.1)" }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover content */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                    >
                      <Expand className="w-6 h-6 text-gray-800" />
                    </motion.div>
                  </motion.div>

                  {/* Decorative corner elements */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-blush-300/60 to-sage-300/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Image number badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={data.images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Image glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-blush-500/20"></div>
            </motion.div>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3"
            >
              <Heart className="w-4 h-4 text-blush-300 fill-current" />
              <span className="text-white text-sm font-medium">
                {selectedImage + 1} of {data.images.length}
              </span>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blush-300/40 rounded-full"
            />
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-sage-300/40 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}