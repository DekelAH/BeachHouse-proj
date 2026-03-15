'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'
import { menuItems } from '@/lib/menuData'

const patioImages = [
  { src: '/images/patio/patio-1.png', alt: 'Beachfront patio with ocean views and string lights' },
  { src: '/images/patio/patio-2.png', alt: 'Dining setup with fresh seafood and cocktails' },
  { src: '/images/patio/patio-3.png', alt: 'Evening ambiance with warm lighting at sunset' },
]

const MAX_GUESTS = 20

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  date: z.string().min(1, 'Please select a date'),
  guests: z.number().min(1, 'At least 1 guest is required').max(MAX_GUESTS),
})

type FormData = z.infer<typeof schema>
type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function PatioRent() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [activeGuestTab, setActiveGuestTab] = useState(0)
  const [guestSelections, setGuestSelections] = useState<Record<number, number[]>>({})
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 0 },
  })

  const guestCount = watch('guests') || 0

  const toggleMenuItem = (guestIndex: number, itemId: number) => {
    setGuestSelections((prev) => {
      const current = prev[guestIndex] || []
      const updated = current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
      return { ...prev, [guestIndex]: updated }
    })
  }

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/patio-rent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, guestSelections }),
      })
      if (res.ok) {
        setSubmitState('success')
        reset()
        setGuestSelections({})
        setActiveGuestTab(0)
      } else {
        setSubmitState('error')
      }
    } catch {
      setSubmitState('error')
    }
    setTimeout(() => setSubmitState('idle'), 5000)
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-navy placeholder:text-navy/40 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/40 ${
      hasError
        ? 'border-red-400 bg-red-50 focus:border-red-400'
        : 'border-navy/15 bg-white focus:border-primary'
    }`

  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <section id="patio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-secondary uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-3"
          >
            Private Events
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-navy mb-4"
          >
            Rent Our Patio
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-navy/60 max-w-xl mx-auto text-base md:text-lg">
            Host your next gathering on our stunning beachfront patio. Choose your date, invite your
            guests, and pre-select meals from our menu.
          </motion.p>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {patioImages.map((img, i) => (
              <motion.div
                key={img.src}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveImageIndex(i)}
                className={`relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer ring-2 transition-all duration-300 ${
                  activeImageIndex === i
                    ? 'ring-primary shadow-xl scale-[1.02]'
                    : 'ring-transparent hover:shadow-lg'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-sand rounded-3xl p-6 sm:p-10 shadow-lg border border-navy/5 flex flex-col gap-6"
          >
            {/* Contact fields row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="patio-name" className="block text-navy font-medium text-sm mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <motion.input
                  id="patio-name"
                  type="text"
                  placeholder="Your full name"
                  {...register('name')}
                  animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className={inputClass(!!errors.name)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="patio-email" className="block text-navy font-medium text-sm mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <motion.input
                  id="patio-email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  animate={errors.email ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="patio-phone" className="block text-navy font-medium text-sm mb-1.5">
                  Phone <span className="text-navy/40 font-normal">(optional)</span>
                </label>
                <input
                  id="patio-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register('phone')}
                  className={inputClass(false)}
                />
              </div>
              <div>
                <label htmlFor="patio-date" className="block text-navy font-medium text-sm mb-1.5">
                  Date <span className="text-red-400">*</span>
                </label>
                <motion.input
                  id="patio-date"
                  type="date"
                  min={todayStr}
                  {...register('date')}
                  animate={errors.date ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className={inputClass(!!errors.date)}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="patio-guests" className="block text-navy font-medium text-sm mb-1.5">
                  Number of Guests <span className="text-red-400">*</span>
                </label>
                <motion.input
                  id="patio-guests"
                  type="number"
                  min={1}
                  max={MAX_GUESTS}
                  placeholder="e.g. 4"
                  {...register('guests', { valueAsNumber: true })}
                  animate={errors.guests ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className={inputClass(!!errors.guests)}
                />
                {errors.guests && (
                  <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
                )}
              </div>
            </div>

            {/* Per-guest food selection */}
            <AnimatePresence>
              {guestCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2">
                    <p className="text-navy font-medium text-sm mb-3">
                      Select meals for each guest
                    </p>

                    {/* Guest tabs */}
                    <div className="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none">
                      {Array.from({ length: Math.min(guestCount, MAX_GUESTS) }, (_, i) => (
                        <motion.button
                          key={i}
                          type="button"
                          onClick={() => setActiveGuestTab(i)}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                            activeGuestTab === i
                              ? 'bg-primary text-white shadow-lg'
                              : 'bg-white text-navy hover:bg-primary/10 border border-navy/10'
                          }`}
                        >
                          Guest {i + 1}
                          {(guestSelections[i]?.length ?? 0) > 0 && (
                            <span className="ml-1.5 bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">
                              {guestSelections[i].length}
                            </span>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Menu items for active guest */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeGuestTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {menuItems.map((item) => {
                          const selected = guestSelections[activeGuestTab]?.includes(item.id) ?? false
                          return (
                            <motion.button
                              key={item.id}
                              type="button"
                              onClick={() => toggleMenuItem(activeGuestTab, item.id)}
                              whileTap={{ scale: 0.97 }}
                              className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                                selected
                                  ? 'border-primary bg-primary/5 shadow-sm'
                                  : 'border-navy/10 bg-white hover:border-primary/30'
                              }`}
                            >
                              {/* Checkbox indicator */}
                              <div
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                  selected
                                    ? 'bg-primary border-primary'
                                    : 'border-navy/20 bg-white'
                                }`}
                              >
                                {selected && (
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center gap-2">
                                  <span className="font-heading text-sm text-navy font-semibold truncate">
                                    {item.name}
                                  </span>
                                  <span className="text-primary font-bold text-sm flex-shrink-0">
                                    {item.price}
                                  </span>
                                </div>
                                <p className="text-navy/50 text-xs truncate">{item.description}</p>
                              </div>
                            </motion.button>
                          )
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={submitState === 'loading'}
              whileHover={submitState === 'idle' ? { scale: 1.02 } : {}}
              whileTap={submitState === 'idle' ? { scale: 0.98 } : {}}
              className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                submitState === 'success'
                  ? 'bg-green-500 text-white'
                  : submitState === 'error'
                  ? 'bg-red-500 text-white'
                  : submitState === 'loading'
                  ? 'bg-primary/60 text-white cursor-wait'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              {submitState === 'loading'
                ? 'Sending...'
                : submitState === 'success'
                ? '✓ Request Sent!'
                : submitState === 'error'
                ? 'Something went wrong — try again'
                : 'Submit Patio Rental Request'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
