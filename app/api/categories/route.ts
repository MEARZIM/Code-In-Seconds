import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        
        const categories = await db.category.findMany();

        return NextResponse.json(categories);

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}