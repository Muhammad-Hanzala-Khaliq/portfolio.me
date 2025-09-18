import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// ✅ GET /api/blog/:slug
export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> } // 👈 Define as Promise
) {
  await connectDB();

  const { slug } = await context.params; // 👈 AWAIT params

  // IP extract karo
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0].trim() || "unknown";

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // ✅ Agar pehle se ip exist nahi karti tabhi views++ karo
  if (!blog.viewers.includes(ip)) {
    blog.views = (blog.views || 0) + 1; // null safety
    blog.viewers.push(ip);
    await blog.save();
  }

  return NextResponse.json(blog);
}

// ✅ DELETE /api/blog/:slug
export async function DELETE(
  req: Request,
  context: { params: Promise<{ slug: string }> } // 👈 Already correct
) {
  try {
    await connectDB();
    const { slug } = await context.params; // 👈 Already correct

    const blog = await Blog.findOneAndDelete({ slug });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}