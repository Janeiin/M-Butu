'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = () => {
    const subject = encodeURIComponent('Enquiry — M\u2019Butu Collection')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative bg-noir py-section">
      <div className="container-editorial">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Enquiries</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={['Request', 'availability.']}
              className="font-display text-display font-light text-ivory"
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-prose font-body text-sm leading-relaxed text-mist">
                Tell us the piece, the scheme or the project. Enquiries are handled personally and in
                confidence, wherever you are.
              </p>
            </Reveal>

            <div className="mt-14 space-y-6">
              <Reveal delay={0.2}>
                <a href={`mailto:${site.contact.email}`} className="group block">
                  <p className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">Email</p>
                  <p className="link-underline mt-1 inline-block font-display text-2xl font-light text-ivory">
                    {site.contact.email}
                  </p>
                </a>
              </Reveal>
              <Reveal delay={0.25}>
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="group block">
                  <p className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">Phone</p>
                  <p className="link-underline mt-1 inline-block font-display text-2xl font-light text-ivory">
                    {site.contact.phone}
                  </p>
                </a>
              </Reveal>
              <Reveal delay={0.3}>
                <a href={site.contact.instagramUrl} target="_blank" rel="noreferrer" className="group block">
                  <p className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">Instagram</p>
                  <p className="link-underline mt-1 inline-block font-display text-2xl font-light text-ivory">
                    {site.contact.instagram}
                  </p>
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2} className="md:pt-4">
            <div className="space-y-8">
              <Field label="Full name" value={name} onChange={setName} placeholder="Your name" />
              <Field label="Email" value={email} onChange={setEmail} placeholder="you@studio.com" type="email" />
              <div>
                <label className="mb-3 block font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">
                  Your enquiry
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="The piece or project you have in mind"
                  className="w-full resize-none border-b border-white/15 bg-transparent pb-3 font-display text-2xl font-light text-ivory placeholder:text-white/25 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                onClick={mailto}
                className="group inline-flex items-center gap-4 rounded-full bg-gold px-10 py-4 font-body text-[0.76rem] uppercase tracking-wide text-noir transition-transform duration-500 ease-luxe hover:scale-[1.03]"
              >
                Request availability
                <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-3 block font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-white/15 bg-transparent pb-3 font-display text-2xl font-light text-ivory placeholder:text-white/25 focus:border-gold focus:outline-none"
      />
    </div>
  )
}
