'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/carte', label: 'La Carte' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#FDF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD0]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none cursor-pointer group"
              aria-label="La Galère — Accueil"
            >
              <span
                className="font-heading text-xl font-bold text-[#1C2B2D] transition-colors duration-150 group-hover:text-[#E8A045] md:text-2xl"
              >
                La Galère
              </span>
              <span className="text-[10px] font-body tracking-widest text-[#4A6366] uppercase md:text-xs">
                Valras-Plage
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-body text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    pathname === href
                      ? 'text-[#E8A045]'
                      : 'text-[#1C2B2D] hover:text-[#E8A045]'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#E8A045]"
                    />
                  )}
                </Link>
              ))}
              <a
                href="https://maps.google.com/maps?q=La+Galère+Valras-Plage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-[#E8A045] px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#C8852A] cursor-pointer"
              >
                <MapPin size={14} aria-hidden="true" />
                Nous trouver
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1C2B2D] transition-colors duration-150 hover:bg-[#E8DFD0] cursor-pointer md:hidden"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#FDF8F0] pt-16 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pt-8">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors duration-150 cursor-pointer ${
                      pathname === href
                        ? 'bg-[#E8A045]/10 text-[#E8A045]'
                        : 'text-[#1C2B2D] hover:bg-[#E8DFD0]'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="pt-4"
              >
                <a
                  href="https://maps.google.com/maps?q=La+Galère+Valras-Plage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#E8A045] px-6 py-3 text-base font-semibold text-white cursor-pointer"
                >
                  <MapPin size={16} aria-hidden="true" />
                  Nous trouver
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
