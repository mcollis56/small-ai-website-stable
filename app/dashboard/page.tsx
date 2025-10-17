
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LogoutButton from '@/components/logout-button'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    redirect('/login')
  }

  // Get user's purchases
  const purchases = await prisma.purchase.findMany({
    where: { userId: session.user.id },
    include: {
      tutorial: {
        include: {
          modules: {
            orderBy: { order: 'asc' },
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Welcome back, <span className="small-ai-highlight">{session.user.name || 'there'}</span>
              </h1>
              <p className="text-xl text-gray-700">
                {session.user.email}
              </p>
            </div>
            <LogoutButton />
          </div>

          {/* My Tutorials */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">My Tutorials</h2>
            
            {purchases.length === 0 ? (
              <div className="small-ai-card bg-gray-50 p-12 text-center">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-2">No tutorials yet</h3>
                <p className="text-gray-600 mb-6">
                  Get started with our AI Basics Workshop
                </p>
                <Link 
                  href="/tutorial"
                  className="small-ai-button-yellow px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
                >
                  <span>View Tutorial</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {purchases.map((purchase) => (
                  <div key={purchase.id} className="small-ai-card bg-white p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {purchase.tutorial.title}
                        </h3>
                        <p className="text-gray-600">
                          {purchase.tutorial.modules.length} modules • Purchased on{' '}
                          {new Date(purchase.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="bg-green-100 px-4 py-2 border-2 border-green-600">
                        <span className="text-sm font-bold text-green-800">PURCHASED</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {purchase.tutorial.description}
                    </p>

                    <Link 
                      href={`/members/tutorials/${purchase.tutorial.slug}`}
                      className="small-ai-button-yellow px-6 py-3 rounded-sm font-bold inline-flex items-center space-x-2"
                    >
                      <span>Continue Learning</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="small-ai-card bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Book a quick chat or get monthly support
              </p>
              <Link 
                href="/#offers"
                className="text-black font-bold hover:text-gray-600 inline-flex items-center"
              >
                View Services <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="small-ai-card bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-2">Explore More</h3>
              <p className="text-gray-700 mb-4">
                Check out our blog and resources
              </p>
              <Link 
                href="/blog"
                className="text-black font-bold hover:text-gray-600 inline-flex items-center"
              >
                Read Blog <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
