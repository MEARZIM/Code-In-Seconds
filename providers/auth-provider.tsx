import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';


export const AuthProvider = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const session = await getServerSession();

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
};