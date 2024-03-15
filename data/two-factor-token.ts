import { db } from "@/lib/db";


export const getTwoFactorTokenByToken = async (token: string) =>{
    try {
        const twoFactorToken = await db.twoFactorToken.findUnique({
            where: { token },
        })

        return twoFactorToken;

    } catch  {
        return null;
    }
}



export const getTwoFactorTokenByEmail = async (email: string) =>{
    try {
        const userEmail = await db.twoFactorToken.findFirst({
            where: { email },
        })

        return userEmail;

    } catch  {
        return null;
    }
}