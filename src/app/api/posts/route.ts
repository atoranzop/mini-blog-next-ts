import { NextResponse } from "next/server";
import type { Post } from "@/types/Post";
import { posts } from "./data";

export async function GET() {
  return NextResponse.json(posts);
}

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
