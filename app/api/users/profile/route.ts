import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET (
    req: Request
) {
    try {
        const url =  req.url.split('?')[1];
      

        const user = await getUserById(url);
        
        const followersCount = await db.user.count({
            where: {
                followingIds: {
                    has: url,
                }
            }
        });
        // console.log(user, followersCount);
        return NextResponse.json({user, followersCount});

    } catch (error) {
        console.log("[CODE ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}