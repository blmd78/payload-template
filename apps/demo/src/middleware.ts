import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // admin.localhost → rewrite to /admin
  if (hostname.startsWith('admin.')) {
    if (!pathname.startsWith('/admin') && !pathname.startsWith('/api')) {
      const url = request.nextUrl.clone();
      url.pathname = `/admin${pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Block /admin routes on non-admin hosts
  if (pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
