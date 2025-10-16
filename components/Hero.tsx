'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Calendar, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

interface HeroProps {
  data: {
    coupleName: string;
    weddingDate: string;
    backgroundImage: string;
    ctaText: string;
    subtitle: string;
  };
}

export default function Hero({ data }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    rsvpSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#love-story');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${data.backgroundImage})`,
          y
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blush-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-sage-300 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-ivory-300 rounded-full opacity-50"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Subtitle with elegant animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60"></div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-4 h-4 text-white/80 fill-current" />
              </motion.div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            <p className="text-sm sm:text-base font-medium text-white/90 tracking-[0.2em] uppercase font-sans">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Couple Names with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none elegant-text"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-block"
            >
              {data.coupleName.split(' & ')[0]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-block mx-4 text-blush-300"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="inline-block"
            >
              {data.coupleName.split(' & ')[1]}
            </motion.span>
          </motion.h1>

          {/* Animated Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Heart className="w-12 h-12 text-blush-300 fill-current drop-shadow-lg" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-12 h-12"
              >
                <Heart className="w-full h-full text-blush-200 fill-current" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Wedding Date with elegant styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-full px-8 py-4 inline-flex items-center gap-3 text-white/95 backdrop-blur-md">
              <Calendar className="w-5 h-5 text-blush-300" />
              <p className="text-lg sm:text-xl font-medium tracking-wide font-sans">
                {data.weddingDate}
              </p>
            </div>
          </motion.div>

          {/* CTA Button with advanced hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToRSVP}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(217, 119, 148, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group elegant-button bg-gradient-to-r from-blush-500 to-blush-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {data.ctaText}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blush-400 to-blush-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}