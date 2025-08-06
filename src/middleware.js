// middleware.js - CORRECTED
import { NextResponse } from 'next/server';

const publicPaths = ['/auth/sign-in', '/auth/sign-up', '/forgot-password'];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    const sessionToken = request.cookies.get('authToken')?.value;

    if (sessionToken) {
        if (publicPaths.includes(pathname)) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    } else {
        if (!publicPaths.includes(pathname)) {
            const signInUrl = new URL('/auth/sign-in', request.url);
            signInUrl.searchParams.set('from', pathname);
            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};