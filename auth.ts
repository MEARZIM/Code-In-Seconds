import { UserRole } from "@prisma/client"
import { getServerSession, type NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

import { db } from "@/lib/db"
// import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
// import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" }, // Prisma session strategy database dosent work
  pages: {
    signIn: "/auth/signin",
    error: '/auth/error',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
  ],
  // events: {
  //   async linkAccount({ user }) {
  //     await db.user.update({
  //       where: {
  //         id: user.id,
  //       },
  //       data: {
  //         emailVerified: new Date()
  //       }
  //     })
  //   }
  // },
  callbacks: {
    // async signIn({ user, account }) {

    //   // Allow OAuth without email verification
    //   if (account?.provider !== "credentials") return true;

    //   const existingUser = await getUserById(user.id as string);

    //   // Prevent sign in without email verification
    //   if (!existingUser?.emailVerified) return false;

    //   if (existingUser.isTwoFactorEnabled) {
    //     const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
    //     console.log({
    //       twoFactorConfirmation
    //     })

    //     if (!twoFactorConfirmation) {
    //       return false
    //     }

    //     // Delete two factor confirmation on next Sign in attempt
    //     await db.twoFactorConfirmation.delete({
    //       where: {
    //         id: twoFactorConfirmation.id,
    //       }
    //     })
    //   }

    //   return true;
    // },

    async session({ token, session }) {
      // console.log({ session })
      if (token && session) {
        session.user = {
          ...session.user,
          id: token.id!,
          role: token.role as UserRole,
        };
      }
      console.log("Session Data:", session);
      return session;
    },

    async jwt({ token, user }) {
      if (!token.sub) return token;

      const existUser = await getUserById(token.sub);

      if (!existUser) {
        token.id = user!.id;
        return token;
      };

      if (user) {
        token.id = user.id;
        token.role = user.role || "USER";
      }

      console.log("JWT Token:", token);
      return token;
    },
    redirect() {
      return '/'
    }
  },
}

export const getAuthSession = () => getServerSession(authOptions);

