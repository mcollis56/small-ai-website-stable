
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession() || {}

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">Small-AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/tutorial" className="text-black hover:text-gray-600 transition-colors font-medium">
              Tutorial
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
              Contact
            </Link>
            
            {status === 'authenticated' ? (
              <Link 
                href="/dashboard"
                className="small-ai-button-yellow px-6 py-2 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login"
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  Log In
                </Link>
                <Link 
                  href="/signup"
                  className="small-ai-button-yellow px-6 py-2 rounded-sm font-bold"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-black">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-4 py-3 text-black hover:bg-small-ai-yellow transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/tutorial" 
                className="px-4 py-3 text-black hover:bg-small-ai-yellow transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorial
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 text-black hover:bg-small-ai-yellow transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 text-black hover:bg-small-ai-yellow transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {status === 'authenticated' ? (
                <Link 
                  href="/dashboard"
                  className="mx-4 mt-2 small-ai-button-yellow px-6 py-3 rounded-sm font-bold text-center inline-flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <div className="mx-4 mt-2 space-y-2">
                  <Link 
                    href="/login"
                    className="block small-ai-button px-6 py-3 rounded-sm font-bold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link 
                    href="/signup"
                    className="block small-ai-button-yellow px-6 py-3 rounded-sm font-bold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
