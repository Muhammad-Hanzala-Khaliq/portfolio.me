import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import slugify from "slugify";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  await connectDB();
  const { title, image, content } = await req.json();

  if (!title || !image || !content) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // ✅ Slug generate karna
  let slug = slugify(title, { lower: true, strict: true });

  // ✅ Check if slug already exists
  const exists = await Blog.findOne({ slug });
  if (exists) {
    const random = Math.floor(Math.random() * 1000);
    slug = `${slug}-${random}`;
  }

  const newBlog = await Blog.create({ title, image, content, slug });
  return NextResponse.json(newBlog, { status: 201 });
}
