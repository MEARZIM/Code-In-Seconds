import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { currentUserRole } from "@/lib/auth";

export async function GET() {
    const verfiedUser = await auth();
    const role = await currentUserRole();

    if (!verfiedUser) {
        return new NextResponse("User Not verified", { status: 500 });
    }

    if (role !== UserRole.ADMIN) {
        return new NextResponse("You do not have permission to access this route", { status: 403 });
    }

    

    return NextResponse.json("success", { status: 200 })
    
}