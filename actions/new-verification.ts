"use server"

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token"

export const newVerificationAction = async (
    token: string,
) => {
    const existingToken =await getVerificationTokenByToken(token);

    if (!existingToken){
        return {error: "Token Does Not Exist"};
    }

    const hasExpire = new Date(existingToken.expires) < new Date();

    if (hasExpire){
        return {error: "Token has expired"};
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser){
        return {error: "Email does Not Exist"};
    }

    await db.user.update({
        where: {
            id: existingUser.id
        },
        data:{
            emailVerified: new Date(),
            email: existingUser.email
        }
    })

    await db.verificationToken.delete ({
        where: {
            id: existingToken.id
        }
    })

    return { success: "Email verified"}
}