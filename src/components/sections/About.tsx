'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, slideInLeft, stagger } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-sand overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                src="/images/gallery/about_us.jpg"
                alt="The Beach House Café"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-4 border-2 border-white/20 rounded-2xl pointer-events-none" />
            </div>
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
              Tucked along the waterfront, The Beach House Café was built on one simple belief -
              that good food tastes better with a view. From our first espresso served to full tables of families watching the sun melt into the water,
              we have grown into something far more than a café.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-navy/70 text-base md:text-lg leading-relaxed">
              We share our home with Lifeways Indigenous Artistry, a gallery celebrating the living
              culture and craftsmanship of the local community. This partnership shapes who we are -
              a place where people gather, stories are exchanged, and every visit feels like coming
              back to something real.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-navy/70 text-base md:text-lg leading-relaxed">
              Our kitchen draws from many traditions. You'll find freshly baked pastries alongside
              shawarma plates, salmon bagels, and homemade baklava - a menu as open and welcoming
              as the coastline outside our windows. Everything is made with care, and the sea is
              never far from sight.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-navy/70 text-base md:text-lg leading-relaxed">
              Whether you stop in for a morning coffee, a long lunch on the patio, or a quiet dinner
              as the water turns gold - we're glad you found us.
            </motion.p>

            {/* Values */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 pt-4 border-t border-navy/10"
            >
              {['Community', 'Craft', 'Coast'].map((value, i) => (
                <div key={value} className="flex items-center gap-6">
                  <span className="text-navy font-heading text-sm uppercase tracking-[0.2em] font-semibold">
                    {value}
                  </span>
                  {i < 2 && <span className="text-primary/40 text-lg">·</span>}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
