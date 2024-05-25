import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  // Validate the input
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      // @ts-ignore
      password: hashedPassword,
      name
    }
  });

  // Automatically sign in the user after registration
  await signIn('credentials', {
    redirect: false,
    email,
    password,
  });

  return NextResponse.json({ user }, { status: 201 });
}
