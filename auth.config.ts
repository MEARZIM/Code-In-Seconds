import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
// import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"

import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"

export default {
  providers: [
    Credentials({
      async authorize ( credentials ){
          const validatedFields = LoginSchema.safeParse(credentials)

          if(validatedFields.success){
            const {email, password} = validatedFields.data;

            const user = await getUserByEmail(email)

            if(!user || !user.password) return null;

            const passwordMatchs = await bcrypt.compare(password, user.password);

            if(passwordMatchs){
              return user;
            }
          }
          return null;
      }
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ]
} satisfies NextAuthConfig