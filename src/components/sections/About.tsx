'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, slideInLeft, slideInRight, stagger } from '@/lib/animations'

const stats = [
  { value: 12, suffix: '+', label: 'Years Open' },
  { value: 50, suffix: 'K+', label: 'Happy Guests' },
  { value: 80, suffix: '+', label: 'Menu Items' },
  { value: 4.9, suffix: '★', label: 'Avg. Rating' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const springCount = useSpring(count, { stiffness: 40, damping: 18 })
  const display = useTransform(springCount, (latest) => {
    if (value % 1 !== 0) return latest.toFixed(1)
    return Math.round(latest).toString()
  })

  useEffect(() => {
    if (isInView) count.set(value)
  }, [isInView, count, value])

  return (
    <div ref={ref} className="flex items-start justify-center">
      <motion.span className="font-heading text-4xl md:text-5xl font-bold text-primary leading-none">
        {display}
      </motion.span>
      <span className="font-heading text-2xl md:text-3xl font-bold text-secondary mt-1 ml-0.5">
        {suffix}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-sand overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/30 to-navy/50">
              <Image
                src="/images/gallery/cafe-exterior.jpg"
                alt="The Beach House Café terrace and team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-white/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 right-2 sm:right-6 bg-secondary text-navy p-5 rounded-2xl shadow-xl"
            >
              <p className="font-heading text-3xl font-bold leading-none">12+</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1">Years of Joy</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm font-medium"
            >
              Our Story
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl text-navy leading-tight"
            >
              Where the Shore
              <br />
              <span className="text-primary italic">Meets the Table</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy/70 text-base md:text-lg leading-relaxed">
              Born from a love of the sea and a passion for fresh, honest food, The Beach House
              Café has been a beloved coastal gathering place for over a decade. We source our
              ingredients daily from local fishermen and nearby farms, so every bite carries the
              soul of the shore.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-navy/70 text-base md:text-lg leading-relaxed">
              Whether you're watching the sunrise over your morning coffee or sharing a sunset
              dinner with loved ones, our doors — and our hearts — are always open.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 gap-6 mt-4 pt-6 border-t border-navy/10"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-navy/60 text-xs uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
