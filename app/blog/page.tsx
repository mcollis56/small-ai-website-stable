
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Target,
  TrendingUp,
  Lightbulb
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import NewsletterSignup from '@/components/newsletter-signup'

export default function BlogPage() {
  const posts = [
    {
      id: '5-ways-ai-can-boost-your-small-business',
      title: '5 Ways AI Can Boost Your Small Business',
      excerpt: 'Discover practical applications of AI that can transform your business operations and drive growth.',
      author: 'Small AI Team',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'Business Strategy',
      icon: TrendingUp
    },
    {
      id: '5-ways-ai-can-boost-your-small-business',
      title: 'How AI Chatbots Are Revolutionizing Customer Service',
      excerpt: 'Learn how intelligent chatbots can improve customer satisfaction while reducing operational costs.',
      author: 'Small AI Team',
      date: 'March 10, 2025',
      readTime: '7 min read',
      category: 'Customer Service',
      icon: Target
    },
    {
      id: '5-ways-ai-can-boost-your-small-business',
      title: 'The Complete Guide to Workflow Automation for Small Businesses',
      excerpt: 'Step-by-step instructions for automating repetitive tasks and streamlining business processes.',
      author: 'Small AI Team',
      date: 'March 5, 2025',
      readTime: '10 min read',
      category: 'Automation',
      icon: Lightbulb
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            AI Insights & <span className="text-blue-300">Resources</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Stay informed with the latest AI trends, practical guides, and success stories 
            tailored for small business owners.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Get Personal AI Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical insights and actionable advice to help you succeed with AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <post.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with AI Trends
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights, case studies, and practical AI tips delivered to your inbox monthly.
            </p>
            <NewsletterSignup />
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stop reading about AI and start using it. Book a consultation to get personalized recommendations.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 hover:bg-blue-50 transition-colors"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
