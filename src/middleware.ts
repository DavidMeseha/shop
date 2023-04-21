import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/login',
}