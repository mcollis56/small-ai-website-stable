
import Link from 'next/link'
import { 
  ArrowRight, 
  Coffee,
  Zap
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-none">
            Hi. I&apos;m <span className="small-ai-highlight">Mark.</span>
          </h1>
          <div className="max-w-3xl space-y-6 text-xl text-gray-700">
            <p>
              I help small business owners stop drowning in emails, admin, and <em>all the tabs.</em>
            </p>
            <p>
              I&apos;ve worked with 500+ businesses across advertising, telecoms, hospitality, and a lot of other industries where spreadsheets outnumber humans.
            </p>
            <p className="text-2xl font-bold text-black">
              I teach normal people how to make AI do the heavy lifting — without needing a PhD or a personality transplant.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why I started <span className="small-ai-highlight">this</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                After years of watching brilliant business owners spend their weekends wrestling with software they hated, I realized something:
              </p>
              <p className="text-2xl font-bold text-black">
                The problem wasn&apos;t the tools. It was the way they were being sold.
              </p>
              <p>
                Everyone was talking about &ldquo;AI transformation&rdquo; and &ldquo;disruptive innovation.&rdquo; Meanwhile, cafés still had 47 unread emails, tradies were manually typing the same quote three times a week, and accountants were losing their minds in spreadsheets.
              </p>
              <p>
                So I built Small-AI to do one thing really well: <strong>teach small business owners how to save time without losing their sanity.</strong>
              </p>
              <p>
                No jargon. No seven-figure retainers. No suits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="small-ai-section bg-gray-50 border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            What makes us <span className="small-ai-highlight">different</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="small-ai-card bg-white p-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Zap className="h-6 w-6" />
                We actually get it
              </h3>
              <p className="text-gray-700">
                I&apos;ve been the one with 47 tabs open at 11pm on a Sunday. I know what real busy looks like.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Coffee className="h-6 w-6" />
                No fluff
              </h3>
              <p className="text-gray-700">
                We don&apos;t do discovery phases, alignment workshops, or change management frameworks. We just get started.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-2xl font-bold mb-3">
                Plain English
              </h3>
              <p className="text-gray-700">
                If it sounds like it came from LinkedIn, we won&apos;t say it. Promise.
              </p>
            </div>

            <div className="small-ai-card bg-white p-6">
              <h3 className="text-2xl font-bold mb-3">
                Real results, fast
              </h3>
              <p className="text-gray-700">
                You&apos;ll have something working in the first session. Not in three months. Now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="small-ai-section bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Want to see if we&apos;re a <span className="bg-small-ai-yellow text-black px-2">good fit?</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Book a free chat. Fifteen minutes. Three ideas. No pitch.
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
