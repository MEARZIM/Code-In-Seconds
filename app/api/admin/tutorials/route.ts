import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { currentUserRole } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(
    req: Request,
) {
    try{
        const verfiedUser = await auth();
        const role = await currentUserRole();
    
        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }
    
        if (role !== UserRole.ADMIN) {
            return new NextResponse("You do not have permission to access this route", { status: 403 });
        }
    
        const body = await req.json();
        // console.log(body);
    
        const {
            title,
            desc,
            catSlug,
            blogChecker,
        } = body;
    
        // Space Remove
        let str = title;
        const slug = str.replace(/\s/g, "");
    
        const tutorial = await db.tutorial.create({
            data: {
                title: title as string,
                desc: desc as string,
                catSlug: catSlug as string,
                slug: slug as string,
                userId: verfiedUser.user?.id as string
            }
        })
    
        if(blogChecker) {
            const blog = await db.post.create({
                data:{
                    title: title,
                    slug: title,
                    catSlug: catSlug,
                    desc: desc,
                    userId: verfiedUser.user?.id as string
                }
            })
            return NextResponse.json("Tutorial and Blog Added successfully", { status: 200 })
        }
    
        return NextResponse.json("Tutorial Added successfully", { status: 200 })
        
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }

}