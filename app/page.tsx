
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Coffee,
  Zap,
  MessageCircle
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-none">
              No time for AI?<br />
              <span className="small-ai-highlight">Us either.</span>
            </h1>
            <div className="space-y-4 mb-10 max-w-2xl">
              <p className="text-xl lg:text-2xl text-gray-700">
                You&apos;re drowning in admin. Every newsletter says &ldquo;just use AI.&rdquo; But when?
              </p>
              <p className="text-lg text-gray-600">
                We teach small business owners how to make AI handle the boring bits — without learning code, losing your mind, or sounding like a robot.
              </p>
              <p className="text-lg font-bold text-black">
                No jargon. No lanyards. No time wasted.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cal.com/mark-s28jyk/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button-yellow px-8 py-4 rounded-sm font-bold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Book a quick chat</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link 
                href="#offers"
                className="small-ai-button px-8 py-4 rounded-sm font-bold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>See what we offer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="small-ai-section bg-white border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pick your <span className="small-ai-highlight">starting point</span>
            </h2>
            <p className="text-xl text-gray-700">
              (All of these will save you time. Start wherever you are.)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Chat */}
            <div className="small-ai-card bg-white p-8">
              <div className="mb-6">
                <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
                  <span className="font-bold text-lg">FREE</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Fifteen minutes. Three ideas.</h3>
                <p className="text-gray-700">
                  No sales pitch. No jargon. Just a quick chat about what&apos;s eating your time, and three things you can try today.
                </p>
              </div>
              <a 
                href="https://cal.com/mark-s28jyk/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Book a quick chat</span>
              </a>
            </div>

            {/* $99 Tutorial */}
            <div className="small-ai-card bg-white p-8">
              <div className="mb-6">
                <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
                  <span className="font-bold text-lg">$99</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">One-Hour Tutorial</h3>
                <p className="text-gray-700 mb-4">
                  A one-hour online workshop that shows you how to make AI handle the boring stuff.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>→ A prompt library that actually works</li>
                  <li>→ One working automation</li>
                  <li>→ The confidence to keep going</li>
                </ul>
              </div>
              <a 
                href="https://cal.com/mark-s28jyk/ai-basics-workshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Start for $99</span>
              </a>
            </div>

            {/* $295 Audit */}
            <div className="small-ai-card bg-white p-8">
              <div className="mb-6">
                <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
                  <span className="font-bold text-lg">$295</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Full AI Audit & Roadmap</h3>
                <p className="text-gray-700 mb-4">
                  We peek under the hood — your emails, tools, chaos — and build a practical AI plan that makes sense.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>→ A roadmap you&apos;ll understand at first glance</li>
                  <li>→ Free tools you can use now</li>
                  <li>→ A to-do list that doesn&apos;t make you cry</li>
                </ul>
              </div>
              <a 
                href="https://cal.com/mark-s28jyk/ai-audit-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <Coffee className="h-5 w-5" />
                <span>Book the Audit</span>
              </a>
            </div>

            {/* $95/month Support */}
            <div className="small-ai-card bg-white p-8">
              <div className="mb-6">
                <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
                  <span className="font-bold text-lg">$95/month</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Monthly Support</h3>
                <p className="text-gray-700 mb-4">
                  Keep the momentum. Quick tune-ups, updates, and fixes. Cancel whenever you like. We won&apos;t sulk.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>→ Monthly check-ins</li>
                  <li>→ Prompt updates & tweaks</li>
                  <li>→ Email support</li>
                </ul>
              </div>
              <a 
                href="https://cal.com/mark-s28jyk/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Get Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="small-ai-section border-t-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              What we <span className="small-ai-highlight">actually do</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                You run a business. 
                You&apos;ve got enough on your plate without learning how to &ldquo;prompt engineer&rdquo; your way through another Tuesday.
              </p>
              <p>
                <strong>We teach you how to make AI do the heavy lifting</strong> — the emails, the admin, the endless follow-ups — so you can focus on the parts of your business you actually like.
              </p>
              <p className="text-xl font-bold text-black">
                Start small. See results fast. Keep your sanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Mark */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Meet <span className="small-ai-highlight">Mark</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Mark has helped 500+ small businesses cut the busywork.
                </p>
                <p>
                  He&apos;s worked in advertising, telecoms, and chaos management. Now he teaches normal people how to make AI do the heavy lifting — without sounding like a robot.
                </p>
                <p className="text-xl font-bold text-black">
                  No suits. No certificates on the wall. Just real help.
                </p>
              </div>
            </div>
            
            {/* Mark Collis - AI Action Figure */}
            <div className="relative aspect-square bg-gray-100 rounded-sm overflow-hidden border-2 border-black">
              <Image
                src="/images/mark-collis.jpg"
                alt="Mark Collis - AI Action Figure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              How it <span className="small-ai-highlight">works</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <strong>Start with the free chat.</strong> We&apos;ll figure out what&apos;s eating your time and give you three things to try today.
              </p>
              <p>
                <strong>Pick a product that fits.</strong> The $99 tutorial if you want to learn. The $295 audit if you want a plan. The $95/month support if you want to keep the momentum going.
              </p>
              <p className="text-xl font-bold text-black">
                No subscriptions. No lock-ins. Just help when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="small-ai-section bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Smart tech for <span className="bg-small-ai-yellow text-black px-2">tired humans.</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            You run the business. We&apos;ll run the boring bits.
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

      {/* Contact Form Section */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Or just <span className="small-ai-highlight">send us a message</span>
            </h2>
            <p className="text-xl text-gray-700">
              We&apos;ll get back to you within 24 hours. No automated responses. Just humans.
            </p>
          </div>
          <div className="small-ai-card bg-white p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
