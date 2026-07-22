'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { fadeInUp, stagger, scaleIn } from '@/lib/animations'

const patioImages = [
  { src: '/images/patio/patio09.jpeg', alt: 'Private patio dining tables overlooking the ocean' },
  { src: '/images/patio/patio10.jpeg', alt: 'Elegant oceanfront patio table set for a private event' },
  { src: '/images/patio/patio08.jpeg', alt: 'Formal outdoor dining table prepared for patio guests' },
  { src: '/images/patio/patio07.jpeg', alt: 'Catered buffet spread beside the beach' },
  { src: '/images/patio/patio05.jpeg', alt: 'Artisan charcuterie board served with an ocean view' },
  { src: '/images/patio/patio01.jpeg', alt: 'Abundant charcuterie and appetizer spread on the patio' },
  { src: '/images/patio/patio02.jpeg', alt: 'Fresh falafel platter prepared for a private gathering' },
  { src: '/images/patio/patio03.jpeg', alt: 'Decorative hummus platter with lemon and herbs' },
  { src: '/images/patio/patio04.jpeg', alt: 'Grilled kebabs and vegetables served for patio dining' },
  { src: '/images/patio/patio06.jpeg', alt: 'Grilled chicken and saffron rice buffet dishes' },
]

const patioImagePositions = [
  'lg:col-start-1 lg:row-start-1',
  'lg:col-start-2 lg:row-start-1',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-1 lg:row-start-2',
  'lg:col-start-3 lg:row-start-2',
  'lg:col-start-1 lg:row-start-3',
  'lg:col-start-3 lg:row-start-3',
  'lg:col-start-1 lg:row-start-4',
  'lg:col-start-2 lg:row-start-4',
  'lg:col-start-3 lg:row-start-4',
]

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number').optional().or(z.literal('')),
  date: z.string().min(1, 'Please select a date'),
})

type FormData = z.infer<typeof schema>
type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function PatioRent() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', date: '' },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/patio-rent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitState('success')
        reset()
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

  const [todayStr] = useState(() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })

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
            Host your next gathering on our stunning beachfront patio. Share your contact details and
            preferred date, and our team will help plan the rest.
          </motion.p>
        </motion.div>

        {/* Patio images surrounding the centered form */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(380px,1.1fr)_minmax(0,1fr)] lg:grid-rows-[14rem_14rem_14rem_14rem] lg:gap-5 xl:gap-6"
        >
          <div className="contents">
            {patioImages.slice(0, 3).map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveImageIndex(i)}
                aria-label={`Select patio photo ${i + 1}: ${img.alt}`}
                aria-pressed={activeImageIndex === i}
                className={`relative h-56 overflow-hidden rounded-2xl shadow-md ring-2 transition-all duration-300 sm:h-64 lg:h-full ${patioImagePositions[i]} ${
                  activeImageIndex === i
                    ? 'ring-primary shadow-xl'
                    : 'ring-transparent hover:shadow-lg'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.button>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:h-full"
          >
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-sand rounded-3xl p-6 sm:p-8 shadow-lg border border-navy/5 flex flex-col gap-6 lg:h-full lg:justify-center"
          >
            {/* Contact fields row */}
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="patio-name" className="block text-navy font-medium text-sm mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <motion.div animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}} transition={{ duration: 0.3 }}>
                  <input
                    id="patio-name"
                    type="text"
                    placeholder="Your full name"
                    {...register('name')}
                    className={inputClass(!!errors.name)}
                  />
                </motion.div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="patio-email" className="block text-navy font-medium text-sm mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <motion.div animate={errors.email ? { x: [-4, 4, -4, 4, 0] } : {}} transition={{ duration: 0.3 }}>
                  <input
                    id="patio-email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    className={inputClass(!!errors.email)}
                  />
                </motion.div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="patio-phone" className="block text-navy font-medium text-sm mb-1.5">
                  Phone <span className="text-navy/40 font-normal">(optional)</span>
                </label>
                <motion.div animate={errors.phone ? { x: [-4, 4, -4, 4, 0] } : {}} transition={{ duration: 0.3 }}>
                  <input
                    id="patio-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register('phone')}
                    className={inputClass(!!errors.phone)}
                  />
                </motion.div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="patio-date" className="block text-navy font-medium text-sm mb-1.5">
                  Date <span className="text-red-400">*</span>
                </label>
                <motion.div animate={errors.date ? { x: [-4, 4, -4, 4, 0] } : {}} transition={{ duration: 0.3 }}>
                  <input
                    id="patio-date"
                    type="date"
                    min={todayStr || undefined}
                    {...register('date')}
                    className={inputClass(!!errors.date)}
                  />
                </motion.div>
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                )}
              </div>
            </div>

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
                ? 'Something went wrong - try again'
                : 'Submit Patio Rental Request'}
            </motion.button>
          </form>
          </motion.div>

          <div className="contents">
            {patioImages.slice(3).map((img, i) => {
              const imageIndex = i + 3

              return (
                <motion.button
                  key={img.src}
                  type="button"
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setActiveImageIndex(imageIndex)}
                  aria-label={`Select patio photo ${imageIndex + 1}: ${img.alt}`}
                  aria-pressed={activeImageIndex === imageIndex}
                  className={`relative h-56 overflow-hidden rounded-2xl shadow-md ring-2 transition-all duration-300 sm:h-64 lg:h-full ${patioImagePositions[imageIndex]} ${
                    activeImageIndex === imageIndex
                      ? 'ring-primary shadow-xl'
                      : 'ring-transparent hover:shadow-lg'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
