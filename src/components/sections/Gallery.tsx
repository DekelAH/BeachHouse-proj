'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'

const galleryImages = [
  { id: 1, src: '/images/gallery/cafe-exterior.jpg', alt: 'The Beach House Café exterior at golden hour', tall: true },
  { id: 2, src: '/images/gallery/interior.jpg', alt: 'Café interior with panoramic ocean view', tall: false },
  { id: 3, src: '/images/gallery/barista.jpg', alt: 'Barista crafting a signature latte', tall: false },
  { id: 4, src: '/images/gallery/food-plating.jpg', alt: 'Chef carefully plating a seafood dish', tall: true },
  { id: 5, src: '/images/gallery/sunset-terrace.jpg', alt: 'Breathtaking sunset from the terrace', tall: false },
  { id: 6, src: '/images/gallery/guests.jpg', alt: 'Guests enjoying the sea view over lunch', tall: false },
  { id: 7, src: '/images/gallery/seafood.jpg', alt: 'Fresh daily catch of the sea', tall: true },
  { id: 8, src: '/images/gallery/coffee-art.jpg', alt: 'Award-winning latte art', tall: false },
  { id: 9, src: '/images/gallery/couples-dining.jpg', alt: 'Romantic beachside dinner for two', tall: false },
]

const placeholderColors = [
  'from-primary/40 to-navy/60',
  'from-secondary/40 to-primary/40',
  'from-navy/40 to-primary-dark/60',
  'from-primary/30 to-secondary/50',
  'from-secondary/30 to-navy/50',
  'from-primary-dark/40 to-primary/30',
  'from-navy/50 to-primary/40',
  'from-secondary/50 to-secondary-dark/40',
  'from-primary/40 to-navy/40',
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const onImageClick = (index: number) => setLightboxIndex(index)
  const onLightboxClose = () => setLightboxIndex(null)
  const onPrev = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0))
  const onNext = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0))

  return (
    <section id="gallery" className="py-20 md:py-32 bg-navy">
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
            Captured Moments
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Gallery
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-xl mx-auto text-base md:text-lg">
            Every corner tells a story. Every meal, a memory worth keeping.
          </motion.p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              variants={scaleIn}
              onClick={() => onImageClick(index)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid bg-gradient-to-br ${placeholderColors[index]} ${
                img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onLightboxClose}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            {/* Close */}
            <button
              onClick={onLightboxClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3]"
            >
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${placeholderColors[lightboxIndex]}`}>
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <p className="text-white/70 text-sm text-center mt-3 absolute -bottom-8 left-0 right-0">
                {galleryImages[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === lightboxIndex ? 'bg-secondary w-6' : 'bg-white/40'
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
