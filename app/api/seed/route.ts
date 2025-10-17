import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    // Simple authentication - check for a secret key
    const { secret } = await request.json()

    if (secret !== process.env.SEED_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🌱 Seeding database...')

    // Create test user
    const hashedPassword = await bcrypt.hash('johndoe123', 10)
    const testUser = await prisma.user.upsert({
      where: { email: 'john@doe.com' },
      update: {},
      create: {
        email: 'john@doe.com',
        name: 'John Doe',
        password: hashedPassword,
      },
    })
    console.log('✅ Test user created:', testUser.email)

    // Create AI Basics Tutorial
    const tutorial = await prisma.tutorial.upsert({
      where: { slug: 'ai-basics-workshop' },
      update: {},
      create: {
        title: 'AI Basics Workshop',
        description: 'Master the fundamentals of AI for small business in just one hour. Learn practical prompts, build your first automation, and gain the confidence to leverage AI tools effectively.',
        price: 9900,
        slug: 'ai-basics-workshop',
        isActive: true,
      },
    })
    console.log('✅ Tutorial created:', tutorial.title)

    // Create tutorial modules
    const modules = [
      {
        title: 'Welcome & Getting Started',
        description: 'An introduction to the course and what you\'ll learn',
        content: '# Welcome to AI Basics Workshop\n\nWelcome! You\'re about to learn how AI can save you hours every week.',
        order: 1,
        slug: 'welcome-getting-started',
      },
      // Add more modules as needed
    ]

    let createdModules = 0
    for (const moduleData of modules) {
      await prisma.tutorialModule.upsert({
        where: {
          tutorialId_slug: {
            tutorialId: tutorial.id,
            slug: moduleData.slug,
          },
        },
        update: {},
        create: {
          ...moduleData,
          tutorialId: tutorial.id,
        },
      })
      createdModules++
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      data: {
        user: testUser.email,
        tutorial: tutorial.title,
        modules: createdModules,
      },
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { error: 'Failed to seed database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
