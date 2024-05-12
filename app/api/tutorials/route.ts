import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
) {
    try {
        const verfiedUser = await auth();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 404 });
        }
        const url = new URL(req.url);
       
        const catSlug = url.searchParams.get('catSlug');
        const slug = url.searchParams.get('slug');


        if (slug && catSlug) {
            const specificTutorial = await db.tutorial.findUnique({
                where: {
                    slug: slug,
                    catSlug: catSlug,
                }
            })
           
            return NextResponse.json(specificTutorial);
        }else if(catSlug && !slug) {
            const tutorials = await db.tutorial.findMany({
                where:{
                    catSlug: catSlug,
                }
            });
           
            return NextResponse.json(tutorials);
        }

        const tutorials = await db.tutorial.findMany();
        return NextResponse.json(tutorials);



    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}