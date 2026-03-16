"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-cream pt-20"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-beige-light blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-beige-dark/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Text Content (60%) */}
          <div className="space-y-8 lg:col-span-3">
            <div className="animate-on-scroll opacity-0">
              <span className="inline-block rounded-full bg-beige-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-wine-dark">
                Publicitária
              </span>
            </div>

            <h1
              className="animate-on-scroll text-balance text-4xl font-bold leading-tight tracking-tight text-wine-dark opacity-0 md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Oiee, aqui começa a nossa conexão!
            </h1>

            {/* Timeline-styled text content */}
            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                {/* Decorative timeline line */}
                <div 
                  className="absolute left-0 top-2 w-0.5 bg-gradient-to-b from-wine-dark via-wine-accent to-beige-dark transition-all duration-500 ease-out"
                  style={{ 
                    height: isExpanded ? '100%' : '180px',
                  }}
                />
                
                <div className="pl-6 space-y-6">
                  {/* Timeline markers */}
                  <div className="relative">
                    <div className="absolute -left-6 top-1.5 flex items-center justify-center">
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-wine-dark ring-4 ring-cream" />
                    </div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-wine-accent mb-2">
                      2022 - A Escolha
                    </span>
                    <p className="text-pretty text-lg leading-relaxed text-wine-medium/80">
                      Sou formada em Produção Publicitária, minha trajetória até aqui foi marcada por escolhas, renúncias e propósitos. Concluí o ensino médio em 2022 e, por muito tempo, tive o sonho de cursar Geologia, uma área de exatas que sempre admirei. Estudei para o vestibular com foco em uma universidade federal, mas, a poucos meses da prova, através de uma amiga, conheci o curso de Publicidade e Propaganda e ali nasceu uma dúvida que mudaria tudo.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-6 top-1.5 flex items-center justify-center">
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-wine-accent ring-4 ring-cream" />
                    </div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-wine-accent mb-2">
                      Fev/2023 - A Decisão
                    </span>
                    <p className="text-pretty text-lg leading-relaxed text-wine-medium/80">
                      Dividida entre Geologia e Publicidade, decidi prestar vestibular para ambas. Em fevereiro, iniciei minha graduação em Publicidade e Propaganda com bolsa na Universidade Anhembi Morumbi e, em fevereiro, recebi a aprovação na Universidade Federal de Goiás (UFG) para Geologia.
                      {!isExpanded && (
                        <span className="text-wine-medium/60">...</span>
                      )}
                    </p>
                  </div>

                  {/* Expandable content */}
                  <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isExpanded ? '1000px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="space-y-6">
                      <p className="text-pretty text-lg leading-relaxed text-wine-medium/80">
                        Mesmo diante dessa grande conquista, percebi que já estava completamente apaixonada pela comunicação. Foi então que fiz uma escolha importante: abrir mão da faculdade federal para seguir onde meu coração já estava.
                      </p>

                      <div className="relative">
                        <div className="absolute -left-6 top-1.5 flex items-center justify-center">
                          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-beige-dark ring-4 ring-cream" />
                        </div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-wine-accent mb-2">
                          2023 - O Percurso
                        </span>
                        <p className="text-pretty text-lg leading-relaxed text-wine-medium/80">
                          Após um semestre, mudei para a FAM – Faculdade das Américas, onde pude conciliar estudos e trabalho. Nesse período, construí conexões, ampliei meu networking, aprendi com professores incríveis e me desenvolvi tanto pessoal quanto profissionalmente. Na FAM, finalizei minha formação acadêmica, com conclusão em março de 2026.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-6 top-1.5 flex items-center justify-center">
                          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-wine-dark ring-4 ring-cream" />
                        </div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-wine-accent mb-2">
                          Mar/2026 - O Propósito
                        </span>
                        <p className="text-pretty text-lg leading-relaxed text-wine-medium/80">
                          Hoje, tenho certeza de que fiz a escolha certa. Admiro profundamente a Geologia, mas foi na Publicidade que encontrei meu verdadeiro propósito: conectar pessoas, comunicar ideias e transformar histórias em significado. Aprendi que, muitas vezes, precisamos renunciar a um caminho para viver outro ainda maior – e é exatamente isso que me move.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Read More / Read Less Button */}
                  <button
                    onClick={toggleExpand}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-wine-dark transition-all duration-300 hover:text-wine-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    aria-expanded={isExpanded}
                    aria-controls="expanded-content"
                  >
                    <span className="relative">
                      {isExpanded ? "Ler menos" : "Continue minha história"}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-wine-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll flex flex-wrap gap-4 pt-4 opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 rounded-full bg-wine-dark px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-wine-accent hover:scale-105"
              >
                Meus Serviços
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border-2 border-wine-dark px-8 py-4 text-sm font-medium text-wine-dark transition-all duration-300 hover:bg-wine-dark hover:text-cream"
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          {/* Right Column - Artistic Image Composition (40%) */}
          <div className="relative lg:col-span-2">
            {/* Expanded image overlay */}
            {hoveredImage && (
              <div 
                className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-wine-dark/60 backdrop-blur-sm transition-opacity duration-300"
                style={{ opacity: hoveredImage ? 1 : 0 }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative max-h-[75vh] max-w-[80vw] overflow-hidden rounded-3xl bg-cream p-4 shadow-2xl">
                    <img
                      src={
                        hoveredImage === "faculdade"
                          ? "https://celebrated-vacherin-8f85dd.netlify.app/faculdade.png"
                          : hoveredImage === "estudio"
                          ? "https://celebrated-vacherin-8f85dd.netlify.app/estudio.png"
                          : hoveredImage === "formatura"
                          ? "https://celebrated-vacherin-8f85dd.netlify.app/formatura.png"
                          : "https://celebrated-vacherin-8f85dd.netlify.app/cjf.png"
                      }
                      alt={
                        hoveredImage === "faculdade"
                          ? "Visor de câmera DSLR durante sessão de fotos na faculdade, 2024"
                          : hoveredImage === "estudio"
                          ? "Estúdio de produção na faculdade com green screen e equipamentos profissionais, 2024"
                          : hoveredImage === "formatura"
                          ? "Formatura"
                          : "CJF"
                      }
                      className="max-h-[70vh] w-auto rounded-2xl object-contain"
                    />
                  </div>
                  <div className="rounded-full bg-wine-dark/80 px-4 py-2 text-sm text-cream">
                    {hoveredImage === "faculdade" && "Faculdade, 2024"}
                    {hoveredImage === "estudio" && "Estúdio, 2024"}
                    {hoveredImage === "formatura" && "Formatura"}
                    {hoveredImage === "cjf" && "CJF"}
                  </div>
                </div>
              </div>
            )}

            {/* Grid Layout - 2 columns with offset pattern */}
            <div className="grid grid-cols-2 gap-3">
              {/* Left Column - tall image on top, short image below */}
              <div className="flex flex-col gap-3">
                {/* Image 1 - Faculdade (tall) */}
                <div
                  className="animate-on-scroll group aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-cream opacity-0 shadow-lg transition-all duration-500 hover:z-20 hover:shadow-xl"
                  style={{ animationDelay: "0.4s" }}
                  onMouseEnter={() => setHoveredImage("faculdade")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src="https://celebrated-vacherin-8f85dd.netlify.app/faculdade.png"
                    alt="Visor de câmera DSLR durante sessão de fotos na faculdade, 2024"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image 2 - Estudio (short) */}
                <div
                  className="animate-on-scroll group aspect-square cursor-pointer overflow-hidden rounded-2xl bg-cream opacity-0 shadow-lg transition-all duration-500 hover:z-20 hover:shadow-xl"
                  style={{ animationDelay: "0.5s" }}
                  onMouseEnter={() => setHoveredImage("estudio")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src="https://celebrated-vacherin-8f85dd.netlify.app/estudio.png"
                    alt="Estúdio de produção na faculdade com green screen e equipamentos profissionais, 2024"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column - short image on top, tall image below */}
              <div className="flex flex-col gap-3">
                {/* Image 3 - Formatura (short) */}
                <div
                  className="animate-on-scroll group aspect-square cursor-pointer overflow-hidden rounded-2xl bg-cream opacity-0 shadow-lg transition-all duration-500 hover:z-20 hover:shadow-xl"
                  style={{ animationDelay: "0.6s" }}
                  onMouseEnter={() => setHoveredImage("formatura")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src="https://celebrated-vacherin-8f85dd.netlify.app/formatura.png"
                    alt="Formatura"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image 4 - CJF (tall) */}
                <div
                  className="animate-on-scroll group aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-cream opacity-0 shadow-lg transition-all duration-500 hover:z-20 hover:shadow-xl"
                  style={{ animationDelay: "0.7s" }}
                  onMouseEnter={() => setHoveredImage("cjf")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src="https://celebrated-vacherin-8f85dd.netlify.app/cjf.png"
                    alt="CJF"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
