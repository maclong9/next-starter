import { checkAuth } from '@/lib/auth/utils'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const authRequiredPaths = ['/dashboard', '/settings', '/account']

  if (authRequiredPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    if (!await checkAuth()) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
