'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'
import { fadeInUp, stagger } from '@/lib/animations'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <VideoBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          <motion.p
            variants={fadeInUp}
            className="text-secondary text-xs sm:text-sm uppercase tracking-[0.35em] font-medium"
          >
            Welcome to
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight"
          >
            The Beach House
            <br />
            <span className="text-secondary italic">Café</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Fresh food, stunning coastal views, and warm hospitality — right where the sea meets
            the shore.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary hover:bg-secondary-dark text-navy font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300 text-center"
            >
              View Our Menu
            </motion.a>
            <motion.a
              href="#patio"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 text-center"
            >
              Rent Our Patio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  )
}
