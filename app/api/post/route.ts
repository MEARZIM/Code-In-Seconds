import { auth } from "@/auth"
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const POST_PER_PAGE = 2;

//Geting all the Post
export async function GET(
    req: Request
) {
    const userId =  req.url.split('?')[1];

    const { searchParams } = new URL(req.url);

    const  page = searchParams.get('page');

    try {

        const verfiedUser = await auth();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }

        let posts
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
        } else {
            posts = await db.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (Number(page) - 1) ,
                include: {
                    user: true,
                    comments: true,
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
        }
        // console.log(posts)

        return NextResponse.json(posts);

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// Create a new Post
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