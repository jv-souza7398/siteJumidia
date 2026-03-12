"use client"

import { useEffect, useRef } from "react"
import { ServiceCarousel } from "./service-carousel"
import Image from "next/image"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative overflow-hidden bg-beige-light/50 py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-wine-dark/20 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-beige-dark/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Left Column - Photography Equipment Images (Stacked/Collage Effect) */}
          <div className="relative order-2 hidden lg:order-1 lg:col-span-1 lg:block">
            <div className="sticky top-32">
              <div className="relative h-[450px] w-full">
                {/* Wax Seal - Top */}
                <div 
                  className="animate-on-scroll absolute left-0 top-0 z-10 opacity-0" 
                  style={{ 
                    animationDelay: "0.3s",
                    transform: "rotate(-8deg)"
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botoaoIcone-removebg-preview-uR3mt4QR4FEW8etEM7kVu58lCwjOTj.png"
                    alt="Selo de cera"
                    width={140}
                    height={140}
                    className="w-32 object-contain drop-shadow-xl"
                  />
                </div>
                
                {/* Leica Camera - Top Right, overlapping seal */}
                <div 
                  className="animate-on-scroll absolute right-0 top-16 z-20 opacity-0" 
                  style={{ 
                    animationDelay: "0.4s",
                    transform: "rotate(5deg)"
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cameraIcone-removebg-preview-t5hQkCIMIG9zPE5ZSiCjF00LfY7SqG.png"
                    alt="Camera Leica"
                    width={200}
                    height={130}
                    className="w-48 object-contain drop-shadow-xl"
                  />
                </div>
                
                {/* Canon DSLR - Middle, overlapping Leica */}
                <div 
                  className="animate-on-scroll absolute left-2 top-40 z-30 opacity-0" 
                  style={{ 
                    animationDelay: "0.5s",
                    transform: "rotate(-3deg)"
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cameraIcone2-removebg-preview-dbM2uclAqCGIwHSBJWlAfxWxB1glME.png"
                    alt="Camera Canon DSLR"
                    width={160}
                    height={120}
                    className="w-40 object-contain drop-shadow-xl"
                  />
                </div>
                
                {/* Vinyl Record - Bottom, overlapping Canon */}
                <div 
                  className="animate-on-scroll absolute bottom-0 right-2 z-40 opacity-0" 
                  style={{ 
                    animationDelay: "0.6s",
                    transform: "rotate(10deg)"
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discoIcone-removebg-preview-b7Wf2aK8LAMCR8iJgfPzFxImGKtjXR.png"
                    alt="Disco de vinil"
                    width={150}
                    height={150}
                    className="w-36 object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content (larger for big cards) */}
          <div className="order-1 space-y-8 lg:order-2 lg:col-span-4">
            <h2
              className="animate-on-scroll text-balance text-3xl font-bold leading-tight tracking-tight text-wine-dark opacity-0 md:text-4xl lg:text-5xl"
              style={{ animationDelay: "0.1s" }}
            >
              Serviços
            </h2>

            {/* Large Service Carousel */}
            <div
              className="animate-on-scroll pt-4 opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <ServiceCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
