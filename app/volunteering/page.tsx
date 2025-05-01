import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Globe, Heart, MapPin, Search, Users } from "lucide-react"

export default function VolunteeringPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteering Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Discover meaningful volunteer experiences that will make a difference in your community and strengthen your
            college applications.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-black/50 rounded-lg border border-gray-800">
              <input
                type="text"
                placeholder="Search volunteer opportunities..."
                className="px-4 py-3 rounded-lg flex-grow bg-background border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Volunteer Opportunities</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Impactful ways to serve your community and develop valuable skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Habitat for Humanity Youth Program",
                organization: "Habitat for Humanity",
                description: "Help build homes for families in need while learning construction and teamwork skills.",
                commitment: "Flexible, weekends available",
                location: "Nationwide",
                category: "Community Development",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Hospital Junior Volunteer Program",
                organization: "Children's Hospital",
                description: "Assist hospital staff and bring comfort to young patients and their families.",
                commitment: "4-8 hours per week, 3-month minimum",
                location: "Various Hospitals",
                category: "Healthcare",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Environmental Conservation Project",
                organization: "Nature Conservancy",
                description: "Participate in habitat restoration, trail maintenance, and environmental education.",
                commitment: "Weekends, seasonal opportunities",
                location: "National Parks and Reserves",
                category: "Environment",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Literacy Tutoring Program",
                organization: "Reading Partners",
                description:
                  "Help elementary school students improve their reading skills through one-on-one tutoring.",
                commitment: "2-4 hours per week, school year",
                location: "Local Schools",
                category: "Education",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Food Bank Volunteer",
                organization: "Feeding America",
                description: "Sort donations, pack food boxes, and help distribute meals to those in need.",
                commitment: "Flexible hours, ongoing",
                location: "Community Food Banks",
                category: "Hunger Relief",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Animal Shelter Assistant",
                organization: "Humane Society",
                description: "Care for shelter animals, assist with adoptions, and help with facility maintenance.",
                commitment: "4 hours per week, 2-month minimum",
                location: "Local Animal Shelters",
                category: "Animal Welfare",
                image: "/placeholder.svg?height=200&width=350",
              },
            ].map((opportunity, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary-900/70 text-primary-500 text-xs px-2 py-1 rounded-full">
                    {opportunity.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{opportunity.title}</h3>
                  <p className="text-primary-500 mb-3">{opportunity.organization}</p>
                  <p className="text-gray-300 mb-4">{opportunity.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Commitment: {opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                    <span>Location: {opportunity.location}</span>
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
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Volunteer by Category</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find volunteer opportunities that match your interests and passions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Healthcare",
                description: "Volunteer in hospitals, clinics, and healthcare facilities.",
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                count: 42,
              },
              {
                title: "Education",
                description: "Tutor students, assist teachers, and support educational programs.",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                count: 38,
              },
              {
                title: "Environment",
                description: "Participate in conservation, clean-ups, and sustainability initiatives.",
                icon: <Globe className="h-10 w-10 text-primary-500" />,
                count: 27,
              },
              {
                title: "Community Service",
                description: "Help with community development and local improvement projects.",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                count: 31,
              },
              {
                title: "Animal Welfare",
                description: "Assist at animal shelters, wildlife rehabilitation centers, and more.",
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                count: 23,
              },
              {
                title: "Arts & Culture",
                description: "Support museums, theaters, and cultural organizations.",
                icon: <Globe className="h-10 w-10 text-primary-500" />,
                count: 19,
              },
              {
                title: "Hunger Relief",
                description: "Help at food banks, soup kitchens, and meal delivery programs.",
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                count: 26,
              },
              {
                title: "Senior Care",
                description: "Provide companionship and assistance to elderly individuals.",
                icon: <Users className="h-10 w-10 text-primary-500" />,
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

      {/* Benefits of Volunteering */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Students volunteering"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Benefits of Volunteering</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Strengthen College Applications",
                    description:
                      "Demonstrate commitment, leadership, and community engagement to college admissions officers.",
                  },
                  {
                    title: "Develop New Skills",
                    description:
                      "Gain practical experience, leadership abilities, and interpersonal skills through hands-on service.",
                  },
                  {
                    title: "Explore Career Interests",
                    description: "Test potential career paths and gain exposure to different fields and professions.",
                  },
                  {
                    title: "Build Your Network",
                    description: "Connect with professionals, mentors, and peers who share your interests and values.",
                  },
                  {
                    title: "Make a Difference",
                    description:
                      "Create positive change in your community and develop a sense of purpose and fulfillment.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-900/30 text-primary-500">
                        <Heart className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-2 text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="#" className="button-primary">
                  Find Volunteer Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Volunteer Impact Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Read about how volunteering has transformed our students' lives and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Thompson",
                program: "Habitat for Humanity",
                quote:
                  "Volunteering with Habitat for Humanity taught me construction skills, teamwork, and the profound impact of providing safe housing for families in need.",
                outcome: "Accepted to Cornell University for Architecture",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Marcus Lee",
                program: "Children's Hospital Volunteer",
                quote:
                  "My time at the children's hospital confirmed my passion for pediatric medicine and taught me the importance of compassion in healthcare.",
                outcome: "Pre-med student at UCLA",
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
              Read More Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our counselors can help you find volunteer opportunities that align with your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-500 text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary-600 transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/packages"
              className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-bold rounded-lg shadow-lg hover:bg-primary-900/20 transition-all duration-300"
            >
              View Service Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
