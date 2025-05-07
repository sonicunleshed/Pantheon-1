"use client"

import Link from "next/link"
import Image from "next/image"
import { Award, CheckCircle, Search, Trophy, Medal, Book, Target } from "lucide-react"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"
import { CompetitionCategorySection } from "@/components/competition-card"
import { CompetitionTutorCard } from "@/components/competition-tutor-card"

export default function CompetitionsPage() {
  // Competition tutors data
  const competitionTutors = [
    {
      name: "Dr. Michael Chang",
      title: "Math & Science Competitions Coach",
      image: "/placeholder.svg?key=2i77t",
      background: "bg-[#2a9d8f]",
      colors: [[224, 228, 208]],
    },
    {
      name: "Sarah Johnson",
      title: "Debate & Public Speaking Coach",
      image: "/placeholder.svg?key=els2z",
      background: "bg-[#7DDBA3]",
      colors: [[224, 228, 208]],
    },
    {
      name: "Dr. Robert Williams",
      title: "Research Competition Mentor",
      image: "/placeholder.svg?key=a4j8r",
      background: "bg-[#57c99b]",
      colors: [[224, 228, 208]],
    },
  ]

  // Competition data organized by category
  const academicCompetitions = [
    {
      title: "FBLA",
      image: "/placeholder.svg?key=vpvt0",
      qualifications: "Business knowledge, leadership skills",
      candidateType: "High school students",
      competitionType: "Business & Leadership",
      timeFrame: "Annual, with regional and national levels",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
    {
      title: "USACO",
      image: "/placeholder.svg?key=xncj4",
      qualifications: "Programming skills, algorithm knowledge",
      candidateType: "High school students",
      competitionType: "Computer Science",
      timeFrame: "Four contests per year",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
  ]

  const debateCompetitions = [
    {
      title: "DEBATE",
      image: "/placeholder.svg?key=lui68",
      qualifications: "Public speaking, critical thinking",
      candidateType: "Middle and high school students",
      competitionType: "Speech & Debate",
      timeFrame: "Throughout academic year",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
    {
      title: "MODEL UN",
      image: "/placeholder.svg?key=xohpz",
      qualifications: "Diplomacy, research, public speaking",
      candidateType: "High school students",
      competitionType: "International Relations",
      timeFrame: "Conferences throughout the year",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
  ]

  const stemCompetitions = [
    {
      title: "ISEF",
      image: "/placeholder.svg?key=5wigm",
      qualifications: "Original research, scientific method",
      candidateType: "High school students",
      competitionType: "Science & Engineering",
      timeFrame: "Annual, with regional and national levels",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
    {
      title: "MATHCOUNTS",
      image: "/placeholder.svg?key=5d7n8",
      qualifications: "Mathematical problem-solving",
      candidateType: "Middle school students",
      competitionType: "Mathematics",
      timeFrame: "Annual competition series",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
  ]

  const writingCompetitions = [
    {
      title: "SCHOLASTIC",
      image: "/placeholder.svg?key=h8yfe",
      qualifications: "Creative writing, poetry, essays",
      candidateType: "Students grades 7-12",
      competitionType: "Writing & Art",
      timeFrame: "Annual submissions",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
    {
      title: "NCTE",
      image: "/placeholder.svg?key=14bnw",
      qualifications: "Excellence in writing",
      candidateType: "High school juniors",
      competitionType: "Writing",
      timeFrame: "Annual nominations",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#2a9d8f]",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2a9d8f] to-[#7DDBA3] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Competitions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
            Showcase your skills, challenge yourself, and stand out on college applications with prestigious academic
            competitions.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-[#2a9d8f]/50 rounded-lg border border-[#7DDBA3]/30">
              <input
                type="text"
                placeholder="Search competitions..."
                className="px-4 py-3 rounded-lg flex-grow bg-white border border-[#7DDBA3]/30 text-[#2a9d8f] focus:outline-none focus:ring-2 focus:ring-[#7DDBA3]"
              />
              <button className="px-6 py-3 bg-[#7DDBA3] text-white font-medium rounded-lg shadow-md hover:bg-[#57c99b] transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Tutors Section */}
      <section id="tutors" className="py-16 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2a9d8f]">Our Competition Experts</h2>
            <p className="text-lg text-[#2a9d8f] max-w-3xl mx-auto">
              Our specialized coaches have experience in winning and judging prestigious competitions
            </p>
          </div>

          <div className="py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto">
            {competitionTutors.map((tutor, index) => (
              <CompetitionTutorCard
                key={index}
                name={tutor.name}
                title={tutor.title}
                image={tutor.image}
                background={tutor.background}
                colors={tutor.colors}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Competitions by Category */}
      <CompetitionCategorySection
        title="Academic & Business Competitions"
        description="Showcase your knowledge and leadership skills in prestigious academic competitions"
        competitions={academicCompetitions}
      />

      <CompetitionCategorySection
        title="Debate & Public Speaking"
        description="Develop critical thinking and communication skills through competitive debate"
        competitions={debateCompetitions}
      />

      <CompetitionCategorySection
        title="STEM Competitions"
        description="Challenge yourself with science, technology, engineering, and mathematics competitions"
        competitions={stemCompetitions}
      />

      <CompetitionCategorySection
        title="Writing & Creative Competitions"
        description="Express yourself and showcase your writing talents in national competitions"
        competitions={writingCompetitions}
      />

      {/* Competition Preparation */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#2a9d8f]">How We Help You Prepare</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Competition Selection",
                    description:
                      "We help you identify competitions that align with your strengths, interests, and college goals.",
                    icon: <Target className="h-6 w-6" />,
                  },
                  {
                    title: "Personalized Training",
                    description:
                      "Our expert coaches provide specialized training and practice materials for your specific competition.",
                    icon: <Book className="h-6 w-6" />,
                  },
                  {
                    title: "Project Development",
                    description:
                      "For research competitions, we guide you through the process of developing a compelling project.",
                    icon: <CheckCircle className="h-6 w-6" />,
                  },
                  {
                    title: "Mock Competitions",
                    description:
                      "Practice in simulated competition environments to build confidence and refine your skills.",
                    icon: <Trophy className="h-6 w-6" />,
                  },
                  {
                    title: "Feedback and Improvement",
                    description:
                      "Receive detailed feedback and targeted strategies to continuously improve your performance.",
                    icon: <Medal className="h-6 w-6" />,
                  },
                ].map((service, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0f5ed] text-[#2a9d8f]">
                        {service.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#2a9d8f]">{service.title}</h3>
                      <p className="mt-2 text-[#2a9d8f]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/packages"
                  className="px-6 py-3 bg-[#7DDBA3] text-white font-medium rounded-lg shadow-md hover:bg-[#57c99b] transition-all duration-300 inline-flex items-center"
                >
                  View Competition Prep Packages
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7DDBA3] to-[#2a9d8f] rounded-lg blur opacity-75"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?key=1yc9k"
                  alt="Students preparing for competition"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-[#2a9d8f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Competition Success Stories</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Read about our students who achieved remarkable success in academic competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ryan Zhang",
                competition: "International Math Olympiad",
                achievement: "Gold Medal",
                quote:
                  "The structured training program and practice problems helped me develop advanced problem-solving skills that were crucial for the IMO.",
                outcome: "Studying Mathematics at MIT",
                image: "/asian-male-student.png",
              },
              {
                name: "Aisha Patel",
                competition: "Regeneron Science Talent Search",
                achievement: "Finalist",
                quote:
                  "My mentor guided me through the research process and helped me refine my project on sustainable energy solutions.",
                outcome: "Accepted to Stanford for Environmental Engineering",
                image: "/placeholder.svg?key=ugf50",
              },
              {
                name: "Carlos Rodriguez",
                competition: "National Speech & Debate Tournament",
                achievement: "National Champion in Original Oratory",
                quote:
                  "The weekly practice sessions and detailed feedback transformed my public speaking abilities and gave me the confidence to succeed.",
                outcome: "Studying Political Science at Yale",
                image: "/placeholder.svg?key=vu62x",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={150}
                    height={150}
                    className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-[#7DDBA3]"
                  />
                  <h3 className="text-xl font-bold mb-1 text-[#2a9d8f]">{story.name}</h3>
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[#7DDBA3] mr-1" />
                    <p className="text-[#7DDBA3] font-medium">
                      {story.competition} - {story.achievement}
                    </p>
                  </div>
                  <p className="text-[#2a9d8f] italic mb-3">"{story.quote}"</p>
                  <p className="text-sm text-[#6c757d]">{story.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2a9d8f] to-[#7DDBA3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel in Academic Competitions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Our expert coaches can help you prepare for and succeed in prestigious academic competitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <InteractiveHoverButton href="/contact" className="border-white text-white hover:text-[#2a9d8f]">
              Schedule a Consultation
            </InteractiveHoverButton>
            <Link
              href="/packages"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300"
            >
              View Competition Prep Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
