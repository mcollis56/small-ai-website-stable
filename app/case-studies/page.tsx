
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Clock,
  Users,
  CheckCircle,
  BarChart3
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Success <span className="text-blue-300">Stories</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            See how small businesses like yours have transformed their operations 
            and achieved remarkable results with AI solutions.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Start Your Success Story</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These case studies demonstrate the tangible impact of AI implementation across various industries
            </p>
          </div>

          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      E-commerce
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      AI Chatbot
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Online Retailer Increases Sales by 35% with AI Customer Support
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    A growing online fashion retailer was struggling to handle customer inquiries during peak seasons, 
                    leading to frustrated customers and lost sales. Our AI chatbot solution transformed their customer service.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Average response time of 24+ hours during busy periods</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>30% cart abandonment due to support delays</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Customer service team overwhelmed with repetitive questions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">The Solution:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>24/7 AI chatbot handling 80% of customer inquiries</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Instant responses for sizing, shipping, and return questions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Seamless handoff to human agents for complex issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center">Results After 3 Months</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">35%</span>
                      </div>
                      <p className="text-sm text-gray-600">Sales Increase</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="h-6 w-6 text-blue-600" />
                        <span className="text-3xl font-bold text-blue-600">2min</span>
                      </div>
                      <p className="text-sm text-gray-600">Average Response Time</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Users className="h-6 w-6 text-purple-600" />
                        <span className="text-3xl font-bold text-purple-600">95%</span>
                      </div>
                      <p className="text-sm text-gray-600">Customer Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Professional Services
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Workflow Automation
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Marketing Agency Saves 20 Hours Per Week with Process Automation
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    A digital marketing agency was drowning in administrative tasks, spending more time on paperwork 
                    than delivering value to clients. Our automation solution freed up their team to focus on strategy.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Manual client onboarding taking 3-4 hours per client</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Inconsistent reporting and communication</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Team spending 50% of time on administrative tasks</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">The Solution:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Automated client onboarding workflow</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>AI-generated performance reports</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Automated client communication and follow-ups</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center">Results After 2 Months</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="h-6 w-6 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">20hrs</span>
                      </div>
                      <p className="text-sm text-gray-600">Time Saved Weekly</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <DollarSign className="h-6 w-6 text-blue-600" />
                        <span className="text-3xl font-bold text-blue-600">40%</span>
                      </div>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                        <span className="text-3xl font-bold text-purple-600">60%</span>
                      </div>
                      <p className="text-sm text-gray-600">More Strategic Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Retail
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Data Analytics
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Local Restaurant Chain Boosts Revenue by 28% with AI-Driven Insights
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    A regional restaurant chain with 8 locations was struggling with inventory management and 
                    menu optimization. Our AI analytics solution provided actionable insights that transformed their operations.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>15% food waste due to poor inventory forecasting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Unclear understanding of menu item profitability</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span>Inconsistent pricing across locations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">The Solution:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>AI-powered demand forecasting for inventory management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Menu profitability analysis and optimization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Dynamic pricing recommendations based on location and demand</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center">Results After 4 Months</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">28%</span>
                      </div>
                      <p className="text-sm text-gray-600">Revenue Increase</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <DollarSign className="h-6 w-6 text-blue-600" />
                        <span className="text-3xl font-bold text-blue-600">65%</span>
                      </div>
                      <p className="text-sm text-gray-600">Food Waste Reduction</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                        <span className="text-3xl font-bold text-purple-600">22%</span>
                      </div>
                      <p className="text-sm text-gray-600">Profit Margin Improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions consistently deliver measurable results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30</div>
              <p className="text-gray-600">Days to See Results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <p className="text-gray-600">Successful Implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the growing number of small businesses achieving extraordinary results with AI
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 hover:bg-blue-50 transition-colors"
          >
            <span>Book Your Free Strategy Session</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
