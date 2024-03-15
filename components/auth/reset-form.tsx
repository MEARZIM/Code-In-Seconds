"use client"

import * as z from "zod"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { ResetSchema } from "@/schemas/index"
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
import { resetPassword } from "@/actions/resetPassword"

export const ResetForm = () => {
    const [isPending, startTransiton] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    console.log(error);

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    });

    const handleSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");


        startTransiton(()=>{
            resetPassword(values)
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
                headerLabel="Forget Password"
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="yourname@example.com"
                                                type="email"
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
                            Send Reset Email
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}