import { auth } from "@/auth";

export const currentUserRole = async () => {
    const session = await auth();

    return session?.user?.role;
}