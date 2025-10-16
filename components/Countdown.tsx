'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Heart, Clock, Sparkles } from 'lucide-react';

interface CountdownProps {
  data: {
    title: string;
    targetDate: string;
  };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ data }: CountdownProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const targetDate = new Date(data.targetDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data.targetDate]);

  const TimeUnit = ({ value, label, index }: { value: number; label: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: -90 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: 10,
          boxShadow: "0 20px 40px rgba(217, 119, 148, 0.2)"
        }}
        className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 mb-4 min-w-[120px] sm:min-w-[140px] overflow-hidden group-hover:shadow-2xl transition-all duration-500"
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(217, 119, 148, 0.1), rgba(156, 175, 136, 0.1))",
              "linear-gradient(45deg, rgba(156, 175, 136, 0.1), rgba(217, 119, 148, 0.1))",
              "linear-gradient(45deg, rgba(217, 119, 148, 0.1), rgba(156, 175, 136, 0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-3xl"
        />

        {/* Floating sparkles */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5
          }}
          className="absolute top-2 right-2 text-blush-300"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <motion.div
          key={value} // Key change triggers animation
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-br from-blush-600 to-sage-600 bg-clip-text mb-2"
        >
          {mounted ? value.toString().padStart(2, '0') : '00'}
        </motion.div>

        {/* Pulse effect for seconds */}
        {label === 'Seconds' && (
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity
            }}
            className="absolute inset-0 bg-gradient-to-br from-blush-400/20 to-sage-400/20 rounded-3xl"
          />
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className="text-gray-600 font-semibold text-sm sm:text-base uppercase tracking-wider"
      >
        {label}
      </motion.p>
    </motion.div>
  );

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-sage-50/30 via-blush-50/20 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-blush-100/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-tl from-sage-100/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-8 h-8 text-blush-400" />
            </motion.div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
            <Heart className="w-6 h-6 text-blush-400 fill-current heartbeat" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-blush-300 to-transparent"></div>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-sage-400" />
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
        </motion.div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mb-16">
          <TimeUnit value={timeLeft.days} label="Days" index={0} />
          <TimeUnit value={timeLeft.hours} label="Hours" index={1} />
          <TimeUnit value={timeLeft.minutes} label="Minutes" index={2} />
          <TimeUnit value={timeLeft.seconds} label="Seconds" index={3} />
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush-400 via-sage-400 to-blush-400"></div>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              Every moment brings us closer to our forever. We can't wait to celebrate this special day with you!
            </p>

            {/* Floating hearts */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -left-2 text-blush-300"
            >
              <Heart className="w-6 h-6 fill-current opacity-60" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-2 -right-2 text-sage-300"
            >
              <Heart className="w-5 h-5 fill-current opacity-60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}