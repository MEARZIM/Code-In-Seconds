
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";


export async function GET() {

  try {

    const loginUser = await auth();

    // Filter out the loginUser from the users array
    const users = await db.user.findMany({
      where: {
        id: {
          not: loginUser?.user.id,
        },
      },
    })
    console.log(users)
    return NextResponse.json(users);

  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}