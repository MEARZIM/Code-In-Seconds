
import { db } from "@/lib/db";
import { NextResponse } from "next/server";





// GET SINGLE POST
export async function GET(req: Request) {

  
  try {
    const blogId = req.url.split('/').pop();
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