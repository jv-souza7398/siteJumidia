"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Contato", href: "#contato" },
    ],
    services: [
      { label: "Campanha/Lançamento", href: "#portfolio" },
      { label: "Eventos/Cobertura", href: "#portfolio" },
      { label: "Imobiliário", href: "#portfolio" },
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/julia._osilva?igsh=eHZuY3l0OGpqdHg=", icon: Instagram },
      { label: "WhatsApp", href: "https://wa.me/5511972802151", icon: MessageCircle },
    ],
  }

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 border-b border-beige-dark/30 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wine-dark transition-transform duration-300 group-hover:scale-105">
                <span className="text-lg font-bold text-cream">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-wine-dark">
                STUDIO
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-wine-medium/70">
              Transformamos ideias em experiências visuais impactantes. Somos uma
              agência de publicidade pioneira, criativa e inovadora.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-wine-dark">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-wine-medium/70 transition-colors hover:text-wine-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-wine-dark">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-wine-medium/70 transition-colors hover:text-wine-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-wine-dark">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-light text-wine-dark transition-all duration-300 hover:bg-wine-dark hover:text-cream hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-wine-dark">
                Newsletter
              </h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 rounded-lg border-0 bg-beige-light px-4 py-2.5 text-sm text-wine-dark placeholder-wine-medium/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wine-dark/30"
                  aria-label="Email para newsletter"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-wine-dark px-4 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-wine-accent"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-wine-medium/60">
            © {currentYear} Studio Criativo. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-wine-medium/60 transition-colors hover:text-wine-dark"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-wine-medium/60 transition-colors hover:text-wine-dark"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
