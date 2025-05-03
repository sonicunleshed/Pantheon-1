import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Calendar, CheckCircle, Clock, Filter, Search, Trophy } from "lucide-react"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"

export default function CompetitionsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Competitions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Showcase your skills, challenge yourself, and stand out on college applications with prestigious academic
            competitions.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-black/50 rounded-lg border border-gray-800">
              <input
                type="text"
                placeholder="Search competitions..."
                className="px-4 py-3 rounded-lg flex-grow bg-background border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Competitions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Competitions</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Prestigious competitions that challenge your skills and enhance your college applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "International Science and Engineering Fair (ISEF)",
                description:
                  "The world's largest pre-college science competition, where students present original research projects.",
                deadline: "Varies by region",
                eligibility: "Grades 9-12",
                category: "Science",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "American Mathematics Competitions (AMC)",
                description: "A series of contests that lead to the International Mathematical Olympiad.",
                deadline: "January 2024",
                eligibility: "Grades 8-12",
                category: "Mathematics",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "National Speech & Debate Tournament",
                description: "The largest academic competition in the world, focusing on public speaking and debate.",
                deadline: "Qualifying tournaments throughout the year",
                eligibility: "Grades 9-12",
                category: "Speech & Debate",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Regeneron Science Talent Search",
                description:
                  "America's oldest and most prestigious science and math competition for high school seniors.",
                deadline: "November 2023",
                eligibility: "Grade 12",
                category: "Science & Math",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "National History Day",
                description:
                  "A year-long academic program focused on historical research, interpretation, and creative expression.",
                deadline: "Varies by region",
                eligibility: "Grades 6-12",
                category: "History",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "USA Computing Olympiad (USACO)",
                description:
                  "A computer programming competition consisting of a series of online contests and a training camp.",
                deadline: "Multiple contests throughout the year",
                eligibility: "Grades 9-12",
                category: "Computer Science",
                image: "/placeholder.svg?height=200&width=350",
              },
            ].map((competition, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={competition.image || "/placeholder.svg"}
                    alt={competition.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary-900/70 text-primary-500 text-xs px-2 py-1 rounded-full">
                    {competition.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{competition.title}</h3>
                  <p className="text-gray-300 mb-4">{competition.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Deadline: {competition.deadline}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Trophy className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Eligibility: {competition.eligibility}</span>
                  </div>
                  <Link href="#" className="button-primary inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#" className="button-secondary">
              View All Competitions
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">Browse by Category</h2>
              <p className="text-lg text-gray-300">Find competitions in your areas of interest</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 border border-primary-500 rounded-lg text-primary-500 hover:bg-primary-900/20">
                <Filter className="h-5 w-5 mr-2" /> Filter Options
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mathematics",
                count: 24,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Science",
                count: 38,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Computer Science",
                count: 19,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Writing & Essay",
                count: 22,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Speech & Debate",
                count: 17,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "History & Social Studies",
                count: 15,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Arts & Creativity",
                count: 26,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Business & Entrepreneurship",
                count: 14,
                image: "/placeholder.svg?height=200&width=350",
              },
            ].map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-md">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-primary-400 text-sm">{category.count} competitions</p>
                </div>
                <Link href="#" className="absolute inset-0" aria-label={`View ${category.title} competitions`}></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Preparation */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">How We Help You Prepare</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Competition Selection",
                    description:
                      "We help you identify competitions that align with your strengths, interests, and college goals.",
                  },
                  {
                    title: "Personalized Training",
                    description:
                      "Our expert coaches provide specialized training and practice materials for your specific competition.",
                  },
                  {
                    title: "Project Development",
                    description:
                      "For research competitions, we guide you through the process of developing a compelling project.",
                  },
                  {
                    title: "Mock Competitions",
                    description:
                      "Practice in simulated competition environments to build confidence and refine your skills.",
                  },
                  {
                    title: "Feedback and Improvement",
                    description:
                      "Receive detailed feedback and targeted strategies to continuously improve your performance.",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-900/30 text-primary-500">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/packages" className="button-primary">
                  View Competition Prep Packages
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
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
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Competition Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
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
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Aisha Patel",
                competition: "Regeneron Science Talent Search",
                achievement: "Finalist",
                quote:
                  "My mentor guided me through the research process and helped me refine my project on sustainable energy solutions.",
                outcome: "Accepted to Stanford for Environmental Engineering",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Carlos Rodriguez",
                competition: "National Speech & Debate Tournament",
                achievement: "National Champion in Original Oratory",
                quote:
                  "The weekly practice sessions and detailed feedback transformed my public speaking abilities and gave me the confidence to succeed.",
                outcome: "Studying Political Science at Yale",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((story, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={150}
                    height={150}
                    className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-primary-500"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">{story.name}</h3>
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-primary-500 mr-1" />
                    <p className="text-primary-500 font-medium">
                      {story.competition} - {story.achievement}
                    </p>
                  </div>
                  <p className="text-gray-300 italic mb-3">"{story.quote}"</p>
                  <p className="text-sm text-gray-400">{story.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#" className="button-secondary">
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Upcoming Competition Deadlines</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't miss these important dates for major academic competitions
            </p>
          </div>

          <div className="overflow-hidden shadow ring-1 ring-gray-800 rounded-lg">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-black">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-6">
                    Competition
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                    Deadline
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                    Eligibility
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-card">
                {[
                  {
                    name: "American Mathematics Competition 10/12",
                    category: "Mathematics",
                    deadline: "January 15, 2024",
                    eligibility: "Grades 10-12",
                  },
                  {
                    name: "Regeneron Science Talent Search",
                    category: "Science",
                    deadline: "November 10, 2023",
                    eligibility: "Grade 12",
                  },
                  {
                    name: "National History Day",
                    category: "History",
                    deadline: "February 1, 2024",
                    eligibility: "Grades 6-12",
                  },
                  {
                    name: "USA Biology Olympiad",
                    category: "Biology",
                    deadline: "January 20, 2024",
                    eligibility: "Grades 9-12",
                  },
                  {
                    name: "National Speech & Debate Tournament",
                    category: "Speech & Debate",
                    deadline: "Varies by region",
                    eligibility: "Grades 9-12",
                  },
                ].map((competition, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-foreground sm:pl-6">
                      {competition.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{competition.category}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-primary-500 mr-1" />
                        {competition.deadline}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{competition.eligibility}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link href="#" className="text-primary-500 hover:text-primary-400">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link href="#" className="button-secondary">
              View All Deadlines
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel in Academic Competitions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our expert coaches can help you prepare for and succeed in prestigious academic competitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <InteractiveHoverButton href="/contact" className="border-primary text-primary hover:text-white">
              Schedule a Consultation
            </InteractiveHoverButton>
            <Link
              href="/packages"
              className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-bold rounded-lg shadow-lg hover:bg-primary-900/20 transition-all duration-300"
            >
              View Competition Prep Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
