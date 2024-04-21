import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { currentUserRole } from "@/lib/auth";
import { db } from "@/lib/db";

const PROBLEM_PER_PAGE = 10;

export async function POST(
    req: Request,
) {
    try {
        const verfiedUser = await auth();
        const role = await currentUserRole();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }

        if (role !== UserRole.ADMIN) {
            return new NextResponse("You do not have permission to access this route", { status: 403 });
        }

        const body = await req.json();

        const {
            catSlug,
            question,
            answer
        } = body

        // Space Remove
        let str = question;
        const slug = str.replace(/\s/g, "");

        const problems = await db.problem.create({
            data: {
                slug: slug,
                question: question,
                answer: answer,
                catSlug: catSlug,
                userId: verfiedUser.user.id as string,
            }
        })

        return NextResponse.json("Problems Added successfully", { status: 200 })

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }

}

export async function GET(
    req: Request
) {
    try {
        const verfiedUser = await auth();
        const role = await currentUserRole();

        if (!verfiedUser) {
            return new NextResponse("User Not verified", { status: 500 });
        }

        if (role !== UserRole.ADMIN) {
            return new NextResponse("You do not have permission to access this route", { status: 403 });
        }

        const { searchParams } = new URL(req.url);

        const page = searchParams.get('page');
        console.log(page);

        const query = {
            take: PROBLEM_PER_PAGE,
            skip: PROBLEM_PER_PAGE * (Number(page) - 1),
        };

        const problems = await db.problem.findMany(query);
        
        return NextResponse.json(problems, { status: 200 })

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }

}