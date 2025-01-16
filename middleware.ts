import NextAuth, { Session } from "next-auth"

import authConfig from "@/auth.config"
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT_URL
} from "@/routes"
import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt";



export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  let isLoggedIn = false;
  const token = await getToken({ req });

  if (token) {
    isLoggedIn = true;
  }

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  console.log("Routes :", nextUrl.pathname)
  // console.log(nextUrl)
  
  if (isApiAuthRoutes) { return };

  if (isAuthRoutes) {
   
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl))
    }
    return ;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/auth/signin", nextUrl))
  }

  return 
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}