
import { 
  ArrowRight, 
  Mail
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-none">
            Let&apos;s <span className="small-ai-highlight">chat.</span>
          </h1>
          <div className="max-w-3xl space-y-6 text-xl text-gray-700">
            <p>
              Book a quick call, send an email, or fill out the form below.
            </p>
            <p>
              Either way, you&apos;ll hear back from a real person within 24 hours. No chatbots. No &ldquo;someone from our team will reach out.&rdquo; Just me.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="small-ai-card bg-white p-8">
              <h2 className="text-3xl font-bold mb-4">
                Book a call
              </h2>
              <p className="text-gray-700 mb-6">
                Fifteen minutes. Three ideas. No pitch. Pick a time that works for you.
              </p>
              <a 
                href="https://cal.com/mark-s28jyk/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button-yellow px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <span>Book now</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="small-ai-card bg-white p-8">
              <h2 className="text-3xl font-bold mb-4">
                Email me
              </h2>
              <p className="text-gray-700 mb-6">
                Prefer email? Send a message to Mark directly. I read every one.
              </p>
              <a 
                href="mailto:mark@small-ai.com" 
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>mark@small-ai.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="small-ai-section bg-gray-50 border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Or just <span className="small-ai-highlight">send a message</span>
            </h2>
            <p className="text-xl text-gray-700">
              Fill this out and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <div className="small-ai-card bg-white p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Quick <span className="small-ai-highlight">answers</span>
            </h2>
            <p className="text-xl text-gray-700">
              Questions people actually ask
            </p>
          </div>

          <div className="space-y-8">
            <div className="small-ai-card bg-white p-6">
              <h3 className="text-xl font-bold mb-3">
                Do I need to know anything about AI?
              </h3>
              <p className="text-gray-700">
                Nope. That&apos;s the whole point. I&apos;ll explain everything in plain English.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-xl font-bold mb-3">
                How fast will I see results?
              </h3>
              <p className="text-gray-700">
                You&apos;ll leave the first session with something you can use immediately. Not in three months. Now.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-xl font-bold mb-3">
                What if I already tried AI and hated it?
              </h3>
              <p className="text-gray-700">
                You probably tried the wrong thing, or someone explained it badly. Let&apos;s fix that.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-xl font-bold mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-700">
                Yep. The $95/month support? Cancel whenever. No lock-ins. No sulking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="small-ai-section bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Stop thinking about it. <span className="bg-small-ai-yellow text-black px-2">Just book.</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Fifteen minutes won&apos;t kill you. It might save you a weekend.
          </p>
          <a 
            href="https://cal.com/mark-s28jyk/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="small-ai-button-yellow px-8 py-4 rounded-sm font-bold text-lg inline-flex items-center space-x-2"
          >
            <span>Book a quick chat</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
