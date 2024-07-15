import prisma from "@/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { firstName, phone, password } = await req.json();
    console.log(firstName, phone, password);

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        firstName,
        phoneNumber: phone,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ message: "User created successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error creating user:", error);
    if (error.code === "P2002") {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
