import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { client } from "@/sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries"
import { writeClient } from "@/sanity/lib/write-client"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user: { name, email, image }, profile, account }) {
      const id =
        account?.provider === "github" ? profile?.id : profile?.sub 
      const username =
        account?.provider === "github" ? profile?.login : email?.split("@")[0]
      const bio =
        account?.provider === "github" ? profile?.bio : profile?.name || ""

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id })

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username,
          email,
          image,
          bio,
        })
      }
      return true
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const id =
          account.provider === "github" ? profile?.id : profile?.sub

        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id })

        token.id = user?._id
      }
      return token
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id })
      return session
    },
  },
})
