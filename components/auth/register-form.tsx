"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { RegisterSchema } from "@/schemas/index"
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
import { SignUpAction } from "@/actions/signup"

export const RegisterForm = () => {
    const [isPending, startTransiton] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransiton(() => { 
            SignUpAction(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        })

        form.reset();
    }

    return (
        <>
            <CardWrapper
                headerLabel="Create Your Account"
                backButtonLabel="Have an account?"
                backButtonHref="/auth/signin"
                showSocial
            >
                <Form {...form} >
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <div className="space-y-4">
                        <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Your name"
                                                type="text"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                                                placeholder="Your password"
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
                        <FormError message={error}/>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}