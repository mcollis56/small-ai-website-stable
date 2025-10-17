
import Image from 'next/image'
import Link from 'next/link'
import { 
  MessageSquare, 
  Workflow, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Shield,
  Zap
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            AI Solutions Designed for <span className="text-blue-300">Small Businesses</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            From chatbots to workflow automation, we provide comprehensive AI solutions 
            that are easy to implement and deliver immediate results.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* AI Chatbot Integration */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    AI Chatbot Integration
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Engage customers 24/7 with intelligent, automated assistants that handle inquiries, 
                  provide support, and capture leads even when you're offline.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Lead capture & qualification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Multi-platform integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Natural language processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Custom conversation flows</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Analytics & insights</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                  <p className="text-gray-700">
                    E-commerce stores, service businesses, restaurants, and any company 
                    looking to improve customer engagement and capture more leads.
                  </p>
                </div>
              </div>
              
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/8fc2fa53-faea-4713-9ccf-c226ff55fbea.png"
                  alt="AI Chatbot Integration Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Workflow Automation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/e3bc9b27-a1e9-4bea-8a50-25e42ea2adb6.png"
                  alt="Workflow Automation Service"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Workflow className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Workflow Automation
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Streamline your business processes and eliminate manual work. 
                  Automate repetitive tasks so you can focus on what matters most - growing your business.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Process optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Task automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Integration with existing tools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Email automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Document processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Scheduling & reminders</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                  <p className="text-gray-700">
                    Professional services, consultants, agencies, and any business with 
                    repetitive administrative tasks that consume valuable time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Insights & Analytics */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Data Insights & Analytics
                  </h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Transform raw data into actionable insights that drive growth. 
                  Understand your customers, optimize operations, and make smarter business decisions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Customer behavior analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Predictive insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">ROI tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Custom dashboards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Automated reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Market trend analysis</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                  <p className="text-gray-700">
                    Retail businesses, marketing agencies, SaaS companies, and any organization 
                    that wants to leverage data for competitive advantage.
                  </p>
                </div>
              </div>
              
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/13dae662-d95e-4332-8d0e-b3c75fc50df2.png"
                  alt="Data Insights & Analytics Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and designed to get you results quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Consultation</h3>
              <p className="text-gray-600">
                We understand your business needs and identify the best AI solutions for your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Strategy</h3>
              <p className="text-gray-600">
                Custom implementation plan tailored to your business processes and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Implementation</h3>
              <p className="text-gray-600">
                Quick setup and integration with minimal disruption to your daily operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Support</h3>
              <p className="text-gray-600">
                Ongoing training and support to ensure you get maximum value from your AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book your free consultation today and discover how AI can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cal.com/mark-s28jyk/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
