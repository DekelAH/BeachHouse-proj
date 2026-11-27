'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'
import { menuItems, type MenuCategory } from '@/lib/menuData'
import { TOAST_ORDER_URL } from '@/lib/constants'

const CATEGORIES: MenuCategory[] = ['Breakfast', 'Lunch', 'Pizza', 'Pastries & Desserts']

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('Breakfast')
  const filtered = menuItems.filter((item) => item.category === activeTab)

  return (
    <section id="menu" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.p
            variants={fadeInUp}
            className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-3"
          >
            What We Serve
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-navy mb-4"
          >
            Our Menu
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-navy/60 max-w-xl mx-auto text-base md:text-lg">
            Fresh ingredients, locally sourced, lovingly prepared with the sea breeze as our
            secret ingredient.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-navy text-secondary shadow-md'
                  : 'bg-white text-navy/55 border border-navy/15 hover:border-navy/40 hover:text-navy'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-navy -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards — re-animates on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${item.color}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-secondary text-navy text-xs font-bold px-3 py-1 rounded-full z-10">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="p-5">
                  <h3 className="font-heading text-lg text-navy font-semibold leading-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Order CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-navy/60 text-base md:text-lg"
          >
            Ready to eat? Order for pickup.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            href={TOAST_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-secondary hover:bg-secondary-dark text-navy font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300"
          >
            Order Online
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
