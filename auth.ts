import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { UserRole } from "@prisma/client"
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // pages: {
  //   signIn: "/auth/signin" ,
  //   error: '/auth/error',
  // },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date()
        }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {

      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id as string);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
        console.log({
          twoFactorConfirmation
        })

        if (!twoFactorConfirmation) {
          return false
        }

        // Delete two factor confirmation on next Sign in attempt
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          }
        })
      }

      return true;
    },

    async session({ token, session },) {
      // console.log({ session })
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existUser = await getUserById(token.sub);

      if (!existUser) return token;

      token.role = existUser.role;

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" }, // Prisma session strategy database dosent work
  ...authConfig,
})