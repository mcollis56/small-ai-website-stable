
import { getServerSession } from 'next-auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export default async function TutorialOverviewPage({
  params,
}: {
  params: { tutorialSlug: string }
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    redirect('/login?callbackUrl=/members/tutorials/' + params.tutorialSlug)
  }

  // Get tutorial
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link 
              href="/dashboard"
              className="text-gray-600 hover:text-black font-medium"
            >
              ← Back to Dashboard
            </Link>
          </div>

          <div className="mb-12">
            <div className="inline-block bg-small-ai-yellow px-4 py-2 mb-4">
              <span className="font-bold text-sm">YOUR TUTORIAL</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {tutorial.title}
            </h1>
            <p className="text-xl text-gray-700">
              {tutorial.description}
            </p>
          </div>

          {/* Module List */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Course Modules</h2>
            
            {tutorial.modules.map((module, index) => (
              <Link
                key={module.id}
                href={`/members/tutorials/${tutorial.slug}/${module.slug}`}
                className="block small-ai-card bg-white p-6 hover:border-small-ai-yellow transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-small-ai-yellow px-3 py-1 text-sm font-bold flex-shrink-0">
                      {module.order}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                      <p className="text-gray-700">{module.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400 flex-shrink-0 ml-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* Completion Status */}
          <div className="mt-12 small-ai-card bg-gray-50 p-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-black flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Your Progress</h3>
                <p className="text-gray-700 mb-4">
                  You have access to all {tutorial.modules.length} modules. Work through them at your own pace.
                </p>
                <p className="text-sm text-gray-600">
                  Need help? <Link href="/contact" className="font-bold text-black hover:underline">Get in touch</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
