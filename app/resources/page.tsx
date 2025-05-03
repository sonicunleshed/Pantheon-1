import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Download, FileText, Video } from "lucide-react"
import { InteractiveHoverButton } from "@/components/interactive-hover-button"

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Resources</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
            Access our comprehensive collection of study materials, practice tests, and guides to support your academic
            journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#study-guides"
              className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300"
            >
              Study Guides
            </a>
            <a
              href="#practice-tests"
              className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300"
            >
              Practice Tests
            </a>
            <a
              href="#video-tutorials"
              className="px-6 py-3 bg-primary-500 text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary-600 transition-all duration-300"
            >
              Video Tutorials
            </a>
          </div>
        </div>
      </section>

      {/* Study Guides Section */}
      <section id="study-guides" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Study Guides</h2>
            <p className="text-lg text-[#3d4d21] max-w-3xl mx-auto">
              Comprehensive guides to help you master key concepts and excel in your studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SAT Math Study Guide",
                description: "Master key concepts and strategies for the SAT Math section.",
                icon: <BookOpen className="h-8 w-8 text-primary-500" />,
                category: "SAT/ACT",
              },
              {
                title: "AP Biology Review",
                description: "Comprehensive review of all AP Biology topics with practice questions.",
                icon: <BookOpen className="h-8 w-8 text-primary-500" />,
                category: "AP Courses",
              },
              {
                title: "College Essay Writing Guide",
                description: "Step-by-step guide to crafting compelling college application essays.",
                icon: <FileText className="h-8 w-8 text-primary-500" />,
                category: "College Prep",
              },
              {
                title: "ACT Science Strategies",
                description: "Effective strategies to improve your score on the ACT Science section.",
                icon: <BookOpen className="h-8 w-8 text-primary-500" />,
                category: "SAT/ACT",
              },
              {
                title: "AP Calculus Formula Sheet",
                description: "Complete formula reference for AP Calculus AB and BC.",
                icon: <FileText className="h-8 w-8 text-primary-500" />,
                category: "AP Courses",
              },
              {
                title: "Study Skills Handbook",
                description: "Develop effective study habits and time management skills.",
                icon: <BookOpen className="h-8 w-8 text-primary-500" />,
                category: "General",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-900/30 text-primary-500 rounded-full mb-4">
                    {resource.category}
                  </span>
                  <div className="flex items-start mb-4">
                    {resource.icon}
                    <h3 className="text-xl font-bold ml-2 text-foreground">{resource.title}</h3>
                  </div>
                  <p className="text-[#3d4d21] mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary-500 font-medium hover:text-primary-400"
                    >
                      Download PDF <Download className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#" className="button-primary">
              View All Study Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Tests Section */}
      <section id="practice-tests" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Practice Tests</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Realistic practice tests to help you prepare for exams and assess your knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Length SAT Practice Test",
                description: "Complete SAT practice test with answer key and detailed explanations.",
                difficulty: "Medium",
              },
              {
                title: "ACT English Section Test",
                description: "Practice test focusing on the ACT English section with timing guidelines.",
                difficulty: "Medium",
              },
              {
                title: "AP Chemistry Mock Exam",
                description: "Comprehensive AP Chemistry practice exam with free response questions.",
                difficulty: "Hard",
              },
              {
                title: "SAT Math No-Calculator Test",
                description: "Practice test for the SAT Math No-Calculator section.",
                difficulty: "Medium",
              },
              {
                title: "AP US History DBQ Practice",
                description: "Document-based question practice for AP US History students.",
                difficulty: "Hard",
              },
              {
                title: "ACT Science Practice Test",
                description: "Full ACT Science section with passages and questions.",
                difficulty: "Medium",
              },
            ].map((test, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-foreground">{test.title}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        test.difficulty === "Easy"
                          ? "bg-green-900/30 text-green-500"
                          : test.difficulty === "Medium"
                            ? "bg-primary-900/30 text-primary-500"
                            : "bg-red-900/30 text-red-500"
                      }`}
                    >
                      {test.difficulty}
                    </span>
                  </div>
                  <p className="text-[#3d4d21] mb-4">{test.description}</p>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary-500 font-medium hover:text-primary-400"
                    >
                      Download <Download className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center text-primary-500 font-medium hover:text-primary-400"
                    >
                      Take Online <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#" className="button-primary">
              View All Practice Tests
            </Link>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section id="video-tutorials" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Video Tutorials</h2>
            <p className="text-lg text-[#3d4d21] max-w-3xl mx-auto">
              Watch our expert tutors explain complex concepts in easy-to-understand video lessons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SAT Math: Quadratic Equations",
                description: "Learn how to solve quadratic equations quickly for the SAT.",
                duration: "15 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "ACT Science: Data Interpretation",
                description: "Strategies for analyzing graphs and tables in the ACT Science section.",
                duration: "12 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "AP Biology: Cell Division",
                description: "Comprehensive explanation of mitosis and meiosis for AP Biology.",
                duration: "20 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "College Essay Writing Tips",
                description: "How to craft a compelling personal statement for college applications.",
                duration: "18 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "AP Calculus: Integration Techniques",
                description: "Master various integration methods for AP Calculus.",
                duration: "25 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "SAT Reading: Main Idea Questions",
                description: "Strategies for identifying the main idea in SAT Reading passages.",
                duration: "14 min",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-500/80 rounded-full p-3">
                      <Video className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{video.title}</h3>
                  <p className="text-[#3d4d21] text-sm mb-4">{video.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary-500 font-medium hover:text-primary-400"
                  >
                    Watch Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="#" className="button-primary">
              View All Video Tutorials
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with New Resources</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Subscribe to our newsletter to receive the latest study materials, practice tests, and educational
            resources.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-grow bg-background border border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <InteractiveHoverButton className="border-primary text-primary hover:text-white">
                Subscribe
              </InteractiveHoverButton>
            </div>
            <p className="text-sm mt-4 text-white">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
