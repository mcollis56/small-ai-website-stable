
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-black">Small-AI</span>
            </div>
            <p className="text-gray-700 mb-4 text-lg max-w-md">
              Smart tech for tired humans. We teach small business owners how to make AI do the boring bits.
            </p>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="h-5 w-5" />
              <a href="mailto:mark@small-ai.com" className="hover:text-black font-medium">
                mark@small-ai.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/about" className="hover:text-black transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://cal.com/mark-s28jyk/discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors font-medium"
                >
                  Book a chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 text-sm mb-4 md:mb-0">
            © 2025 Small-AI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-700">
            <Link href="/privacy" className="hover:text-black transition-colors font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors font-medium">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
