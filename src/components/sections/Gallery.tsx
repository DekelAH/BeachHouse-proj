'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, stagger } from '@/lib/animations'

const galleryImages = [
  { id: 1, src: '/images/gallery/cafe_exterior_02.jpg', alt: 'The Beach House Café welcoming entrance with outdoor seating and tropical plants' },
  { id: 2, src: '/images/gallery/cafe_interior_01.jpg', alt: 'Café interior featuring a custom surfboard display and beach mural' },
  { id: 3, src: '/images/gallery/cafe_exterior_01.jpg', alt: 'Scenic waterfront pathway leading to the café with ocean views' },
  { id: 4, src: '/images/gallery/cafe_interior_02.jpg', alt: 'The Beach House Café coffee bar with professional espresso machine' },
  { id: 5, src: '/images/gallery/cafe_interior_03.jpg', alt: 'Bright lounge and dining area with coastal décor and natural light' },
  { id: 6, src: '/images/gallery/cafe_exterior_03.jpg', alt: 'The Beach House Café front entrance with outdoor patio seating' },
  { id: 7, src: '/images/gallery/cafe_interior_04.jpg', alt: 'Relaxed coastal lounge with navy blue sofas and rattan pendant lights' },
]

const placeholderColors = [
  'from-primary/40 to-navy/60',
  'from-navy/40 to-primary-dark/60',
  'from-secondary/40 to-primary/40',
  'from-secondary/30 to-navy/50',
  'from-primary/30 to-secondary/50',
  'from-primary-dark/40 to-primary/30',
  'from-navy/50 to-primary/40',
]

function ExpandIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
    </svg>
  )
}

interface GalleryImageProps {
  img: typeof galleryImages[0]
  index: number
  onClick: (index: number) => void
  sizes: string
  priority?: boolean
  className?: string
}

function GalleryTile({ img, index, onClick, sizes, priority = false, className = '' }: GalleryImageProps) {
  return (
    <motion.div
      variants={fadeInUp}
      onClick={() => onClick(index)}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-500" />
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <div className="bg-white/15 backdrop-blur-md rounded-full p-2 border border-white/20">
          <ExpandIcon />
        </div>
      </div>
    </motion.div>
  )
}

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

        {/* Editorial Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {/* Top row: Feature + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:h-[500px]">
            {/* Feature image */}
            <GalleryTile
              img={galleryImages[0]}
              index={0}
              onClick={onImageClick}
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
              className="aspect-[16/10] md:aspect-auto md:col-span-2 md:h-full"
            />

            {/* Two stacked portraits */}
            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-3 md:h-full">
              <GalleryTile
                img={galleryImages[1]}
                index={1}
                onClick={onImageClick}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="aspect-[4/3] md:aspect-auto md:h-full"
              />
              <GalleryTile
                img={galleryImages[2]}
                index={2}
                onClick={onImageClick}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="aspect-[4/3] md:aspect-auto md:h-full"
              />
            </div>
          </div>

          {/* Bottom row: 4 equal images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {galleryImages.slice(3).map((img, i) => (
              <GalleryTile
                key={img.id}
                img={img}
                index={i + 3}
                onClick={onImageClick}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="aspect-[4/3]"
              />
            ))}
          </div>
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
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === lightboxIndex ? 'bg-secondary w-6' : 'bg-white/40 w-2'
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
