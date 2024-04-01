import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
) {
    try {

        const verifiedUSer = await auth();

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }

        const { searchParams } = new URL(req.url);
        const PostId = searchParams.get("postId");
        // console.log(PostId);

        if (!PostId) {
            return new NextResponse("User Not Verified", { status: 400 });
        }
        const res = await db.comment.findMany({
            where: {
                postId: PostId,
            },
            include: { user: true },
        });
        // console.log(res);
        return NextResponse.json(res, { status: 200 });


    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}



export async function POST(
    req: Request,
) {
    try {

        const verifiedUSer = await auth();
        console.log(verifiedUSer);

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }


        const body = await req.json();
        console.log(body);
        const {
            comments,
            postId,
        } = body.data;
        console.log(comments);

       
        const res = await db.comment.create({
            data: { 
                desc: comments , 
                postId: postId ,  
                userId: verifiedUSer?.user?.id as string
            },
        })
        console.log(res);
        return NextResponse.json(res, { status: 200 });


    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

