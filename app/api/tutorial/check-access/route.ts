
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ hasAccess: false }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const tutorialSlug = searchParams.get('slug')

    if (!tutorialSlug) {
      return NextResponse.json({ error: 'Tutorial slug is required' }, { status: 400 })
    }

    const tutorial = await prisma.tutorial.findUnique({
      where: { slug: tutorialSlug },
    })

    if (!tutorial) {
      return NextResponse.json({ error: 'Tutorial not found' }, { status: 404 })
    }

    const purchase = await prisma.purchase.findUnique({
      where: {
        userId_tutorialId: {
          userId: session.user.id,
          tutorialId: tutorial.id,
        },
      },
    })

    return NextResponse.json({ hasAccess: !!purchase })
  } catch (error) {
    console.error('Error checking access:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
