'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'
import { menuItems } from '@/lib/menuData'

export default function Menu() {
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

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {menuItems.map((item) => (
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
      </div>
    </section>
  )
}
