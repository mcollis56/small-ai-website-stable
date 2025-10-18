import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const authorization = req.headers.get('Authorization');

  if (authorization !== `Bearer ${process.env.SEED_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
      },
    });
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return new NextResponse('Error seeding database', { status: 500 });
  } finally {
    await prisma.();
  }
}
