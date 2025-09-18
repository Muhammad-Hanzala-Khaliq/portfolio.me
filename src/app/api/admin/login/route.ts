import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }

  // ✅ Login success -> set cookie (1 hour session)
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only true in production
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });
  return res;
}
