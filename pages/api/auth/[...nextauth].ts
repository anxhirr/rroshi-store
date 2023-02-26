import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { createUserInSanity } from '../../../lib/createUserInSanity'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET!,

  callbacks: {
    async signIn({ user }) {
      await createUserInSanity(user)
      return Promise.resolve(true)
    },
  },
}

export default NextAuth(authOptions)
