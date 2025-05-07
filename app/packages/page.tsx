import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, CheckCircle, HelpCircle } from "lucide-react"
import { AdvancedButton } from "@/components/advanced-button"

export default function PackagesPage() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f0] to-[#eaeae0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2a9d8f] to-[#57c99b] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tutoring Packages</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
            Customized tutoring solutions to help you achieve your academic goals
          </p>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f0] to-[#eaeae0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2a9d8f]">Choose Your Path to Success</h2>
            <p className="text-lg text-[#2a9d8f] max-w-3xl mx-auto">
              We offer specialized packages for different academic needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Standardized Test Prep",
                description: "Comprehensive preparation for SAT, ACT, AP exams, and other standardized tests.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#test-prep",
              },
              {
                title: "Subject Tutoring",
                description:
                  "One-on-one instruction in specific academic subjects to improve grades and understanding.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#subject-tutoring",
              },
              {
                title: "College Application Counseling",
                description:
                  "Guidance through the college application process, from school selection to essay writing.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#college-counseling",
              },
              {
                title: "Competition Preparation",
                description: "Specialized coaching for academic competitions in math, science, debate, and more.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#competition-prep",
              },
              {
                title: "Research & Project Mentorship",
                description: "Support for developing independent research projects and academic portfolios.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#research-mentorship",
              },
              {
                title: "Study Skills & Academic Coaching",
                description: "Build effective study habits, time management, and organizational skills.",
                image: "/placeholder.svg?height=200&width=350",
                link: "#study-skills",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#d0d0c0] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#2a9d8f]">{category.title}</h3>
                  <p className="text-[#2a9d8f] mb-4">{category.description}</p>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-[#57c99b] font-medium hover:text-[#2a9d8f]"
                  >
                    View Packages <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Prep Packages */}
      <section id="test-prep" className="py-16 bg-gradient-to-b from-[#2a9d8f]/90 to-[#2a9d8f]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Standardized Test Prep Packages</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">Comprehensive preparation for SAT, ACT, and AP exams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Essential",
                price: "$1,200",
                description: "Foundational test prep for students looking to improve their scores.",
                features: [
                  "12 hours of one-on-one tutoring",
                  "Diagnostic assessment",
                  "Customized study plan",
                  "Official practice tests",
                  "Core strategy instruction",
                  "Basic progress tracking",
                ],
                recommended: false,
                buttonText: "Get Started",
              },
              {
                title: "Premium",
                price: "$2,400",
                description: "Comprehensive test prep for students aiming for significant score improvements.",
                features: [
                  "24 hours of one-on-one tutoring",
                  "Diagnostic assessment",
                  "Customized study plan",
                  "Official practice tests",
                  "Advanced strategy instruction",
                  "Detailed progress tracking",
                  "Weekly homework assignments",
                  "Email support between sessions",
                ],
                recommended: true,
                buttonText: "Choose Premium",
              },
              {
                title: "Elite",
                price: "$3,600",
                description: "Intensive test prep for students targeting top scores and competitive colleges.",
                features: [
                  "36 hours of one-on-one tutoring",
                  "Comprehensive diagnostic assessment",
                  "Customized study plan",
                  "Unlimited practice tests",
                  "Advanced strategy instruction",
                  "Detailed progress tracking",
                  "Weekly homework assignments",
                  "Unlimited email support",
                  "Mock test days",
                  "College admissions strategy session",
                ],
                recommended: false,
                buttonText: "Choose Elite",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-md border ${pkg.recommended ? "border-[#7DDBA3]" : "border-[#d0d0c0]"} relative`}
              >
                {pkg.recommended && (
                  <div className="bg-[#7DDBA3] text-white text-sm font-bold uppercase py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a9d8f]">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#57c99b]">{pkg.price}</span>
                  </div>
                  <p className="text-[#2a9d8f] mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#7DDBA3] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[#2a9d8f]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <AdvancedButton
                      href="/contact"
                      className={`${
                        pkg.recommended
                          ? "border-[#7DDBA3] bg-[#7DDBA3] text-white hover:text-white"
                          : "border-[#57c99b] text-[#57c99b] hover:text-white"
                      }`}
                      variant={pkg.recommended ? "combined" : "interactive"}
                    >
                      {pkg.buttonText}
                    </AdvancedButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-[#d0d0c0]">
            <h3 className="text-xl font-bold mb-4 text-[#2a9d8f]">Customize Your Test Prep Package</h3>
            <p className="text-[#2a9d8f] mb-4">
              Need a different number of hours or specific features? We can create a custom package tailored to your
              needs.
            </p>
            <div className="flex justify-center">
              <AdvancedButton
                href="/contact"
                className="border-[#57c99b] text-[#57c99b] hover:text-white"
                variant="interactive"
              >
                Contact Us for Custom Packages
              </AdvancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Tutoring */}
      <section id="subject-tutoring" className="py-16 bg-gradient-to-b from-[#f5f5f0] to-[#eaeae0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2a9d8f]">Subject Tutoring Packages</h2>
            <p className="text-lg text-[#2a9d8f] max-w-3xl mx-auto">
              One-on-one instruction in specific academic subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Basic",
                price: "$480",
                description: "8 hours of subject tutoring per month",
                features: [
                  "8 hours of one-on-one tutoring",
                  "Customized learning plan",
                  "Homework help",
                  "Concept review",
                  "Test preparation",
                  "Monthly progress report",
                ],
                recommended: false,
                buttonText: "Get Started",
              },
              {
                title: "Monthly Plus",
                price: "$720",
                description: "12 hours of subject tutoring per month",
                features: [
                  "12 hours of one-on-one tutoring",
                  "Customized learning plan",
                  "Homework help",
                  "Concept review",
                  "Test preparation",
                  "Monthly progress report",
                  "Email support between sessions",
                  "Study materials provided",
                ],
                recommended: true,
                buttonText: "Choose Plus",
              },
              {
                title: "Monthly Intensive",
                price: "$960",
                description: "16 hours of subject tutoring per month",
                features: [
                  "16 hours of one-on-one tutoring",
                  "Customized learning plan",
                  "Homework help",
                  "Concept review",
                  "Test preparation",
                  "Bi-weekly progress reports",
                  "Unlimited email support",
                  "Study materials provided",
                  "Parent-teacher conference coordination",
                ],
                recommended: false,
                buttonText: "Choose Intensive",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-md border ${pkg.recommended ? "border-[#7DDBA3]" : "border-[#d0d0c0]"} relative`}
              >
                {pkg.recommended && (
                  <div className="bg-[#7DDBA3] text-white text-sm font-bold uppercase py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a9d8f]">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#57c99b]">{pkg.price}</span>
                    <span className="text-[#2a9d8f]">/month</span>
                  </div>
                  <p className="text-[#2a9d8f] mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#7DDBA3] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[#2a9d8f]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <AdvancedButton
                      href="/contact"
                      className={`${
                        pkg.recommended
                          ? "border-[#7DDBA3] bg-[#7DDBA3] text-white hover:text-white"
                          : "border-[#57c99b] text-[#57c99b] hover:text-white"
                      }`}
                      variant={pkg.recommended ? "combined" : "interactive"}
                    >
                      {pkg.buttonText}
                    </AdvancedButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#2a9d8f]">Available Subject Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Mathematics (All Levels)",
                "Physics",
                "Chemistry",
                "Biology",
                "English & Literature",
                "History",
                "Foreign Languages",
                "Computer Science",
                "Economics",
                "Statistics",
                "Psychology",
                "Environmental Science",
              ].map((subject, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center border border-[#d0d0c0]">
                  <Check className="h-5 w-5 text-[#7DDBA3] mr-2" />
                  <span className="text-[#2a9d8f]">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* College Counseling */}
      <section id="college-counseling" className="py-16 bg-gradient-to-b from-[#2a9d8f]/90 to-[#2a9d8f]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">College Application Counseling</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Comprehensive guidance through the college application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Essay Coaching",
                price: "$1,800",
                description: "Focused support for college application essays",
                features: [
                  "10 hours of one-on-one coaching",
                  "Common App essay development",
                  "Supplemental essays guidance",
                  "Brainstorming sessions",
                  "Editing and feedback",
                  "Final review and polishing",
                ],
                recommended: false,
                buttonText: "Get Started",
              },
              {
                title: "Comprehensive Package",
                price: "$4,800",
                description: "Complete college application support",
                features: [
                  "30 hours of one-on-one counseling",
                  "College selection strategy",
                  "Application timeline planning",
                  "Common App essay development",
                  "Supplemental essays guidance",
                  "Activity list optimization",
                  "Interview preparation",
                  "Scholarship application support",
                  "Financial aid guidance",
                  "Decision strategy",
                ],
                recommended: true,
                buttonText: "Choose Comprehensive",
              },
              {
                title: "Elite Package",
                price: "$7,200",
                description: "Premium support for competitive college admissions",
                features: [
                  "50 hours of one-on-one counseling",
                  "Strategic college selection",
                  "Detailed application timeline",
                  "Common App essay development",
                  "Supplemental essays guidance",
                  "Activity list optimization",
                  "Resume development",
                  "Interview preparation with mock interviews",
                  "Scholarship application support",
                  "Financial aid guidance",
                  "Decision strategy",
                  "Waitlist and deferral support",
                  "Summer planning",
                ],
                recommended: false,
                buttonText: "Choose Elite",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-md border ${pkg.recommended ? "border-[#7DDBA3]" : "border-[#d0d0c0]"} relative`}
              >
                {pkg.recommended && (
                  <div className="bg-[#7DDBA3] text-white text-sm font-bold uppercase py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a9d8f]">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#57c99b]">{pkg.price}</span>
                  </div>
                  <p className="text-[#2a9d8f] mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#7DDBA3] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-[#2a9d8f]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <AdvancedButton
                      href="/contact"
                      className={`${
                        pkg.recommended
                          ? "border-[#7DDBA3] bg-[#7DDBA3] text-white hover:text-white"
                          : "border-[#57c99b] text-[#57c99b] hover:text-white"
                      }`}
                      variant={pkg.recommended ? "combined" : "interactive"}
                    >
                      {pkg.buttonText}
                    </AdvancedButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#f5f5f0] to-[#eaeae0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#2a9d8f]">Frequently Asked Questions</h2>
            <p className="text-lg text-[#2a9d8f] max-w-3xl mx-auto">
              Answers to common questions about our tutoring packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How are tutoring sessions conducted?",
                answer:
                  "Tutoring sessions can be conducted online via our secure video platform or in-person at select locations. Online sessions offer the same interactive experience as in-person tutoring, with screen sharing, virtual whiteboard, and collaborative document editing.",
              },
              {
                question: "Can I change my package after purchasing?",
                answer:
                  "Yes, you can upgrade or modify your package at any time. If you find that you need more hours or different services, we can adjust your package accordingly. Any unused hours from your current package will be applied to your new package.",
              },
              {
                question: "Who are your tutors?",
                answer:
                  "Our tutors are highly qualified educators with extensive experience in their subject areas. All tutors have at least a bachelor's degree from top universities, with many holding advanced degrees. They undergo rigorous screening, training, and ongoing professional development.",
              },
              {
                question: "How long are the tutoring sessions?",
                answer:
                  "Standard tutoring sessions are 1-2 hours long, depending on the student's age, subject, and attention span. We can customize session length based on individual needs and preferences.",
              },
              {
                question: "Do you offer any guarantees?",
                answer:
                  "While we can't guarantee specific test scores or grades as they depend on many factors, we do guarantee the quality of our instruction. If you're not satisfied with a tutor, we'll match you with another tutor at no additional cost.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Getting started is easy! Simply contact us to schedule a free consultation. During this consultation, we'll assess your needs, answer your questions, and recommend the best package for your goals. Once you select a package, we'll match you with the perfect tutor and schedule your first session.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-[#d0d0c0]">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-[#7DDBA3] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-[#2a9d8f]">{faq.question}</h3>
                    <p className="text-[#2a9d8f]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4 text-[#2a9d8f]">Have more questions? We're here to help!</p>
            <div className="flex justify-center">
              <AdvancedButton
                href="/contact"
                className="border-[#57c99b] text-[#57c99b] hover:text-white"
                variant="interactive"
              >
                Contact Us
              </AdvancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2a9d8f] to-[#57c99b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Academic Excellence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Schedule a free consultation to discuss your goals and find the perfect tutoring package for your needs.
          </p>
          <div className="flex justify-center">
            <AdvancedButton href="/contact" className="border-white text-white hover:text-white" variant="pulsating">
              Book Your Free Consultation
            </AdvancedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
