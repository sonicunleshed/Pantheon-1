"use client"
import { AdvancedButton } from "@/components/advanced-button"
import { Award, Star, Users } from "lucide-react"
import MarqueeDemo from "@/components/marquee-demo"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Elevate Your Academic Success</span>
            </h1>
            <p className="text-lg md:text-xl text-[#3d4d21] mb-8">
              Our expert tutors help students achieve their academic goals with personalized learning plans and proven
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <AdvancedButton
                href="/contact"
                className="border-gray-300 text-gray-700 hover:text-white"
                variant="interactive"
              >
                Book Your Free Demo
              </AdvancedButton>
              <AdvancedButton
                href="/packages"
                className="border-gray-300 text-gray-700 hover:text-white"
                variant="interactive"
              >
                View Tutoring Packages
              </AdvancedButton>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-[#3d4d21]">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-[#3d4d21]">1000+ Students</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-[#3d4d21]">Top 1% Tutors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Students Say</h2>
            <p className="text-lg text-[#3d4d21] max-w-3xl mx-auto">
              Hear from students who have transformed their academic journey with our tutoring services
            </p>
          </div>

          <MarqueeDemo />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-lg text-[#3d4d21] max-w-3xl mx-auto">
              Our students achieve remarkable results with our personalized tutoring approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "SAT Score Improvement",
                stat: "+200",
                description: "Average points increase on the SAT",
              },
              {
                name: "College Acceptance",
                stat: "94%",
                description: "Of our students get into one of their top 3 college choices",
              },
              {
                name: "GPA Improvement",
                stat: "+1.2",
                description: "Average GPA increase after one semester",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-[#3d4d21]">{stat.name}</h3>
                <p className="text-5xl font-bold text-primary-500 my-4">{stat.stat}</p>
                <p className="text-[#3d4d21]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100 text-[#3d4d21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a free consultation with one of our expert tutors and discover how we can help you achieve your
            academic goals.
          </p>
          <AdvancedButton
            href="/contact"
            className="border-primary text-primary hover:text-white"
            variant="pulsating"
            pulseColor="rgba(85, 107, 47, 0.3)"
          >
            Book Your Free Demo Today
          </AdvancedButton>
        </div>
      </section>
    </div>
  )
}
