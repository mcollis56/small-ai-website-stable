
'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call - in a real app, this would send to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center space-x-2 text-green-600">
        <CheckCircle className="h-5 w-5" />
        <span className="font-semibold">Thank you! You've been subscribed.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button 
        type="submit"
        disabled={isSubmitting}
        className="cta-button text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>Please enter a valid email address.</span>
        </div>
      )}
    </form>
  )
}
