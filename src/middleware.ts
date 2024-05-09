import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Url } from 'url';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    const authenPathRegex = new RegExp('/authen')
    if (authenPathRegex.test(pathname)) {
        return NextResponse.next()
    }

    const isAuth = request.cookies.has('access_token')
    if (isAuth) {
        const accessToken = request.cookies.get('access_token')
        // set request headers bearer token
        if (accessToken && accessToken.value) {
            request.headers.set('Authorization', `Bearer ${accessToken.value}`)
            return NextResponse.next()
        }
    } else {
        // return NextResponse.redirect(new URL('/authen', request.url))
    }
    return NextResponse.next()
}

// all path Without /authen
export const config = {
    matcher: '/:path*',
}