'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { fadeInUp, slideInLeft, slideInRight, stagger } from '@/lib/animations'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: '1 Oceanfront Drive, Beachside',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Daily · 7:00 AM – 11:00 PM',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@beachhousecafe.com',
  },
]

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/contact', {
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

  return (
    <section id="contact" className="py-20 md:py-32 bg-sand">
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
            Get in Touch
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-navy mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-navy/60 max-w-xl mx-auto text-base md:text-lg">
            Have a question or just want to say hello? Drop us a message and we&apos;ll
            get back to you as soon as we can.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Contact info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-center"
                >
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-navy/50 text-xs uppercase tracking-wider font-medium mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-navy font-medium text-sm break-words">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md flex-1 min-h-48 bg-primary/10 relative">
              <iframe
                src="https://maps.google.com/maps?q=beach+cafe&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beach House Café location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-navy/5 flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-navy font-medium text-sm mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <motion.div
                  animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    id="name"
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

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-navy font-medium text-sm mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <motion.div
                  animate={errors.email ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    id="email"
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

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-navy font-medium text-sm mb-1.5">
                  Phone Number <span className="text-navy/40 font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register('phone')}
                  className={inputClass(false)}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-navy font-medium text-sm mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <motion.div
                  animate={errors.message ? { x: [-4, 4, -4, 4, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    {...register('message')}
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                </motion.div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
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
                  ? '✓ Message Sent!'
                  : submitState === 'error'
                  ? 'Something went wrong — try again'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
