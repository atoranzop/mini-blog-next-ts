import { NextResponse } from "next/server";
import type { Post } from "@/types/Post";

// DB en memoria
let posts: Post[] = [
  { id: 1, title: "Primer post", body: "Contenido del primer post" },
  { id: 2, title: "Segundo post", body: "Contenido del segundo post" },
];

// GET /api/posts
export async function GET() {
  return NextResponse.json(posts);
}

// POST /api/posts
export async function POST(req: Request) {
  const body = await req.json();
  const newPost: Post = {
    id: Date.now(),
    title: body.title,
    body: body.body,
  };
  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
}
