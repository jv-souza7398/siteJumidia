"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-cream shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wine-dark transition-transform duration-300 group-hover:scale-105">
              <span className="text-lg font-bold text-cream">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-wine-dark">
              STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-wine-dark transition-colors hover:text-wine-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wine-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="rounded-full bg-wine-dark px-6 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-wine-accent hover:scale-105"
            >
              Fale Comigo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-wine-dark transition-colors hover:bg-beige-light md:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 z-40 bg-cream md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-6 px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-wine-dark transition-colors hover:text-wine-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full rounded-full bg-wine-dark py-4 text-center text-base font-medium text-cream transition-all duration-300 hover:bg-wine-accent"
            >
              Fale Comigo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
