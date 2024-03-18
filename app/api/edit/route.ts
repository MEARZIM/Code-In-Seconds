import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
) {
    try {

        const verifiedUSer = await auth();

        // console.log(verifiedUSer)

        if (!verifiedUSer) {
            return new NextResponse("User Not Verified", { status: 400 });
        }

        const body = await req.json();
        const {
            name,
            username,
            bio,
            profileImage,
            coverImage,
        } = body;

        // console.log(body);

        const updatedUser = await db.user.update({
            where: {
                id: verifiedUSer.user.id,
            },
            data: {
                name,
                //   username,
                bio,
                profileImage,
                coverImage
            }
        });

        return NextResponse.json(updatedUser)

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}