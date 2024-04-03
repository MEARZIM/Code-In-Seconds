import { auth } from "@/auth";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

// Update Liked Users
export async function POST(
    req: Request
) {
    try {
        const verifiedUSer = await auth();

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }

        const body = await req.json();
        
        const { postId } = body.data;
       

        if (!postId) {
            return new NextResponse("Invalid Id", { status: 400 });
        }

        const post = await db.post.findUnique({
            where: {
                id: postId
            }
        });


        if (!post) {
            return new NextResponse("Post Not found", { status: 400 });
        }

        let updatetedLikeIDs = [...(post.likedIds || [])];

        updatetedLikeIDs.push(verifiedUSer.user.id as string);

        const updatedPost = await db.post.update({
            where: {
                id: postId
            },
            data: {
                likedIds: updatetedLikeIDs
            }
        })
        return NextResponse.json(updatedPost, { status: 200 });

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// Delete Liked Users
export async function DELETE(
    req: Request
) {
    try {
        const verifiedUSer = await auth();

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }

      
        const body = await req.json();
       
        const { postId } = body;
        

        const post = await db.post.findUnique({
            where: {
                id: postId
            }
        });

        if (!post) {
            return new NextResponse("Invalid Id", { status: 400 });
        }

        let updatetedLikeIDs = [...(post.likedIds || [])];

        updatetedLikeIDs = updatetedLikeIDs.
            filter((likeId) => likeId !== verifiedUSer.user.id)

            console.log(updatetedLikeIDs)
        const updatedPost = await db.post.update({
            where: {
                id: postId
            },
            data: {
                likedIds: updatetedLikeIDs
            }
        })
        return NextResponse.json(updatedPost, { status: 200 });
       
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}