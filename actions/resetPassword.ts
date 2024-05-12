"use server"

import * as z from "zod"

import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user";
import { generateResetPasswordToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";



export async  function resetPassword ( values : z.infer<typeof ResetSchema> ) {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success){
        return { error: "Invalid Email" }
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
        return { error: "Email not found" }
    }


    const passwordResetToken = await generateResetPasswordToken(email);

    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return { success: "Reset Email Send" }
}