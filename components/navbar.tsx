"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const menuItems = [
  {
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Resources",
    href: "/resources",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Research",
    href: "/research",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Internships",
    href: "/internships",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Volunteering",
    href: "/volunteering",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Competitions",
    href: "/competitions",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Packages",
    href: "/packages",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
  {
    label: "Sign In",
    href: "/login",
    gradient: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, rgba(234,179,8,0.06) 50%, rgba(202,138,4,0) 100%)",
    iconColor: "text-primary-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background shadow-md shadow-black/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">Pantheon</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <motion.nav
              className="p-1 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg relative overflow-hidden"
              initial="initial"
              whileHover="hover"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-radial from-transparent via-primary-400/20 via-30% via-primary-400/10 via-60% to-transparent rounded-3xl z-0 pointer-events-none"
                variants={navGlowVariants}
              />
              <ul className="flex items-center gap-1 relative z-10">
                {menuItems.map((item) => (
                  <motion.li key={item.label} className="relative">
                    <motion.div
                      className="block rounded-xl overflow-visible group relative"
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none"
                        variants={glowVariants}
                        style={{
                          background: item.gradient,
                          opacity: 0,
                          borderRadius: "16px",
                        }}
                      />
                      <motion.div
                        variants={itemVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                        className="relative z-10"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary-400 transition-colors rounded-xl"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={backVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                        className="absolute inset-0 z-10"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary-400 transition-colors rounded-xl"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary-400 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary-400 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
