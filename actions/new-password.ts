"use server"

import * as z from "zod"
import bcrypt from "bcryptjs"

import { getUserByEmail } from "@/data/user"
import { ResetNewPasswordSchema } from "@/schemas"
import { getPasswordResetTokenByToken } from "@/data/password-reset-token"
import { db } from "@/lib/db"

export const newPassword =async(
    values: z.infer<typeof ResetNewPasswordSchema>,
    token?: string | null
)=>{
    console.log(token)
    if (!token) {
        return {error: "Missing token"}
    }

    const validatedFields  =  ResetNewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error : "Invalid Credentials"}
    }

    const { password } = validatedFields.data

    const existingToken = await getPasswordResetTokenByToken(token)

    if(!existingToken){
        return {error: "invalid token"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired){
        return {error: "Expired token"}
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if(!existingUser){
        return {error: "Email does not exist"}
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await db.user.update({
        where: {id: existingUser.id},
        data: {password: hashedPassword}
    })

    await db.passwordResetToken.delete({
        where: {id: existingToken.id}
    })


    return {success: "Password updated successfully"}
}