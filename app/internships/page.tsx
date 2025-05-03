import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Calendar, Filter, MapPin, Search } from "lucide-react"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"

export default function InternshipsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Internship Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Discover valuable internship experiences that will enhance your college applications and build your
            professional skills.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-black/50 rounded-lg border border-gray-800">
              <input
                type="text"
                placeholder="Search internships..."
                className="px-4 py-3 rounded-lg flex-grow bg-background border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Internships</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Prestigious opportunities for high school students to gain real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Computer Science Summer Institute",
                company: "Google",
                description:
                  "A three-week introduction to computer science for high school seniors with a passion for technology.",
                deadline: "March 15, 2024",
                location: "Multiple Locations",
                paid: true,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Bank of America Student Leaders Program",
                company: "Bank of America",
                description:
                  "An eight-week paid internship for high school students focused on leadership and community engagement.",
                deadline: "January 31, 2024",
                location: "Nationwide",
                paid: true,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Microsoft High School Internship",
                company: "Microsoft",
                description:
                  "A summer internship program for high school students interested in software development and technology.",
                deadline: "February 28, 2024",
                location: "Redmond, WA",
                paid: true,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "NIH Summer Internship Program",
                company: "National Institutes of Health",
                description: "A summer research program for high school students interested in biomedical sciences.",
                deadline: "March 1, 2024",
                location: "Bethesda, MD",
                paid: true,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "The Met High School Internship",
                company: "Metropolitan Museum of Art",
                description:
                  "A semester-long internship for high school students interested in art, culture, and museum operations.",
                deadline: "April 15, 2024",
                location: "New York, NY",
                paid: false,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "NASA High School Internship",
                company: "NASA",
                description:
                  "A summer internship program for high school students interested in space, engineering, and science.",
                deadline: "March 1, 2024",
                location: "Multiple NASA Centers",
                paid: true,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((internship, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Image
                      src={internship.image || "/placeholder.svg"}
                      alt={internship.company}
                      width={80}
                      height={80}
                      className="rounded-md mr-4 border border-gray-700"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{internship.title}</h3>
                      <p className="text-primary-500">{internship.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{internship.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Deadline: {internship.deadline}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Location: {internship.location}</span>
                  </div>
                  <div className="flex items-center text-sm mb-4">
                    <Briefcase className="h-4 w-4 mr-2 text-primary-500" />
                    <span className={internship.paid ? "text-green-500" : "text-gray-400"}>
                      {internship.paid ? "Paid Internship" : "Unpaid Internship"}
                    </span>
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
              View All Internships
            </Link>
          </div>
        </div>
      </section>

      {/* Internship Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">Browse by Category</h2>
              <p className="text-lg text-gray-300">Find internships in your field of interest</p>
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
                title: "Technology",
                count: 42,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Business & Finance",
                count: 38,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Healthcare & Medicine",
                count: 27,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Arts & Media",
                count: 23,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Science & Research",
                count: 31,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Government & Public Service",
                count: 19,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Engineering",
                count: 26,
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Non-Profit & Social Impact",
                count: 18,
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
                  <p className="text-primary-400 text-sm">{category.count} opportunities</p>
                </div>
                <Link href="#" className="absolute inset-0" aria-label={`View ${category.title} internships`}></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Internship Application Tips</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Start Early",
                    description:
                      "Many prestigious internships have early deadlines. Begin your search and application process at least 6 months in advance.",
                  },
                  {
                    title: "Tailor Your Resume",
                    description:
                      "Customize your resume for each internship, highlighting relevant skills and experiences that match the position.",
                  },
                  {
                    title: "Craft a Compelling Cover Letter",
                    description:
                      "Write a personalized cover letter that explains why you're interested in the specific organization and role.",
                  },
                  {
                    title: "Prepare for Interviews",
                    description:
                      "Research the organization, practice common interview questions, and prepare examples of your skills and experiences.",
                  },
                  {
                    title: "Follow Up",
                    description:
                      "Send a thank-you note after interviews and follow up professionally if you haven't heard back within the expected timeframe.",
                  },
                ].map((tip, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-900/30 text-primary-500 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{tip.title}</h3>
                      <p className="mt-2 text-gray-300">{tip.description}</p>
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
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Student in internship"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from students who secured competitive internships with our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                internship: "Google CSSI",
                quote:
                  "The application guidance I received helped me stand out among thousands of applicants. My Google internship was life-changing!",
                outcome: "Now studying Computer Science at Stanford",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Sophia Garcia",
                internship: "NIH Summer Program",
                quote:
                  "The interview prep sessions gave me the confidence I needed. My NIH internship confirmed my passion for medical research.",
                outcome: "Accepted to Johns Hopkins pre-med program",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "David Kim",
                internship: "Bank of America Student Leaders",
                quote:
                  "The resume review service transformed my application. My internship taught me valuable leadership and financial skills.",
                outcome: "Studying Business at NYU Stern",
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
                  <p className="text-primary-500 font-medium mb-3">{story.internship}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Land Your Dream Internship?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our expert counselors can help you find and apply for internships that align with your interests and career
            goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <InteractiveHoverButton href="/contact" className="border-primary text-primary hover:text-white">
              Schedule a Consultation
            </InteractiveHoverButton>
            <Link
              href="/packages"
              className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-bold rounded-lg shadow-lg hover:bg-primary-900/20 transition-all duration-300"
            >
              View Internship Prep Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
