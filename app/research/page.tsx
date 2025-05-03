import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, FileText, GraduationCap, Search, Users } from "lucide-react"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"

export default function ResearchPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Discover and apply for prestigious research programs that will enhance your college applications and
            academic experience.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-black/50 rounded-lg border border-gray-800">
              <input
                type="text"
                placeholder="Search research opportunities..."
                className="px-4 py-3 rounded-lg flex-grow bg-background border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Research Programs</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Prestigious opportunities for high school students to engage in meaningful research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MIT Research Science Institute",
                description:
                  "A summer research program for high school students at MIT, where participants conduct original scientific research.",
                deadline: "December 15, 2023",
                location: "Cambridge, MA",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Stanford Institutes of Medicine Summer Research Program",
                description:
                  "An eight-week program for high school students interested in medicine and bioscience research.",
                deadline: "February 1, 2024",
                location: "Stanford, CA",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "NASA High School Internship Program",
                description: "Research opportunities for high school students at NASA facilities across the country.",
                deadline: "March 1, 2024",
                location: "Various Locations",
                image: "/placeholder.svg?height=200&width=350",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{program.title}</h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Deadline: {program.deadline}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <GraduationCap className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Location: {program.location}</span>
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
              View All Featured Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Research Categories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore research opportunities by field of interest
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "STEM Research",
                description: "Science, Technology, Engineering, and Mathematics research opportunities.",
                icon: <BookOpen className="h-10 w-10 text-primary-500" />,
                count: 42,
              },
              {
                title: "Medical & Health Sciences",
                description: "Research in medicine, public health, and biomedical sciences.",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                count: 38,
              },
              {
                title: "Social Sciences",
                description: "Psychology, sociology, economics, and political science research.",
                icon: <FileText className="h-10 w-10 text-primary-500" />,
                count: 27,
              },
              {
                title: "Humanities",
                description: "Research in history, literature, philosophy, and the arts.",
                icon: <GraduationCap className="h-10 w-10 text-primary-500" />,
                count: 23,
              },
              {
                title: "Environmental Science",
                description: "Research on environmental issues, sustainability, and conservation.",
                icon: <BookOpen className="h-10 w-10 text-primary-500" />,
                count: 19,
              },
              {
                title: "Computer Science",
                description: "Research in artificial intelligence, data science, and programming.",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                count: 31,
              },
              {
                title: "Engineering",
                description: "Research in various engineering disciplines and applications.",
                icon: <FileText className="h-10 w-10 text-primary-500" />,
                count: 26,
              },
              {
                title: "Business & Economics",
                description: "Research in business, finance, entrepreneurship, and economics.",
                icon: <GraduationCap className="h-10 w-10 text-primary-500" />,
                count: 18,
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-primary-500/50"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{category.count} opportunities</span>
                  <Link href="#" className="text-primary-500 hover:text-primary-400">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">How to Apply for Research Programs</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Identify Your Research Interests",
                    description:
                      "Determine which fields of study interest you most and align with your academic goals.",
                  },
                  {
                    title: "2. Research Available Programs",
                    description:
                      "Browse our database of research opportunities and filter by field, location, and deadline.",
                  },
                  {
                    title: "3. Prepare Your Application Materials",
                    description:
                      "Create a compelling resume, write a strong personal statement, and secure letters of recommendation.",
                  },
                  {
                    title: "4. Submit Applications Before Deadlines",
                    description: "Complete all application requirements and submit well before the deadline.",
                  },
                  {
                    title: "5. Prepare for Interviews",
                    description:
                      "If selected for an interview, research the program thoroughly and practice your responses.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-900/30 text-primary-500 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="#" className="button-primary">
                  Get Application Guidance
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Students conducting research"
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Read about our students who secured prestigious research opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Emily Chen",
                program: "MIT Research Science Institute",
                quote:
                  "Working alongside MIT researchers on cutting-edge projects was an incredible experience that solidified my passion for neuroscience.",
                outcome: "Now studying Neuroscience at Harvard University",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Jason Rodriguez",
                program: "NASA High School Internship",
                quote:
                  "My NASA internship allowed me to contribute to actual space mission projects and work with world-class scientists and engineers.",
                outcome: "Accepted to Caltech for Aerospace Engineering",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6 border border-gray-800"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={150}
                    height={150}
                    className="rounded-full w-24 h-24 object-cover mx-auto md:mx-0 border-2 border-primary-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{story.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{story.program}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Finding the Right Research Opportunity?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our expert counselors can help you identify and apply for research programs that align with your interests
            and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <InteractiveHoverButton href="/contact" className="border-primary text-primary hover:text-white">
              Schedule a Consultation
            </InteractiveHoverButton>
            <Link
              href="/packages"
              className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-bold rounded-lg shadow-lg hover:bg-primary-900/20 transition-all duration-300"
            >
              View Research Prep Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
