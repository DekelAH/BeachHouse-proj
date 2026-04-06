'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, stagger } from '@/lib/animations'

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Absolutely magical experience. The grilled salmon was the best I\'ve ever had, and the sunset view from the terrace took my breath away. Will be back every time I visit!',
    avatar: 'SM',
    date: 'January 2026',
  },
  {
    id: 2,
    name: 'James Kowalski',
    location: 'New York, USA',
    rating: 5,
    text: 'The Beach House Café is a hidden gem. Staff were incredibly warm, the seafood pasta was divine, and the atmosphere is unmatched. Perfect for a romantic dinner.',
    avatar: 'JK',
    date: 'December 2025',
  },
  {
    id: 3,
    name: 'Anika Sharma',
    location: 'London, UK',
    rating: 5,
    text: 'I cannot stop thinking about the Sunset Cocktail and the Açaí Bowl. Fresh, vibrant, and utterly delicious. The ocean breeze while dining is an unforgettable bonus!',
    avatar: 'AS',
    date: 'February 2026',
  },
  {
    id: 4,
    name: 'Marco Delgado',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'We celebrated our anniversary here and it was perfect in every way. The team went above and beyond to make it special. The lobster roll is worth the flight alone!',
    avatar: 'MD',
    date: 'January 2026',
  },
  {
    id: 5,
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'Discovered this café by chance during a beach walk and it became the highlight of my trip. Incredible food, beautiful setting, and the cold brew is genuinely outstanding.',
    avatar: 'YT',
    date: 'March 2026',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-secondary' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [])

  const onPrev = () => {
    stopAutoPlay()
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
    startAutoPlay()
  }

  const onNext = () => {
    stopAutoPlay()
    setDirection(1)
    setCurrent((prev) => (prev + 1) % reviews.length)
    startAutoPlay()
  }

  const onDotClick = (index: number) => {
    stopAutoPlay()
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    startAutoPlay()
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.3 } }),
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-3"
          >
            What Our Guests Say
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-navy mb-4"
          >
            Guest Reviews
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="overflow-hidden rounded-3xl bg-navy shadow-2xl px-6 sm:px-14 py-10 sm:py-12 flex flex-col">
            {/* Quote icon */}
            <svg
              className="w-10 h-10 text-secondary/40 mb-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.9c.1-.6.5-2 2.1-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6.1c.1-.6.5-2 2.1-2V8z" />
            </svg>

            <div className="min-h-[280px] sm:min-h-[220px] flex flex-col justify-center relative">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex flex-col justify-center gap-5"
                >
                <StarRating rating={reviews[current].rating} />
                <p className="text-white/90 text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {reviews[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{reviews[current].name}</p>
                    <p className="text-white/50 text-sm">
                      {reviews[current].location} · {reviews[current].date}
                    </p>
                  </div>
                </div>
              </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={onPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white border border-navy/10 text-navy flex items-center justify-center shadow hover:shadow-md transition-shadow cursor-pointer"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onDotClick(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'w-8 bg-secondary' : 'w-2 bg-navy/20'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white border border-navy/10 text-navy flex items-center justify-center shadow hover:shadow-md transition-shadow cursor-pointer"
              aria-label="Next review"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
