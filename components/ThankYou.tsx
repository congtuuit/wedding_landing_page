'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Instagram, Facebook, Mail, Sparkles, Star } from 'lucide-react';

interface ThankYouProps {
  data: {
    title: string;
    message: string;
    signature: string;
    names: string;
  };
}

export default function ThankYou({ data }: ThankYouProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-sage-50/20 to-blush-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-blush-100/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-tl from-sage-100/20 to-transparent rounded-full blur-3xl"
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-blush-300/40 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-sage-300/40 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-ivory-300/40 rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Decorative Hearts Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-8 h-8 text-blush-300 fill-current" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Sparkles className="w-10 h-10 text-sage-400" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Heart className="w-12 h-12 text-blush-400 fill-current" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [360, 0, 360]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Star className="w-9 h-9 text-sage-300 fill-current" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 20, 0]
              }}
              transition={{ 
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <Heart className="w-8 h-8 text-sage-300 fill-current" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-12 elegant-text"
          >
            {data.title}
          </motion.h2>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 sm:p-12 shadow-2xl border border-white/50 mb-16 max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blush-400 via-sage-400 to-blush-400"></div>
            
            {/* Floating decorations */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-blush-200/50 to-sage-200/50 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-tl from-sage-200/50 to-blush-200/50 rounded-full"
            />

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
              {data.message}
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 mb-16"
          >
            <p className="text-gray-600 font-medium text-lg">
              {data.signature}
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blush-600 via-sage-600 to-blush-600 bg-clip-text cursor-default"
            >
              {data.names}
            </motion.p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-blush-300"></div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-blush-400 fill-current" />
            </motion.div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-blush-300"></div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-8"
          >
            {[
              { icon: Mail, href: "mailto:congtuuit@gmail.com", color: "text-blush-500" },
              { icon: Instagram, href: "#", color: "text-sage-500" },
              { icon: Facebook, href: "#", color: "text-blush-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-white relative overflow-hidden group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br from-blush-400 to-sage-400 rounded-full`}
                />
                <social.icon className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="text-center mt-24 pt-12 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent relative"
      >
        {/* Decorative border */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-blush-300 via-sage-300 to-blush-300"></div>
        
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-sm text-gray-500 font-light cursor-default"
        >
          Made with love for our special day • October 18, 2025
        </motion.p>
        
        {/* Final floating heart */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="flex justify-center mt-4"
        >
          <Heart className="w-4 h-4 text-blush-300 fill-current" />
        </motion.div>
      </motion.div>
    </section>
  );
}