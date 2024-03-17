"use client"

import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaGoogle, FaUser } from 'react-icons/fa'

import { Modal } from "@/components/ui/modal"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useManageAccountModal } from "@/hooks/useManageAccountModal"
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Switch } from "@/components/ui/switch";
import { useCurrentUserThroughSessions } from "@/hooks/useCurrentUserThroughSessions";



const formSchema = z.object({
    twoFactor: z.boolean().default(false).optional(),
})

export const ManageAccountModal = () => {
    const ManageAccountModal = useManageAccountModal();

    const user = useCurrentUserThroughSessions();
    // console.log(user);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <Modal
            title="Accounts"
            description="Manage your account information"
            isOpen={ManageAccountModal.isOpen}
            onClose={ManageAccountModal.onClose}
        >

            <div className="flex w-fit">

                <section className="flex-grow bg-white py-2 px-4">
                    <div className="max-w-4xl mx-auto">

                        <div className="space-y-4">
                            <div >
                                <h2 className="text-lg font-semibold">Profile</h2>
                                <div className="mt-2 flex items-center space-x-4 border-t-2">
                                    <button className=" m-2 rounded-full shadow-lg bg-white"
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                alt="User profile picture"
                                                src={user?.image || ""}
                                                className="rounded-full h-6 w-6"

                                            />
                                            <AvatarFallback >
                                                <FaUser className="text-sky-500"/>
                                            </AvatarFallback>
                                        </Avatar>
                                    </button>
                                    <span className="text-sm font-medium ">{user?.name}</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold ">Email addresses</h2>
                                <div className="mt-2 flex items-center justify-between ">
                                    <span className="text-sm ">{user?.email}</span>
                                    <Badge variant="secondary">Primary</Badge>
                                </div>

                            </div>
                            <div>
                                <h2 className="text-lg font-semibold ">Connected accounts</h2>
                                <div className="mt-2 flex items-center space-x-4">
                                    <FcGoogle className='h-5 w-5' />
                                    <span className="text-sm">Google ({user?.email})</span>
                                </div>

                            </div>
                            <div className="">

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                        <div>
                                            <h2 className="text-lg font-semibold mb-2">Two Factor Authentication</h2>
                                            <div className="space-y-4">
                                                <FormField
                                                    control={form.control}
                                                    name="twoFactor"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                                            <div className="space-y-0.5">
                                                                <FormLabel>Enhanced Security</FormLabel>
                                                                <FormDescription className="text-xs">
                                                                    It requires a second piece of information beyond username and password.
                                                                </FormDescription>
                                                            </div>
                                                            <FormControl>
                                                                <Switch
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />

                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <Button type="submit">Submit</Button>
                                        </div>
                                    </form>
                                </Form>

                            </div>

                            <div>
                                <h2 className="text-lg font-bold">Denger</h2>
                                <div className="mt-2 flex items-center justify-between space-x-4">
                                    <div className="text-sm">
                                        Delete Account
                                        <div className="text-xs">
                                            Delete your account and all its associated data
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-red-500 hover:bg-red-700 text-white">
                                        DELETE ACCOUNT
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Modal>
    )
}

