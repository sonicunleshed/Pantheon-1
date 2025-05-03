"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import Image from "next/image"
import { ArrowRight, Award, BookOpen, GraduationCap, Star } from "lucide-react"
import { AdvancedButton } from "@/components/advanced-button"

// Consultant data
const consultants = [
  {
    name: "Dr. Emily Chen",
    title: "Academic Excellence Consultant",
    specialty: "SAT/ACT Preparation",
    image: "/placeholder.svg?height=400&width=400",
    background: "bg-[#556b2f]",
    colors: [[224, 228, 208]],
    description:
      "Former Harvard admissions officer with 15+ years of experience helping students achieve top scores on standardized tests.",
    achievements: [
      "Helped 500+ students improve SAT scores by 200+ points",
      "Published author on test preparation strategies",
      "Ph.D. in Education from Stanford University",
    ],
  },
  {
    name: "James Wilson",
    title: "College Application Strategist",
    specialty: "Essay Writing & Application Review",
    image: "/placeholder.svg?height=400&width=400",
    background: "bg-[#6b8339]",
    colors: [[224, 228, 208]],
    description:
      "Expert in crafting compelling college application narratives that help students stand out to admissions committees.",
    achievements: [
      "95% success rate for top-20 university admissions",
      "Former writing professor at Yale University",
      "Author of 'The Perfect College Essay'",
    ],
  },
  {
    name: "Dr. Maria Rodriguez",
    title: "STEM Education Specialist",
    specialty: "Research Project Development",
    image: "/placeholder.svg?height=400&width=400",
    background: "bg-[#8fa069]",
    colors: [[224, 228, 208]],
    description: "Guides students in developing impressive research projects and preparing for careers in STEM fields.",
    achievements: [
      "Mentored 30+ Intel Science Fair finalists",
      "Ph.D. in Biochemistry from MIT",
      "Former research scientist at NASA",
    ],
  },
]

export default function ConsultingPage() {
  return (
    <div className="bg-[#f5f5f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f5f5f0] to-[#eaeae0] text-[#556b2f] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Academic Consultants</h1>
          <p className="text-xl max-w-3xl mx-auto text-[#556b2f] mb-8">
            Work with our team of specialized consultants to achieve your academic and career goals.
          </p>
          <AdvancedButton
            href="#consultants"
            className="border-gray-300 text-gray-700 hover:text-white"
            variant="interactive"
          >
            Meet Our Consultants
          </AdvancedButton>
        </div>
      </section>

      {/* Consultants Section */}
      <section id="consultants" className="py-16 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#556b2f]">Our Expert Consultants</h2>
            <p className="text-lg text-[#556b2f] max-w-3xl mx-auto">
              Each consultant brings specialized expertise to help you excel in your academic journey.
            </p>
          </div>

          <div className="py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto">
            {consultants.map((consultant, index) => (
              <ConsultantCard
                key={index}
                name={consultant.name}
                title={consultant.title}
                image={consultant.image}
                background={consultant.background}
                colors={consultant.colors}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Details Section */}
      <section className="py-16 bg-[#eaeae0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#556b2f]">How Our Consultants Help</h2>
            <p className="text-lg text-[#556b2f] max-w-3xl mx-auto">
              Discover the specialized services our consultants provide to help you achieve your goals.
            </p>
          </div>

          {consultants.map((consultant, index) => (
            <div
              key={index}
              className={`mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#556b2f] to-[#8fa069] rounded-lg blur opacity-75"></div>
                <div className="relative bg-[#f5f5f0] rounded-lg overflow-hidden shadow-xl p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#e0e4d0] shadow-lg">
                      <Image
                        src={consultant.image || "/placeholder.svg"}
                        alt={consultant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-[#556b2f]">{consultant.name}</h3>
                      <p className="text-[#6b8339]">{consultant.title}</p>
                      <p className="text-[#8fa069] font-medium">{consultant.specialty}</p>
                    </div>
                  </div>
                  <p className="text-[#556b2f] mb-6">{consultant.description}</p>
                  <div className="space-y-2">
                    {consultant.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <Award className="h-5 w-5 text-[#8fa069] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[#556b2f]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#556b2f]">
                  {index === 0
                    ? "Test Preparation Excellence"
                    : index === 1
                      ? "College Application Strategy"
                      : "Research & STEM Guidance"}
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0e4d0] text-[#556b2f]">
                          {index === 0 ? (
                            <Star className="h-6 w-6" />
                          ) : index === 1 ? (
                            <BookOpen className="h-6 w-6" />
                          ) : (
                            <GraduationCap className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-semibold text-[#556b2f]">
                          {index === 0
                            ? item === 1
                              ? "Personalized Test Strategies"
                              : item === 2
                                ? "Targeted Content Review"
                                : "Practice Test Analysis"
                            : index === 1
                              ? item === 1
                                ? "Essay Development"
                                : item === 2
                                  ? "Application Positioning"
                                  : "Interview Preparation"
                              : item === 1
                                ? "Research Project Design"
                                : item === 2
                                  ? "STEM Competition Coaching"
                                  : "Scientific Writing Support"}
                        </h4>
                        <p className="mt-2 text-[#556b2f]">
                          {index === 0
                            ? item === 1
                              ? "Customized study plans based on your learning style and strengths."
                              : item === 2
                                ? "Focused review of key concepts you need to master."
                                : "Detailed analysis of practice test results to target improvement areas."
                            : index === 1
                              ? item === 1
                                ? "Guidance on crafting compelling personal statements and supplemental essays."
                                : item === 2
                                  ? "Strategic positioning of your experiences and achievements."
                                  : "Preparation for admissions interviews with mock sessions and feedback."
                              : item === 1
                                ? "Development of original research projects with real-world applications."
                                : item === 2
                                  ? "Preparation for science fairs and STEM competitions."
                                  : "Assistance with writing research papers and scientific abstracts."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <AdvancedButton
                    href="/contact"
                    className="border-primary text-primary hover:text-white"
                    variant="interactive"
                  >
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </AdvancedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#556b2f] to-[#6b8339] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with an Expert?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a free initial consultation to discuss your goals and find the perfect consultant for your needs.
          </p>
          <AdvancedButton href="/contact" className="border-white text-white hover:text-white" variant="pulsating">
            Book Your Free Consultation
          </AdvancedButton>
        </div>
      </section>
    </div>
  )
}

// Consultant Card Component
const ConsultantCard = ({ name, title, image, background, colors }) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#d0d0c0] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-[#f5f5f0]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#556b2f]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#556b2f]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#556b2f]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#556b2f]" />

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
        <h2 className="text-[#556b2f] text-2xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white transition duration-200 text-center">
          {name}
        </h2>
        <p className="text-[#6b8339] opacity-100 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-white/90 transition duration-200 text-center mt-2">
          {title}
        </p>
        <div className="mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 text-center">
          <AdvancedButton
            href="/contact"
            className="px-4 py-2 bg-[#f5f5f0] text-[#556b2f] rounded-md hover:bg-white transition-all duration-300"
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
