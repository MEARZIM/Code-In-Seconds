import { DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client"

type UserId = string

export type ExtendedUser = DefaultSession["user"] & {
        role: UserRole
}

declare module "next-auth" {
    interface Session {
      user: ExtendedUser & {
        id: UserId
      };
    } 
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}