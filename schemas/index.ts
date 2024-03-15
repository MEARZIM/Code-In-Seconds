import * as z from "zod"

export const LoginSchema = z.object({
    email : z.string().email({
        message: "Email is required."
    }),
    password : z.string().min(2,{
        message: "Password is required"
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    name : z.string().min(1,{
        message: "Name is required"
    }),
    email : z.string().email({
        message: "Email is required."
    }),
    password : z.string().min(8,{
        message: "Minimum length of password is 8 characters"
    })
})

export const ResetSchema = z.object({
    email : z.string().email({
        message: "Email is required."
    }),
})

export const ResetNewPasswordSchema = z.object({
    password : z.string().min(8,{
        message: "Minimum length of password is 8 characters"
    })
})

