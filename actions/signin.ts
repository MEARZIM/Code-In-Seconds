"use server"

import * as z from "zod"
import { AuthError } from "next-auth";


import { db } from "@/lib/db";
import {
    sendVerificationEmail,
    sendTwoFactorTokenEmail
}
    from "@/lib/mail";
import {
    generateVerificationToken,
    generateTwoFactorToken
}
    from "@/lib/tokens";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const SignInAction = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid Fields!" }
    }
    console.log(validatedFields.data)
    const { email, password, code } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email Does Not Exist" }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);

        await sendVerificationEmail(verificationToken.email, verificationToken.token)

        return { success: "Confirmation Email Sent." }
    }

    if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if (code) {
            console.log(code)
            const twoFactorToken =  await getTwoFactorTokenByEmail(existingUser.email);
            if(!twoFactorToken){
                return { error: "Invalid Code" }
            }

            if (twoFactorToken.token !== code) {
                return { error: "Invalid code" }
            }

            const hasExpires = new Date(twoFactorToken.expires) < new Date();

            if (hasExpires) {
                return { error: "Code is expired" }
            }

            await db.twoFactorToken.delete({
                where :{
                    id : twoFactorToken.id
                }
            });

            const existingConfirmatation = await getTwoFactorConfirmationByUserId(existingUser.id);

            if (existingConfirmatation) {
                await db.twoFactorConfirmation.delete({
                    where :{
                        id : existingConfirmatation.id
                    },
                });
            }
            await db.twoFactorConfirmation.create({
                data : {
                    userID : existingUser.id ,
                }
            })

        } else {
            const twoFactorToken = await generateTwoFactorToken(existingUser.email);

            await sendTwoFactorTokenEmail(
                twoFactorToken.email,
                twoFactorToken.token
            )

            return { twoFactor: true }
        }
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT_URL,
        })
        return { success: "Successfully signed in" }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" }

                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error
    }
}

