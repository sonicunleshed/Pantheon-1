"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Star, Users } from "lucide-react"
import { TutorCarousel } from "@/components/tutor-carousel"
import { ReviewCarousel } from "@/components/review-carousel"

// Sample data for tutors
const tutors = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    image: "/placeholder.svg?height=200&width=200",
    subjects: ["Mathematics", "Physics", "SAT Prep"],
    education: "Ph.D. in Mathematics, MIT",
    scores: {
      sat: 1580,
    },
    bio: "With over 8 years of tutoring experience, Dr. Chen specializes in making complex mathematical concepts accessible to students of all levels. Her students consistently improve their scores by 150+ points.",
  },
  {
    id: 2,
    name: "James Wilson",
    image: "/placeholder.svg?height=200&width=200",
    subjects: ["English Literature", "Writing", "ACT Prep"],
    education: "M.A. in English, Stanford University",
    scores: {
      act: 36,
    },
    bio: "James has helped hundreds of students perfect their writing skills and achieve top scores on standardized tests. His approach focuses on critical thinking and effective communication.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    image: "/placeholder.svg?height=200&width=200",
    subjects: ["Chemistry", "Biology", "MCAT Prep"],
    education: "M.D. Candidate, Harvard Medical School",
    scores: {
      sat: 1570,
      act: 35,
    },
    bio: "Maria combines her deep knowledge of science with effective teaching strategies to help students excel in challenging STEM subjects and prepare for medical school admissions.",
  },
  {
    id: 4,
    name: "David Park",
    image: "/placeholder.svg?height=200&width=200",
    subjects: ["Computer Science", "Calculus", "AP Exams"],
    education: "B.S. in Computer Science, Princeton University",
    scores: {
      sat: 1600,
    },
    bio: "David specializes in helping students master computer science concepts and advanced mathematics. His students have gone on to attend top engineering programs nationwide.",
  },
  {
    id: 5,
    name: "Sophia Johnson",
    image: "/placeholder.svg?height=200&width=200",
    subjects: ["History", "Government", "Essay Writing"],
    education: "J.D., Yale Law School",
    scores: {
      act: 35,
    },
    bio: "Sophia helps students develop critical analysis skills and craft compelling arguments. Her background in law provides unique insights for students interested in humanities and social sciences.",
  },
]

// Sample data for reviews
const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    image: "/placeholder.svg?height=100&width=100",
    role: "High School Senior",
    rating: 5,
    content:
      "My SAT score improved by 250 points after just 3 months of tutoring. My tutor was patient, knowledgeable, and made learning enjoyable.",
    program: "SAT Prep Program",
    improvement: "1320 → 1570",
  },
  {
    id: 2,
    name: "Sophia Chen",
    image: "/placeholder.svg?height=100&width=100",
    role: "AP Calculus Student",
    rating: 5,
    content:
      "I was struggling with AP Calculus until I found Pantheon. My tutor helped me understand complex concepts and I ended up scoring a 5 on the exam!",
    program: "AP Course Support",
    improvement: "C+ → A",
  },
  {
    id: 3,
    name: "Marcus Williams",
    image: "/placeholder.svg?height=100&width=100",
    role: "College Applicant",
    rating: 5,
    content:
      "The college counseling services were invaluable. My counselor helped me craft compelling essays and prepare for interviews. I got into my dream school!",
    program: "College Application Coaching",
    improvement: "Accepted to Cornell University",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    image: "/placeholder.svg?height=100&width=100",
    role: "High School Junior",
    rating: 5,
    content:
      "The study skills coaching transformed my approach to learning. I'm now more organized, focused, and my grades have improved across all subjects.",
    program: "Academic Coaching",
    improvement: "3.2 GPA → 3.9 GPA",
  },
  {
    id: 5,
    name: "David Kim",
    image: "/placeholder.svg?height=100&width=100",
    role: "STEM Student",
    rating: 5,
    content:
      "My physics tutor made complex concepts easy to understand with real-world examples and interactive demonstrations. I now love a subject I used to dread!",
    program: "Subject Tutoring",
    improvement: "B- → A+",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Elevate Your Academic Success</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Our expert tutors help students achieve their academic goals with personalized learning plans and proven
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="button-primary">
                  Book Your Free Demo
                </Link>
                <Link href="/packages" className="button-secondary">
                  View Tutoring Packages
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-300">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-300">1000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-gray-300">Top 1% Tutors</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-background rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Students learning"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Carousel Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Expert Tutors</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              All our tutors scored 1560+ on the SAT or 35+ on the ACT and graduated from elite universities
            </p>
          </div>

          <TutorCarousel tutors={tutors} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-background rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Tutoring session"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose Pantheon?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Tutors",
                    description:
                      "All our tutors scored in the top 1% on standardized tests and graduated from elite universities.",
                  },
                  {
                    title: "Personalized Approach",
                    description:
                      "We create customized learning plans tailored to each student's unique needs and goals.",
                  },
                  {
                    title: "Proven Results",
                    description:
                      "Our students consistently improve their grades and test scores, with an average SAT score increase of 200+ points.",
                  },
                  {
                    title: "Comprehensive Resources",
                    description:
                      "Access to exclusive study materials, practice tests, and resources not available elsewhere.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-900/30 text-primary-500">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black/80 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Students Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from students who have transformed their academic journey with our tutoring services
            </p>
          </div>

          <ReviewCarousel reviews={reviews} />

          <div className="mt-12 text-center">
            <Link href="/testimonials" className="button-secondary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Book a free consultation with one of our expert tutors and discover how we can help you achieve your
            academic goals.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary-500 text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Free Demo Today
          </Link>
        </div>
      </section>
    </div>
  )
}
