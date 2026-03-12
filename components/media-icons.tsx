"use client"

interface MediaIconsProps {
  className?: string
}

export function MediaIcons({ className = "" }: MediaIconsProps) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      {/* Electric Guitar */}
      <div
        className="animate-float absolute left-4 top-8"
        style={{ animationDelay: "0s" }}
      >
        <svg
          width="80"
          height="140"
          viewBox="0 0 80 140"
          fill="none"
          className="text-wine-dark"
          aria-label="Guitarra elétrica"
        >
          <path
            d="M40 0v60M30 60h20M25 70c0 15 5 25 15 25s15-10 15-25M25 95v30M55 95v30M30 125h20M35 125v10M45 125v10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="80" r="5" fill="currentColor" />
          <circle cx="35" cy="90" r="2" fill="currentColor" />
          <circle cx="45" cy="90" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Camera 1 */}
      <div
        className="animate-float absolute right-8 top-4"
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          width="70"
          height="60"
          viewBox="0 0 70 60"
          fill="none"
          className="text-wine-accent"
          aria-label="Câmera fotográfica"
        >
          <rect
            x="5"
            y="15"
            width="60"
            height="40"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="35"
            cy="35"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="35" r="6" fill="currentColor" />
          <rect x="22" y="8" width="16" height="8" rx="2" fill="currentColor" />
          <circle cx="55" cy="22" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Vinyl Record */}
      <div
        className="animate-float absolute left-1/2 top-1/3 -translate-x-1/2"
        style={{ animationDelay: "1s" }}
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          className="text-wine-dark"
          aria-label="Disco de vinil"
        >
          <circle
            cx="45"
            cy="45"
            r="42"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="45"
            cy="45"
            r="30"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="45"
            cy="45"
            r="18"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="45" cy="45" r="8" fill="currentColor" />
          <circle cx="45" cy="45" r="3" fill="#FFFBF0" />
        </svg>
      </div>

      {/* Musical Notes */}
      <div
        className="animate-float absolute left-2 top-1/2"
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          width="50"
          height="60"
          viewBox="0 0 50 60"
          fill="none"
          className="text-beige-dark"
          aria-label="Notas musicais"
        >
          <circle cx="10" cy="50" r="8" fill="currentColor" />
          <path d="M18 50V10" stroke="currentColor" strokeWidth="2" />
          <path d="M18 10l20 5v15l-20-5V10z" fill="currentColor" />
          <circle cx="30" cy="45" r="8" fill="currentColor" />
          <path d="M38 45V5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Camera 2 - Compact */}
      <div
        className="animate-float absolute bottom-1/4 right-4"
        style={{ animationDelay: "2s" }}
      >
        <svg
          width="60"
          height="45"
          viewBox="0 0 60 45"
          fill="none"
          className="text-wine-medium"
          aria-label="Câmera compacta"
        >
          <rect
            x="2"
            y="8"
            width="56"
            height="35"
            rx="6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="30"
            cy="25"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="30" cy="25" r="4" fill="currentColor" />
          <rect x="45" y="12" width="8" height="5" rx="1" fill="currentColor" />
          <rect x="8" y="2" width="12" height="7" rx="2" fill="currentColor" />
        </svg>
      </div>

      {/* Floppy Disk */}
      <div
        className="animate-float absolute bottom-8 left-8"
        style={{ animationDelay: "2.5s" }}
      >
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          className="text-wine-accent"
          aria-label="Disquete"
        >
          <rect
            x="2"
            y="2"
            width="51"
            height="51"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect x="12" y="2" width="31" height="18" rx="2" fill="currentColor" />
          <rect x="18" y="5" width="12" height="12" fill="#FFFBF0" />
          <rect
            x="10"
            y="32"
            width="35"
            height="21"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Cassette Tape */}
      <div
        className="animate-float absolute bottom-4 right-1/4"
        style={{ animationDelay: "3s" }}
      >
        <svg
          width="80"
          height="50"
          viewBox="0 0 80 50"
          fill="none"
          className="text-beige-dark"
          aria-label="Fita cassete"
        >
          <rect
            x="2"
            y="2"
            width="76"
            height="46"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="25"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="58"
            cy="25"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="22" cy="25" r="4" fill="currentColor" />
          <circle cx="58" cy="25" r="4" fill="currentColor" />
          <path
            d="M32 25h16"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect x="15" y="40" width="50" height="4" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
