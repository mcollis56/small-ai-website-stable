
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { tutorialSlug, stripeSessionId } = body

    const tutorial = await prisma.tutorial.findUnique({
      where: { slug: tutorialSlug },
    })

    if (!tutorial) {
      return NextResponse.json({ error: 'Tutorial not found' }, { status: 404 })
    }

    // Check if purchase already exists
    const existingPurchase = await prisma.purchase.findUnique({
      where: {
        userId_tutorialId: {
          userId: session.user.id,
          tutorialId: tutorial.id,
        },
      },
    })

    if (existingPurchase) {
      return NextResponse.json({ message: 'Purchase already exists', purchase: existingPurchase })
    }

    // Create purchase
    const purchase = await prisma.purchase.create({
      data: {
        userId: session.user.id,
        tutorialId: tutorial.id,
        amount: tutorial.price,
        stripeSessionId: stripeSessionId || null,
        status: 'completed',
      },
    })

    return NextResponse.json({ message: 'Purchase created', purchase }, { status: 201 })
  } catch (error) {
    console.error('Error creating purchase:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
