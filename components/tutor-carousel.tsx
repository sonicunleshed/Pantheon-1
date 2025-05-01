"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Tutor {
  id: number
  name: string
  image: string
  subjects: string[]
  education: string
  scores: {
    sat?: number
    act?: number
  }
  bio: string
}

interface TutorCarouselProps {
  tutors: Tutor[]
  autoScrollInterval?: number
}

export const TutorCarousel = ({ tutors, autoScrollInterval = 5000 }: TutorCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextTutor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tutors.length)
  }

  const prevTutor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tutors.length) % tutors.length)
  }

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextTutor, autoScrollInterval)
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll()
    }

    return () => stopAutoScroll()
  }, [isAutoScrolling, currentIndex])

  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg bg-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-10">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: autoScrollInterval / 1000,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          key={currentIndex}
        />
      </div>

      <div className="flex flex-col md:flex-row h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 p-8 flex flex-col justify-center"
          >
            <div className="flex items-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                <Image
                  src={tutors[currentIndex].image || "/placeholder.svg"}
                  alt={tutors[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-foreground">{tutors[currentIndex].name}</h3>
                <p className="text-gray-300">{tutors[currentIndex].education}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {tutors[currentIndex].subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-900/30 text-primary-500 rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-4">
                {tutors[currentIndex].scores.sat && (
                  <div className="bg-primary-900/30 px-4 py-2 rounded-lg">
                    <span className="text-primary-500 font-bold">SAT:</span>{" "}
                    <span className="text-gray-300">{tutors[currentIndex].scores.sat}</span>
                  </div>
                )}
                {tutors[currentIndex].scores.act && (
                  <div className="bg-primary-900/30 px-4 py-2 rounded-lg">
                    <span className="text-primary-500 font-bold">ACT:</span>{" "}
                    <span className="text-gray-300">{tutors[currentIndex].scores.act}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-300 italic">{tutors[currentIndex].bio}</p>
          </motion.div>
        </AnimatePresence>

        <div className="w-full md:w-1/2 bg-gradient-to-br from-black to-gray-900 p-8 flex flex-col justify-center items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expert Tutors</h2>
            <p className="text-lg mb-8 text-gray-300">
              All our tutors scored in the top 1% on standardized tests and graduated from elite universities.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={prevTutor}
                className="p-2 rounded-full bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
                aria-label="Previous tutor"
              >
                <ChevronLeft className="h-6 w-6 text-primary-500" />
              </button>
              <div className="flex gap-2">
                {tutors.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-primary-500" : "bg-primary-500/40"}`}
                    aria-label={`Go to tutor ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTutor}
                className="p-2 rounded-full bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
                aria-label="Next tutor"
              >
                <ChevronRight className="h-6 w-6 text-primary-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
