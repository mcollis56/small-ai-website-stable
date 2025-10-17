
import Link from 'next/link'
import { 
  ArrowRight, 
  BookOpen, 
  Download, 
  ExternalLink,
  CheckCircle,
  MessageSquare,
  Workflow,
  BarChart3,
  Settings,
  HelpCircle
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DownloadButton from '@/components/download-button'

export default function DocumentationPage() {
  const sections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      color: 'blue',
      documents: [
        { name: 'AI Implementation Guide', type: 'PDF', description: 'Complete guide to implementing AI in your business' },
        { name: 'Quick Start Checklist', type: 'PDF', description: '10-step checklist for your first AI project' },
        { name: 'ROI Calculator', type: 'Excel', description: 'Calculate the potential return on your AI investment' }
      ]
    },
    {
      title: 'Chatbot Solutions',
      icon: MessageSquare,
      color: 'green',
      documents: [
        { name: 'Chatbot Setup Guide', type: 'PDF', description: 'Step-by-step chatbot configuration instructions' },
        { name: 'Conversation Flow Templates', type: 'ZIP', description: 'Pre-built conversation flows for common use cases' },
        { name: 'Integration Handbook', type: 'PDF', description: 'Connect your chatbot to existing systems' }
      ]
    },
    {
      title: 'Workflow Automation',
      icon: Workflow,
      color: 'purple',
      documents: [
        { name: 'Process Mapping Template', type: 'Excel', description: 'Template to map your current business processes' },
        { name: 'Automation Playbook', type: 'PDF', description: 'Best practices for automating business workflows' },
        { name: 'Tool Integration Guide', type: 'PDF', description: 'Connect automation to your existing tools' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'yellow',
      documents: [
        { name: 'Analytics Dashboard Setup', type: 'PDF', description: 'Configure custom analytics dashboards' },
        { name: 'Data Collection Guide', type: 'PDF', description: 'Best practices for gathering business data' },
        { name: 'Report Templates', type: 'ZIP', description: 'Pre-built report templates for common metrics' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Documentation & <span className="text-blue-300">Resources</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Everything you need to successfully implement and manage AI solutions in your business. 
            Comprehensive guides, templates, and best practices at your fingertips.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Get Personalized Guidance</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jump straight to the resources you need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Setup Guide</h3>
              <p className="text-gray-600 mb-4 text-sm">Get started with your first AI implementation</p>
              <DownloadButton 
                filename="How-to-Set-Up-a-Basic-AI-Chatbot-in-10-Minutes.txt"
                displayName="Download PDF"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600 mb-4 text-sm">Learn from successful AI implementations</p>
              <Link 
                href="/case-studies"
                className="text-green-600 hover:text-green-800 font-semibold text-sm inline-flex items-center space-x-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Cases</span>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuration</h3>
              <p className="text-gray-600 mb-4 text-sm">Templates and tools for system setup</p>
              <DownloadButton 
                filename="Home.txt"
                displayName="Get Templates"
                className="text-purple-600 hover:text-purple-800 font-semibold text-sm"
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Support</h3>
              <p className="text-gray-600 mb-4 text-sm">Need help? Talk to our experts</p>
              <Link 
                href="/contact"
                className="text-yellow-600 hover:text-yellow-800 font-semibold text-sm inline-flex items-center space-x-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed guides and resources organized by solution type
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 bg-${section.color}-100 rounded-lg`}>
                    <section.icon className={`h-8 w-8 text-${section.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${section.color}-100 text-${section.color}-800`}>
                          {doc.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <DownloadButton 
                          filename={`${doc.name.toLowerCase().replace(/\s+/g, '-')}.${doc.type.toLowerCase() === 'pdf' ? 'txt' : 'txt'}`}
                          displayName="Download"
                          className={`text-${section.color}-600 hover:text-${section.color}-800 font-semibold text-sm`}
                        />
                        <button className="text-gray-400 hover:text-gray-600">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our documentation and implementation process
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are these resources free to access?
              </h3>
              <p className="text-gray-700">
                Yes! All basic documentation and guides are freely available. Premium templates 
                and advanced resources are available to our consulting clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often is the documentation updated?
              </h3>
              <p className="text-gray-700">
                We update our documentation monthly to reflect the latest AI technologies, 
                best practices, and lessons learned from client implementations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I request specific documentation?
              </h3>
              <p className="text-gray-700">
                Absolutely! If you need documentation for a specific use case or industry, 
                contact us and we'll prioritize creating resources that meet your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide implementation support?
              </h3>
              <p className="text-gray-700">
                Yes, while our documentation is comprehensive, we also offer hands-on implementation 
                support and training to ensure your success with AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need More Than Documentation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            While our resources are comprehensive, sometimes you need expert guidance. 
            Let's discuss your specific needs and create a custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cal.com/mark-s28jyk/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors"
            >
              <span>Book Expert Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
