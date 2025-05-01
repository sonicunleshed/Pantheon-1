import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pantheon</h3>
            <p className="text-gray-300 mb-4">
              Empowering students to achieve academic excellence through personalized tutoring and mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-primary-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-primary-400">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-gray-300 hover:text-primary-400">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  SAT/ACT Prep
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  AP Courses
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  College Counseling
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  Subject Tutoring
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-primary-400">
                  Essay Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-gray-300">123 Education St, Learning City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-gray-300">info@pantheon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pantheon Tutoring. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
