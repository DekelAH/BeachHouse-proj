'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Patio', href: '#patio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMenuToggle = () => setMenuOpen((prev) => !prev)
  const onNavLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
          scrolled ? 'py-3 bg-navy/90 backdrop-blur-md shadow-xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between max-w-full">
          <a
            href="#"
            className="relative z-10 flex-shrink-0"
            aria-label="The Beach House Café - Home"
          >
            <Image
              src="/logo.png"
              alt="The Beach House Café"
              width={140}
              height={46}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-secondary font-medium text-xs xl:text-sm uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#patio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:block bg-secondary hover:bg-secondary-dark text-navy font-bold px-4 xl:px-6 py-2.5 rounded-full text-xs uppercase tracking-wider xl:tracking-widest transition-colors duration-200 whitespace-nowrap"
          >
            Rent Our Patio
          </motion.a>

          {/* Hamburger button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden relative z-10 p-2 flex flex-col gap-1.5 cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8 px-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onNavLinkClick}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="text-white text-3xl font-heading font-semibold hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#patio"
              onClick={onNavLinkClick}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.07 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 bg-secondary text-navy font-bold px-10 py-4 rounded-full text-base uppercase tracking-widest"
            >
              Rent Our Patio
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
