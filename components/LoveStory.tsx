'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface LoveStoryProps {
  data: {
    title: string;
    subtitle: string;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
}

export default function LoveStory({ data }: LoveStoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="love-story" 
      ref={ref} 
      className="relative section-padding bg-gradient-to-b from-white via-ivory-50/30 to-blush-50/20 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-blush-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-gradient-to-tl from-sage-100/30 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-blush-400" />
            </motion.div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
            <Heart className="w-5 h-5 text-blush-400 fill-current heartbeat" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-blush-300 to-transparent"></div>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-sage-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 elegant-text"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            {data.subtitle}
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-blush-200 via-sage-200 to-blush-200 rounded-full shadow-sm"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {data.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                  }}
                  className="flex-1 text-center lg:text-left relative"
                >
                  <div className={`max-w-lg mx-auto lg:mx-0 ${
                    index % 2 === 0 ? 'lg:ml-auto lg:text-right' : ''
                  }`}>
                    {/* Year Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blush-100 to-sage-100 text-blush-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-md"
                    >
                      <Heart className="w-3 h-3 fill-current" />
                      {item.year}
                      <Sparkles className="w-3 h-3" />
                    </motion.div>

                    {/* Story Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden"
                    >
                      {/* Decorative gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush-400 via-sage-400 to-blush-400"></div>
                      
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 elegant-text">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {item.description}
                      </p>

                      {/* Floating decoration */}
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blush-200 to-sage-200 rounded-full opacity-60"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                  className="relative lg:flex-shrink-0 z-10"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(217, 119, 148, 0.4)",
                          "0 0 0 20px rgba(217, 119, 148, 0)",
                          "0 0 0 0 rgba(217, 119, 148, 0.4)"
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="w-6 h-6 bg-gradient-to-br from-blush-400 to-blush-500 rounded-full border-4 border-white shadow-lg relative z-10"
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="absolute inset-0 w-6 h-6 bg-blush-300 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center mt-20"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blush-300"></div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-6 h-6 text-blush-400 fill-current" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blush-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}