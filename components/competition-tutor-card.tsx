"use client"

import React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { AdvancedButton } from "@/components/advanced-button"

interface CompetitionTutorCardProps {
  name: string
  title: string
  image: string
  background: string
  colors: number[][]
}

export const CompetitionTutorCard = ({ name, title, image, background, colors }: CompetitionTutorCardProps) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#d0d0c0] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-[#f5f5f0]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7DDBA3]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7DDBA3]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7DDBA3]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7DDBA3]" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            <CanvasRevealEffect animationSpeed={3} containerClassName={background} colors={colors} dotSize={2} />
            {/* Radial gradient for the fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#e0e4d0]">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
        </div>
        <h2 className="text-[#2a9d8f] text-2xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white transition duration-200 text-center">
          {name}
        </h2>
        <p className="text-[#7DDBA3] opacity-100 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-white/90 transition duration-200 text-center mt-2">
          {title}
        </p>
        <div className="mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 text-center">
          <AdvancedButton
            href="/contact"
            className="px-4 py-2 bg-[#f5f5f0] text-[#2a9d8f] rounded-md hover:bg-white transition-all duration-300"
            variant="interactive"
          >
            Book Consultation
          </AdvancedButton>
        </div>
      </div>
    </div>
  )
}

// Icon Component
const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
