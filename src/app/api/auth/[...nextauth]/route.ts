import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import FacebookProvider from 'next-auth/providers/facebook';
// import TwitterProvider from 'next-auth/providers/twitter';
import { authOptions } from '@/_utils/auth-option';

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }