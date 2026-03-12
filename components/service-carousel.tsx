"use client"

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, X } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  bgColor: string
  titleColor: string
  descColor: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento de campanhas",
    description: "Criação de campanhas estratégicas pensadas para comunicar a mensagem certa ao público certo. O objetivo é fortalecer a marca, gerar conexão, engajamento e resultados reais, unindo criatividade, planejamento e posicionamento.",
    bgColor: "bg-cream",
    titleColor: "text-wine-dark",
    descColor: "text-wine-medium",
  },
  {
    id: 2,
    title: "Storymaker",
    description: "Serviço de cobertura em tempo real para eventos, marcas e experiências. Consiste na criação de fotos e vídeos durante o momento do evento, com publicação ao vivo nos Stories do Instagram do cliente. O objetivo é registrar os principais momentos, gerar engajamento imediato, mostrar a experiência de forma autêntica e manter o público conectado em tempo real, ideal para eventos, festas, lançamentos e celebrações especiais.",
    bgColor: "bg-beige-light",
    titleColor: "text-wine-dark",
    descColor: "text-wine-dark/80",
  },
  {
    id: 3,
    title: "Videomaker | Captação e edição",
    description: "Serviço completo para quem já tem uma ideia de vídeo e deseja vê-la executada do início ao fim. Realizo a captação das imagens conforme o conceito do cliente e cuido de todo o processo de edição, transformando a ideia em um vídeo profissional, coerente e alinhado ao objetivo da marca ou do projeto. O foco é entregar um conteúdo bem produzido, com identidade, ritmo e pronto para gerar impacto e conexão.",
    bgColor: "bg-beige-dark",
    titleColor: "text-wine-dark",
    descColor: "text-wine-dark/80",
  },
]

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const maxIndex = services.length - 1

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && expandedCard === null) {
      autoPlayRef.current = setInterval(nextSlide, 4000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, nextSlide, expandedCard])

  // Close expanded card on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expandedCard !== null) {
        setExpandedCard(null)
        return
      }
      if (e.key === "ArrowLeft") {
        prevSlide()
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 3000)
      } else if (e.key === "ArrowRight") {
        nextSlide()
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 3000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, expandedCard])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Drag functionality
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (expandedCard !== null) return
    setIsDragging(true)
    setIsAutoPlaying(false)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || expandedCard !== null) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging || expandedCard !== null) return
    setIsDragging(false)

    if (translateX > 50) {
      prevSlide()
    } else if (translateX < -50) {
      nextSlide()
    }

    setTranslateX(0)
    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  const handleCardClick = (serviceId: number) => {
    // Only expand on mobile
    if (window.innerWidth < 768) {
      setExpandedCard(expandedCard === serviceId ? null : serviceId)
      setIsAutoPlaying(false)
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Carrossel de serviços"
      aria-roledescription="carousel"
    >
      {/* Mobile: Stacked cards view */}
      <div className="flex flex-col gap-4 md:hidden">
        {services.map((service) => (
          <div
            key={service.id}
            className={`${service.bgColor} relative overflow-hidden rounded-2xl transition-all duration-300`}
          >
            {/* Decorative background elements */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-wine-dark/5" />
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-wine-dark/5" />

            {/* Clickable Header */}
            <button
              type="button"
              onClick={() => handleCardClick(service.id)}
              className="relative flex w-full items-center justify-between p-5 text-left"
              aria-expanded={expandedCard === service.id}
            >
              <h3 className={`${service.titleColor} pr-4 text-lg font-bold leading-tight`}>
                {service.title}
              </h3>
              <ChevronDown 
                className={`${service.titleColor} h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                  expandedCard === service.id ? "rotate-180" : ""
                }`} 
              />
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedCard === service.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5">
                <p className={`${service.descColor} text-sm leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Carousel view */}
      <div className="hidden md:block">
        <div
          ref={carouselRef}
          className="overflow-hidden rounded-3xl"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className="w-full min-w-0 flex-shrink-0 cursor-grab active:cursor-grabbing"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${services.length}: ${service.title}`}
              >
                <div
                  className={`${service.bgColor} relative min-h-[450px] overflow-hidden rounded-3xl transition-all duration-300`}
                >
                  {/* Decorative background elements */}
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-wine-dark/5" />
                  <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-wine-dark/5" />

                  {/* Content - Editorial Layout */}
                  <div className="relative flex h-full flex-col p-12 lg:p-14">
                    {/* Top Section - Title */}
                    <div className="mb-6">
                      <h3 className={`${service.titleColor} text-3xl font-bold leading-tight lg:text-4xl`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Middle Section - Description */}
                    <div className="flex-1 pb-4">
                      <p className={`${service.descColor} max-w-2xl text-lg leading-relaxed`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop only */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className="flex-shrink-0 rounded-full bg-wine-dark p-3 shadow-lg transition-all duration-300 hover:bg-wine-accent hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-accent focus-visible:ring-offset-2"
            aria-label="Serviço anterior"
          >
            <ChevronLeft className="h-5 w-5 text-cream" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2" role="tablist" aria-label="Slides do carrossel">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir para ${service.title}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "h-2.5 w-8 bg-wine-dark"
                    : "h-2.5 w-2.5 bg-beige-dark hover:bg-wine-accent"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="flex-shrink-0 rounded-full bg-wine-dark p-3 shadow-lg transition-all duration-300 hover:bg-wine-accent hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-accent focus-visible:ring-offset-2"
            aria-label="Próximo serviço"
          >
            <ChevronRight className="h-5 w-5 text-cream" />
          </button>
        </div>
      </div>
    </div>
  )
}
