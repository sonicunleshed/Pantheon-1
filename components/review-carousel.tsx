"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Review {
  id: number
  name: string
  image: string
  role: string
  rating: number
  content: string
  program?: string
  improvement?: string
}

interface ReviewCarouselProps {
  reviews: Review[]
  autoScrollInterval?: number
}

export const ReviewCarousel = ({ reviews, autoScrollInterval = 6000 }: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextReview, autoScrollInterval)
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
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card p-8 md:p-12 relative"
        >
          <Quote className="absolute top-8 left-8 h-12 w-12 text-primary-500/30" />

          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary-500 mb-4">
                <Image
                  src={reviews[currentIndex].image || "/placeholder.svg"}
                  alt={reviews[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">{reviews[currentIndex].name}</h3>
              <p className="text-gray-300 text-sm">{reviews[currentIndex].role}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < reviews[currentIndex].rating ? "text-primary-500 fill-primary-500" : "text-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1">
              <blockquote className="text-lg md:text-xl text-gray-300 italic mb-6">
                "{reviews[currentIndex].content}"
              </blockquote>

              {reviews[currentIndex].program && (
                <div className="mb-4">
                  <span className="font-semibold text-foreground">Program:</span>{" "}
                  <span className="text-gray-300">{reviews[currentIndex].program}</span>
                </div>
              )}

              {reviews[currentIndex].improvement && (
                <div className="mb-4">
                  <span className="font-semibold text-foreground">Improvement:</span>{" "}
                  <span className="text-gray-300">{reviews[currentIndex].improvement}</span>
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-primary-900/30 hover:bg-primary-900/50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5 text-primary-500" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${idx === currentIndex ? "bg-primary-500" : "bg-gray-700"}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-primary-900/30 hover:bg-primary-900/50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5 text-primary-500" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
