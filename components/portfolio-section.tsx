"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Play, X, Loader2 } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  color: string
  videoUrl?: string
  thumbnail?: string
}

// Check if video format is supported
function getVideoType(url: string): string {
  if (url.includes('.mp4')) return 'video/mp4'
  if (url.includes('.mov')) return 'video/quicktime'
  if (url.includes('.mpg') || url.includes('.mpeg')) return 'video/mpeg'
  if (url.includes('.webm')) return 'video/webm'
  return 'video/mp4'
}

// Video Modal Component with loading state
function VideoModal({ video, onClose }: { video: PortfolioItem; onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleVideoError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  // Try to play when loaded
  useEffect(() => {
    if (videoRef.current && !isLoading && !hasError) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, user can manually play
      })
    }
  }, [isLoading, hasError])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
        aria-label="Fechar"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Video Container */}
      <div
        className="relative w-full max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[9/16] max-h-[85vh] w-full overflow-hidden rounded-2xl bg-black sm:aspect-video">
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-white" />
            </div>
          )}

          {/* Error state */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="mb-2 text-lg">Erro ao carregar o vídeo</p>
              <p className="text-sm text-white/60">Formato não suportado pelo navegador</p>
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-wine-dark px-6 py-2 text-sm font-medium text-cream transition-colors hover:bg-wine-accent"
              >
                Abrir vídeo em nova aba
              </a>
            </div>
          )}

          {/* Video player */}
          {video.videoUrl && (
            <video
              ref={videoRef}
              className={`h-full w-full object-contain ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`}
              controls
              playsInline
              preload="auto"
              onLoadedData={handleVideoLoad}
              onCanPlay={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src={video.videoUrl} type={getVideoType(video.videoUrl)} />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          )}
        </div>

        {/* Video Title */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-white">{video.title}</h3>
          <p className="mt-1 text-sm text-white/60">{video.category}</p>
        </div>
      </div>
    </div>
  )
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Doc. Vincci",
    category: "Campanha/Lançamento",
    color: "bg-wine-dark",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773937375/Doc._Vincci_oen3nf.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773937375/Doc._Vincci_oen3nf.jpg"
  },
  {
    id: 2,
    title: "Dra. Thaynara",
    category: "Campanha/Lançamento",
    color: "bg-wine-accent",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773937376/Dra.Thaynara_fppcet.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773937376/Dra.Thaynara_fppcet.jpg"
  },
  {
    id: 3,
    title: "Vinccibar.com",
    category: "Campanha/Lançamento",
    color: "bg-wine-medium",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773937379/Site-Vinccibar-_hvth3u.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773937379/Site-Vinccibar-_hvth3u.jpg"
  },
  {
    id: 4,
    title: "Didico's",
    category: "Eventos/Cobertura",
    color: "bg-beige-dark",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773938542/Didicos_yvpikd.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773938542/Didicos_yvpikd.jpg"
  },
  {
    id: 5,
    title: "Evento esportivo",
    category: "Eventos/Cobertura",
    color: "bg-wine-medium",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773937466/Evento-esportivo__yiofc5.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773937466/Evento-esportivo__yiofc5.jpg"
  },
  {
    id: 6,
    title: "Inaugaração Aya",
    category: "Eventos/Cobertura",
    color: "bg-wine-dark",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1773937474/Inaugura%C3%A7%C3%A3o-Aya__ihzuri.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1773937474/Inaugura%C3%A7%C3%A3o-Aya__ihzuri.jpg"
  },
  {
    id: 7,
    title: "Casa á venda",
    category: "Imobiliário",
    color: "bg-wine-dark",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1774036193/Casa_%C3%A1_venda_2_bcmuqd.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1774036193/Casa_%C3%A1_venda_2_bcmuqd.jpg"
  },
  {
    id: 8,
    title: "Terreno á venda",
    category: "Imobiliário",
    color: "bg-wine-accent",
    videoUrl: "https://res.cloudinary.com/dp5cklozk/video/upload/v1774035258/Terreno_a_venda_2_h7vsm0.mp4",
    thumbnail: "https://res.cloudinary.com/dp5cklozk/video/upload/so_0/v1774035258/Terreno_a_venda_2_h7vsm0.jpg"
  },
]

const categories = ["Todos", "Campanha/Lançamento", "Eventos/Cobertura", "Imobiliário"]

// Video Card Component with hover play
function VideoCard({ item, index }: { item: PortfolioItem; index: number; onOpenModal: (item: PortfolioItem) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && videoLoaded) {
      playPromiseRef.current = videoRef.current.play()
      playPromiseRef.current?.catch(() => {
        // Ignore abort errors from rapid hover
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      // Wait for any pending play promise before pausing
      if (playPromiseRef.current) {
        playPromiseRef.current.then(() => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }).catch(() => {
          // Ignore errors
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }

  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(false)
  }

  return (
    <div
      className="animate-on-scroll group cursor-pointer opacity-0"
      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${item.color} transition-all duration-500 hover:shadow-2xl`}
      >
        {/* Thumbnail/Cover Image */}
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          />
        )}

        {/* Video Background - plays on hover */}
        {item.videoUrl && !videoError && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isHovered && videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
          >
            <source src={item.videoUrl} type={getVideoType(item.videoUrl)} />
          </video>
        )}

        {/* Overlay */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 ${item.videoUrl ? 'bg-wine-dark/30 group-hover:bg-wine-dark/50' : 'bg-wine-dark/0 group-hover:bg-wine-dark/60'}`}>
          {/* Play icon for videos */}
          {item.videoUrl && (
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-wine-dark ml-1" />
            </div>
          )}
          <span
            className={`mb-2 text-xs font-medium uppercase tracking-widest ${item.videoUrl || item.color !== "bg-beige-dark"
              ? "text-cream/90"
              : "text-wine-dark/70"
              } transition-opacity duration-300 group-hover:text-cream/90`}
          >
            {item.category}
          </span>
          <h3
            className={`text-center text-xl font-bold ${item.videoUrl || item.color !== "bg-beige-dark"
              ? "text-cream"
              : "text-wine-dark"
              } transition-all duration-300 group-hover:text-cream`}
          >
            {item.title}
          </h3>
          {!item.videoUrl && (
            <div className="mt-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-wine-dark">
                Ver Projeto
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [modalVideo, setModalVideo] = useState<PortfolioItem | null>(null)

  const openModal = useCallback((item: PortfolioItem) => {
    if (item.videoUrl) {
      setModalVideo(item)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const closeModal = useCallback(() => {
    setModalVideo(null)
    document.body.style.overflow = 'unset'
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalVideo) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalVideo, closeModal])

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

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

    // Small delay to ensure DOM is updated after category change
    const timeoutId = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
      elements?.forEach((el) => {
        // Reset animation classes for re-animation
        el.classList.remove("animate-fade-in-up")
        observer.observe(el)
      })
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [activeCategory])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="animate-on-scroll inline-block rounded-full bg-wine-dark/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-wine-dark opacity-0">
            Meus Trabalhos
          </span>
          <h2
            className="animate-on-scroll mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-wine-dark opacity-0 md:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            Portfólio
          </h2>
          <p
            className="animate-on-scroll mx-auto mt-4 max-w-2xl text-pretty text-lg text-wine-medium/80 opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Explore meus projetos mais recentes.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="animate-on-scroll mb-12 flex flex-wrap justify-center gap-3 opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-wine-dark text-cream"
                : "bg-beige-light text-wine-dark hover:bg-beige-dark"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div key={item.id} onClick={() => openModal(item)}>
              <VideoCard item={item} index={index} onOpenModal={openModal} />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {modalVideo && modalVideo.videoUrl && (
        <VideoModal video={modalVideo} onClose={closeModal} />
      )}
    </section>
  )
}
