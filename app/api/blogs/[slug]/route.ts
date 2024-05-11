
import { db } from "@/lib/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';





// GET SINGLE POST
export async function GET(req: Request) {

  const blogId = req.url.split('/').pop();

  try {
    if (blogId) {
      const post = await db.post.update({
        where: { id: blogId },
        data: { views: { increment: 1 } },
        include: { user: true },
      });

      if (post) {
        return NextResponse.json(post);
      } else {
        return new NextResponse("Post not found", { status: 404 });
      }
      
    } else {
      return new NextResponse("Invalid url", { status: 404 });
    }


  } catch (err) {
    console.log("hellio")
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};