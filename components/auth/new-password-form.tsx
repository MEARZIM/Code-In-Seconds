"use client"

import * as z from "zod"

import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

import { ResetNewPasswordSchema } from "@/schemas/index"
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardWrapper } from "@/components/auth/card-wrapper"
import { FormError } from "@/components/auth/errors/form-error"
import { FormSuccess } from "@/components/auth/success/form-success"
import { newPassword } from "@/actions/new-password"

export const NewPasswordForm = () => {
    const token = useSearchParams().get('token')

    const [isPending, startTransiton] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    console.log(token);

    const form = useForm<z.infer<typeof ResetNewPasswordSchema>>({
        resolver: zodResolver(ResetNewPasswordSchema),
        defaultValues: {
            password: "",
        }
    });

    const handleSubmit = (values: z.infer<typeof ResetNewPasswordSchema>) => {
        setError("");
        setSuccess("");
        console.log(values);

        startTransiton(()=>{
            newPassword(values, token)
               .then((data) =>{
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }
               })
               .catch(() => setError("Something went wrong"))
        })
    }

    return (
        <>
            <CardWrapper
                headerLabel="Enter a new password"
                backButtonLabel="Back to Signin"
                backButtonHref="/auth/signin"
            >
                <Form {...form} >
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your new password"
                                                type="password"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                           
                        </div>
                        <FormSuccess message={success} />
                        <FormError message={error} />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                           Reset Password
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}