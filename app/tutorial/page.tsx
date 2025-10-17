
import Link from 'next/link'
import { CheckCircle, Clock, Play } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { prisma } from '@/lib/db'

export default async function TutorialProductPage() {
  const tutorial = await prisma.tutorial.findUnique({
    where: { slug: 'ai-basics-workshop' },
    include: {
      modules: {
        orderBy: { order: 'asc' },
      },
    },
  })

  if (!tutorial) {
    return <div>Tutorial not found</div>
  }

  const stripeCheckoutUrl = 'https://buy.stripe.com/small-ai-checkout'

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-6">
                <span className="font-bold text-lg">ONLINE WORKSHOP</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {tutorial.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {tutorial.description}
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>60-90 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span>{tutorial.modules.length} modules</span>
                </div>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="small-ai-card bg-gray-50 p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">
                  ${(tutorial.price / 100).toFixed(0)}
                </div>
                <p className="text-gray-600">One-time payment</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lifetime access to all modules</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Downloadable prompt library</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Practical automations you can use today</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">30-day action plan</span>
                </div>
              </div>

              <a
                href={stripeCheckoutUrl}
                className="block w-full small-ai-button-yellow px-8 py-4 rounded-sm font-bold text-lg text-center"
              >
                Enroll Now
              </a>

              <p className="text-sm text-gray-600 text-center mt-4">
                Or{' '}
                <Link href="/signup" className="font-bold text-black hover:underline">
                  create an account
                </Link>{' '}
                first
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="small-ai-section border-t-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">
            What you&apos;ll <span className="small-ai-highlight">learn</span>
          </h2>
          
          <div className="space-y-6">
            {tutorial.modules.map((module) => (
              <div key={module.id} className="small-ai-card bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-small-ai-yellow px-3 py-1 text-sm font-bold flex-shrink-0">
                    Module {module.order}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                    <p className="text-gray-700">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">
            This workshop is <span className="small-ai-highlight">for you</span> if:
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              ✓ You&apos;re a small business owner drowning in admin work
            </p>
            <p>
              ✓ You&apos;ve tried ChatGPT but don&apos;t know how to make it useful
            </p>
            <p>
              ✓ You want practical tools, not theoretical knowledge
            </p>
            <p>
              ✓ You&apos;d rather learn from a human than watch 47 YouTube videos
            </p>
            <p>
              ✓ You want to save 3-5 hours per week (at minimum)
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="small-ai-section bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to get your <span className="bg-small-ai-yellow text-black px-2">weekends back?</span>
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Join hundreds of small business owners who&apos;ve automated the boring bits.
          </p>
          <a 
            href={stripeCheckoutUrl}
            className="small-ai-button-yellow px-8 py-4 rounded-sm font-bold text-lg inline-block"
          >
            Enroll for ${(tutorial.price / 100).toFixed(0)}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
