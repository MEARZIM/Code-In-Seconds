"use client"

import * as z from "zod"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from "@/schemas/index"
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
import { SignInAction } from "@/actions/signin"

export const LoginForm = () => {
    const [isPending, startTransiton] = useTransition();

    const [twoFactor, setTwoFactor] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    // console.log(error);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log("clicked")
        setError("");
        setSuccess("");

        startTransiton(() => {
            SignInAction(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }

                    if (data?.twoFactor) {
                        setTwoFactor(true)
                    }

                })
                .catch(() => setError("Something went wrong"));
        })
    }

    return (
        <>
            <CardWrapper
                headerLabel="WELCOME BACK"
                backButtonLabel="Don't have an account?"
                backButtonHref="/auth/signup"
                showSocial
            >
                <div className="hidden" />
                {/* <Form {...form} >
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">

                            {twoFactor && (
                                <FormField
                                    control={form.control}
                                    name="code"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Verification Code
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter verification code here..."
                                                    disabled={isPending}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            {!twoFactor && (
                                <>
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
                                                <Button
                                                    size="sm"
                                                    variant="link"
                                                    className="flex justify-end px-0 font-normal"
                                                    asChild
                                                >
                                                    <Link href="/auth/reset">
                                                        Forget Password?
                                                    </Link>
                                                </Button>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )
                            }
                        </div>
                        <FormSuccess message={success} />
                        <FormError message={error} />

                        {twoFactor ? (
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isPending}
                            // onClick={() =>{console.log("Click")}}
                            >
                                Confirm
                            </Button>
                        ) : (<Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        // onClick={() =>{console.log("Click")}}
                        >
                            Sign In
                        </Button>)}

                    </form>
                </Form> */}
            </CardWrapper>
        </>
    )
}