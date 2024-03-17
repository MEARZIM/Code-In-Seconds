import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';


export const AuthProvider = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
};