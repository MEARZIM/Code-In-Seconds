import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {

        const verifiedUSer = await auth();

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }

        const mostLikedPost = await db.post.findMany({
            orderBy: {
                // Order by the count of likedIds in descending order
                likesCount: 'desc'
            },
            take: 2,
            include:{
                user: true
            }
        })

        return NextResponse.json(mostLikedPost, { status: 200 });

    } catch (err) {
        console.error(err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}