import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const authorization = req.headers.get('Authorization');

  if (authorization !== `Bearer ${process.env.SEED_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Your seeding logic goes here. For example:
    await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
      },
    });
    console.log("Database seeded successfully.");
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error("Error seeding database:", error);
    return new NextResponse('Error seeding database', { status: 500 });
  } finally {
    await prisma.();
  }
}
