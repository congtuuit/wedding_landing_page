'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Send, CheckCircle, User, Mail, Users, MessageCircle, Calendar } from 'lucide-react';

interface RSVPProps {
  data: {
    title: string;
    subtitle: string;
    formTitle: string;
    fields: {
      name: string;
      email: string;
      guests: string;
      attendance: string;
      message: string;
    };
    submitText: string;
    deadline: string;
  };
}

export default function RSVP({ data }: RSVPProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-padding bg-gradient-to-b from-blush-50/30 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-200/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden"
          >
            {/* Success gradient line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sage-400 via-blush-400 to-sage-400"></div>
            
            {/* Floating success elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 text-sage-300"
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CheckCircle className="w-20 h-20 text-sage-500 mx-auto mb-8" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-4xl font-bold text-gray-800 mb-6 elegant-text"
            >
              Thank You!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-600 text-xl leading-relaxed mb-10 font-light"
            >
              Your RSVP has been received successfully. We're so excited to celebrate with you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Heart className="w-6 h-6 text-blush-400 fill-current heartbeat" />
              <span className="text-transparent bg-gradient-to-r from-blush-600 to-sage-600 bg-clip-text font-semibold text-lg">
                Linh & Nam
              </span>
              <Heart className="w-6 h-6 text-sage-400 fill-current heartbeat" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" ref={ref} className="section-padding bg-gradient-to-b from-blush-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-br from-blush-200/20 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-sage-200/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></div>
            <Heart className="w-6 h-6 text-blush-400 fill-current heartbeat" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-blush-300 to-transparent"></div>
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
            className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-light max-w-2xl mx-auto"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blush-100 to-sage-100 text-blush-700 px-6 py-3 rounded-full font-semibold shadow-md"
          >
            <Calendar className="w-4 h-4" />
            {data.deadline}
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 relative overflow-hidden"
        >
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blush-400 via-sage-400 to-blush-400"></div>
          
          {/* Floating decorations */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-blush-200/60 to-sage-200/60 rounded-full"
          />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-serif text-3xl font-semibold text-gray-800 mb-10 text-center elegant-text"
          >
            {data.formTitle}
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <User className="w-4 h-4 text-blush-500" />
                {data.fields.name} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blush-200 focus:border-blush-400 transition-all duration-300 text-lg font-light placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Mail className="w-4 h-4 text-sage-500" />
                {data.fields.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-sage-200 focus:border-sage-400 transition-all duration-300 text-lg font-light placeholder-gray-400"
                placeholder="Enter your email address"
              />
            </motion.div>

            {/* Attendance Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label htmlFor="attendance" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Heart className="w-4 h-4 text-blush-500 fill-current" />
                {data.fields.attendance} *
              </label>
              <select
                id="attendance"
                name="attendance"
                required
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blush-200 focus:border-blush-400 transition-all duration-300 text-lg font-light bg-white"
              >
                <option value="yes">Yes, I'll be there! 💕</option>
                <option value="no">Sorry, I can't make it 😢</option>
              </select>
            </motion.div>

            {/* Number of Guests */}
            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="guests" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Users className="w-4 h-4 text-sage-500" />
                  {data.fields.guests} *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-sage-200 focus:border-sage-400 transition-all duration-300 text-lg font-light bg-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </motion.div>
            )}

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <MessageCircle className="w-4 h-4 text-blush-500" />
                {data.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blush-200 focus:border-blush-400 transition-all duration-300 resize-none text-lg font-light placeholder-gray-400"
                placeholder="Share your excitement or special wishes..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(217, 119, 148, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full elegant-button bg-gradient-to-r from-blush-500 via-blush-600 to-sage-500 text-white py-5 px-8 rounded-2xl font-semibold text-xl hover:from-blush-600 hover:via-blush-700 hover:to-sage-600 focus:ring-4 focus:ring-blush-200 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl relative overflow-hidden"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {data.submitText}
                    <Heart className="w-5 h-5 fill-current" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}