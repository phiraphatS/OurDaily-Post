import { serviceFunction } from '@/_helpers/service-func';
import NextAuth, { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: [
                        "openid",
                        "https://www.googleapis.com/auth/userinfo.profile",
                        "https://www.googleapis.com/auth/userinfo.email",
                        "https://www.googleapis.com/auth/photoslibrary",
                        "https://www.googleapis.com/auth/photoslibrary.sharing",
                        "https://www.googleapis.com/auth/photoslibrary.appendonly",
                    ].join(" "),
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Your credential verification logic here
                // Return null if invalid, return user object if valid
                return null;
            }
        }),
    ],
    pages: {
        signIn: '/authen',
    },
    callbacks: {
        async signIn({ user, account }: any) {
            if (user.email) {
                await serviceFunction.joinAlbum(user.email, account.access_token);
            }
            return true;
        },
        async jwt({ token, account }: any) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }: any) {
            return {
                ...session,
                accessToken: token.accessToken,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            };
        },
    },
}

export default NextAuth(authOptions)