"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const message = `*Nova mensagem do site*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // WhatsApp number (remove formatting)
    const phoneNumber = "5511972802151"
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative overflow-hidden bg-wine-dark py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-wine-accent/30 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-wine-medium/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0">
              <span className="inline-block rounded-full bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cream">
                Entre em contato
              </span>
            </div>

            <h2
              className="animate-on-scroll text-balance text-3xl font-bold leading-tight tracking-tight text-cream opacity-0 md:text-4xl lg:text-5xl"
              style={{ animationDelay: "0.1s" }}
            >
              Vamos criar algo incrível juntos?
            </h2>

            <p
              className="animate-on-scroll max-w-md text-pretty text-lg leading-relaxed text-cream/80 opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Estamos prontos para transformar suas ideias em realidade. Entre em contato e deixe que eu ajude sua marca a crescer e se destacar.
            </p>

            {/* Contact Details */}
            <div
              className="animate-on-scroll space-y-6 pt-4 opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
                  <Mail className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Email</p>
                  <a
                    href="mailto:juolsilva24@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-cream transition-colors hover:text-beige-light"
                  >
                    juolsilva24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
                  <Phone className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">WhatsApp</p>
                  <a
                    href="https://wa.me/5511972802151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-cream transition-colors hover:text-beige-light"
                  >
                    (11) 97280-2151
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
                  <MapPin className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <p className="text-sm text-cream/60">Endereço</p>
                  <p className="text-lg text-cream">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="animate-on-scroll opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl bg-cream/5 p-8 backdrop-blur-sm lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-cream/80"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 transition-all duration-300 focus:bg-cream/15 focus:outline-none focus:ring-2 focus:ring-cream/30"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-cream/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 transition-all duration-300 focus:bg-cream/15 focus:outline-none focus:ring-2 focus:ring-cream/30"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-cream/80"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 transition-all duration-300 focus:bg-cream/15 focus:outline-none focus:ring-2 focus:ring-cream/30"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-cream/80"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border-0 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 transition-all duration-300 focus:bg-cream/15 focus:outline-none focus:ring-2 focus:ring-cream/30"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cream py-4 text-sm font-semibold text-wine-dark transition-all duration-300 hover:bg-beige-light hover:scale-[1.02]"
              >
                Enviar Mensagem
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
