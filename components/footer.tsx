import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-[#f0f0e8] text-[#2a9d8f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pantheon</h3>
            <p className="text-[#2a9d8f] mb-4">
              Empowering students to achieve academic excellence through personalized tutoring and mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  SAT/ACT Prep
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  AP Courses
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  College Counseling
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Subject Tutoring
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#2a9d8f] hover:text-[#2a9d8f]">
                  Essay Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#6b8339]" />
                <span className="text-[#2a9d8f]">123 Education St, Learning City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#6b8339]" />
                <span className="text-[#2a9d8f]">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#6b8339]" />
                <span className="text-[#2a9d8f]">info@pantheon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e0e4d0] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#57c99b] text-sm">
            &copy; {new Date().getFullYear()} Pantheon Tutoring. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#57c99b] hover:text-[#2a9d8f] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#57c99b] hover:text-[#2a9d8f] text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
