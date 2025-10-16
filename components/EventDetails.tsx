'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Clock, Shirt, ExternalLink, Navigation } from 'lucide-react';

interface EventDetailsProps {
  data: {
    title: string;
    ceremony: {
      title: string;
      dateTime: string;
      location: string;
      address: string;
      mapUrl: string;
    };
    reception: {
      title: string;
      dateTime: string;
      location: string;
      address: string;
      mapUrl: string;
    };
    dressCode: string;
    dressCodeDescription: string;
  };
}

export default function EventDetails({ data }: EventDetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const EventCard = ({ event, index }: { event: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)"
      }}
      className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blush-400 via-sage-400 to-blush-400"></div>
      
      {/* Floating decoration */}
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
        className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blush-100 to-sage-100 rounded-full opacity-50"
      />

      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className="font-serif text-3xl font-semibold text-gray-800 mb-8 text-center elegant-text"
      >
        {event.title}
      </motion.h3>
      
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="flex items-start gap-4 group/item"
        >
          <div className="bg-gradient-to-br from-blush-100 to-blush-200 p-3 rounded-full group-hover/item:scale-110 transition-transform duration-300">
            <Calendar className="w-5 h-5 text-blush-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-lg">{event.dateTime}</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
          className="flex items-start gap-4 group/item"
        >
          <div className="bg-gradient-to-br from-sage-100 to-sage-200 p-3 rounded-full group-hover/item:scale-110 transition-transform duration-300">
            <MapPin className="w-5 h-5 text-sage-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-lg">{event.location}</p>
            <p className="text-gray-600">{event.address}</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
          className="pt-4"
        >
          <motion.a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="elegant-button inline-flex items-center gap-3 bg-gradient-to-r from-blush-500 to-sage-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg group/button"
          >
            <Navigation className="w-4 h-4 group-hover/button:rotate-12 transition-transform duration-300" />
            View on Maps
            <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-blush-50/20 via-white to-sage-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blush-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-bl from-sage-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 elegant-text"
          >
            {data.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-blush-400 to-sage-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Event Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <EventCard event={data.ceremony} index={0} />
          <EventCard event={data.reception} index={1} />
        </div>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
          }}
          className="bg-gradient-to-br from-blush-50/80 via-white/80 to-sage-50/80 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-white/50 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-blush-200/50 to-sage-200/50 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-tl from-sage-200/50 to-blush-200/50 rounded-full"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="bg-gradient-to-br from-blush-100 to-sage-100 p-4 rounded-full">
              <Shirt className="w-8 h-8 text-blush-600" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-gray-800 elegant-text">
              Dress Code
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blush-600 to-sage-600 bg-clip-text mb-4"
          >
            {data.dressCode}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg font-light"
          >
            {data.dressCodeDescription}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}