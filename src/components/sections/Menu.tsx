'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'
import { categories, menuItems } from '@/lib/menuData'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const onCategoryClick = (cat: string) => setActiveCategory(cat)

  return (
    <section id="menu" className="py-20 md:py-32 bg-sand">
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

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-start md:justify-center scrollbar-none">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryClick(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-navy hover:bg-primary/10 border border-navy/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                {/* Image area */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${item.color}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-secondary text-navy text-xs font-bold px-3 py-1 rounded-full z-10">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-heading text-lg text-navy font-semibold leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-lg flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
