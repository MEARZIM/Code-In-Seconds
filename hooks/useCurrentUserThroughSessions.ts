"use client"

import { useSession } from "next-auth/react"


export const useCurrentUserThroughSessions = () => {
    const session = useSession();

    return session.data?.user ?? null;
}
 

