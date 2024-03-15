import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (
    userID : string
) =>{
    try {
        
        const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
            where: { userID } 
        })

        return twoFactorConfirmation;

    } catch  {
        return null;
    }
}