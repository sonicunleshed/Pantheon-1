"use client"

import { useEffect } from "react"

export default function ContactPage() {
  return (
    <div className="bg-[#f5f5f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f5f5f0] to-[#eaeae0] text-[#556b2f] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
          <p className="text-xl max-w-3xl mx-auto text-[#556b2f]">
            Schedule a session with one of our expert tutors to discuss your academic goals.
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#d0d0c0]">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </div>
  )
}

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/as20982-nyu"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  )
}
