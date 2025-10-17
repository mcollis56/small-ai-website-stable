
import { getServerSession } from 'next-auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ReactMarkdown from 'react-markdown'

export default async function ModulePage({
  params,
}: {
  params: { tutorialSlug: string; moduleSlug: string }
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    redirect('/login?callbackUrl=/members/tutorials/' + params.tutorialSlug + '/' + params.moduleSlug)
  }

  // Get tutorial and module
  const tutorial = await prisma.tutorial.findUnique({
    where: { slug: params.tutorialSlug },
    include: {
      modules: {
        orderBy: { order: 'asc' },
      },
    },
  })

  if (!tutorial) {
    notFound()
  }

  // Check if user has access
  const purchase = await prisma.purchase.findUnique({
    where: {
      userId_tutorialId: {
        userId: session.user.id,
        tutorialId: tutorial.id,
      },
    },
  })

  if (!purchase) {
    redirect('/tutorial?error=no-access')
  }

  // Find current module
  const currentModule = tutorial.modules.find((m) => m.slug === params.moduleSlug)

  if (!currentModule) {
    notFound()
  }

  // Find previous and next modules
  const currentIndex = tutorial.modules.findIndex((m) => m.slug === params.moduleSlug)
  const previousModule = currentIndex > 0 ? tutorial.modules[currentIndex - 1] : null
  const nextModule = currentIndex < tutorial.modules.length - 1 ? tutorial.modules[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navigation */}
          <div className="mb-6">
            <Link 
              href={`/members/tutorials/${tutorial.slug}`}
              className="text-gray-600 hover:text-black font-medium inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {tutorial.title}
            </Link>
          </div>

          {/* Module Header */}
          <div className="mb-8">
            <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
              <span className="font-bold text-sm">MODULE {currentModule.order}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {currentModule.title}
            </h1>
            {currentModule.description && (
              <p className="text-xl text-gray-700">
                {currentModule.description}
              </p>
            )}
          </div>

          {/* Module Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="small-ai-card bg-white p-8">
              <ReactMarkdown
                components={{
                  h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                  h2: ({ ...props }) => <h2 className="text-2xl font-bold mb-3 mt-8" {...props} />,
                  h3: ({ ...props }) => <h3 className="text-xl font-bold mb-2 mt-6" {...props} />,
                  p: ({ ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
                  ul: ({ ...props }) => <ul className="list-none space-y-2 mb-4" {...props} />,
                  li: ({ ...props }) => <li className="text-gray-700" {...props} />,
                  strong: ({ ...props }) => <strong className="font-bold text-black" {...props} />,
                  hr: ({ ...props }) => <hr className="my-8 border-t-2 border-black" {...props} />,
                }}
              >
                {currentModule.content || 'Content coming soon...'}
              </ReactMarkdown>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pb-12">
            {previousModule ? (
              <Link
                href={`/members/tutorials/${tutorial.slug}/${previousModule.slug}`}
                className="small-ai-button px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Previous</span>
              </Link>
            ) : (
              <div />
            )}

            {nextModule ? (
              <Link
                href={`/members/tutorials/${tutorial.slug}/${nextModule.slug}`}
                className="small-ai-button-yellow px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <span>Next Module</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            ) : (
              <Link
                href={`/members/tutorials/${tutorial.slug}`}
                className="small-ai-button-yellow px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
              >
                <span>Course Complete!</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
