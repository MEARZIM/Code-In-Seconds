import { getAuthSession } from "@/auth";


export const currentUserRole = async () => {
    const session = await getAuthSession();

    return session?.user?.role;
}