import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@/auth"


const POST_PER_PAGE = 5;

//Geting all the Blogs
export async function GET(
    req: Request
) {
    // const userId = req.url.split('?')[1];

    
    try {
        const { searchParams } = new URL(req.url);
    
        const userId = searchParams.get('userId');
        const postId = searchParams.get('postId');
        const page = searchParams.get('page');
        const cat = searchParams.get('cat');

        const verfiedUser = await auth();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }
        // console.log(userId);
        
        let posts;
        let purifiedPosts;
        let count;
        
        if (userId) {
            posts = await db.post.findMany({
                where: {
                    userId,
                },
                include: {
                    user: true,
                    comments: true,
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
        }  else if (postId) {
            posts = await db.post.findUnique({
                where: {
                    id: postId,
                },
                include: {
                    user: true,
                    comments: true,
                }
            })
            
            return NextResponse.json(posts, {status: 200})
        }
        else {
            const query = {
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (Number(page) - 1),
                where: {
                    ...(cat && { catSlug: cat }),
                },
                include: {
                    user: true,
                    comments: true,
                },
            };
            // console.log(query);

            [purifiedPosts, count] = await db.$transaction([
                db.post.findMany(query),
                db.post.count({ where: query.where }),
            ]);

        }
       
        // console.log(purifiedPosts)

        return new NextResponse(JSON.stringify({ purifiedPosts, count }));

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// Create a new Blog
export async function POST(
    req: Request,
) {
    try {

        const verfiedUser = await auth();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }

        const body = await req.json();
        // console.log(body);

        const {
            title,
            blog,
            catSlug,
            img
        } = body;

        const post = await db.post.create({
            data: {
                title: title,
                slug: title,
                catSlug: catSlug,
                desc: blog,
                userId: verfiedUser.user?.id as string
            }
        });

        // console.log(post);

        return NextResponse.json(post);

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}