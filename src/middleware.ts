import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const loginPath = new RegExp ('^/authen$');

export function middleware(req: NextRequest) {

    const { pathname, locale, origin } = req.nextUrl;

    // In progress
    const accessToken = req.cookies.get('access_token');
    const isAuth = !!accessToken;

    if (isAuth && loginPath.test(pathname)) {
        const queryObj = req.nextUrl.searchParams;
        if (queryObj.has('afterlogin-redirect')) {
            const encryptedPathWithQueryString = queryObj.get('afterlogin-redirect') as string;
            const fullPath = decodeURIComponent(encryptedPathWithQueryString);
            const searchRedirectUrl = new URL(fullPath, origin);
            return NextResponse.redirect(searchRedirectUrl.toString());
        }

        const searchRedirectUrl = new URL(`${locale}/feeds`, origin);
        return NextResponse.redirect(searchRedirectUrl.toString());
    }

    if (!isAuth && !loginPath.test(pathname)) {
        if (pathname) {
            const queryString = req.nextUrl.search;
            const fullPath = queryString ? `${pathname}${queryString}` : pathname;
            const encryptedPathWithQueryString = encodeURIComponent(fullPath);
            const loginRedirectUrl = new URL(`${locale}/?afterlogin-redirect=${encryptedPathWithQueryString}`, origin);
            return NextResponse.redirect(loginRedirectUrl.toString());
        }

        const localeRedirectUrl = new URL(`${locale}`, origin);
        return NextResponse.redirect(localeRedirectUrl.toString());
    }

    return NextResponse.next();
}

export const config = {
    /*
     * Match all request paths not except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    matcher: ['/:path*'],
};