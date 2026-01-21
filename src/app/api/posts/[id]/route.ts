import { NextResponse } from "next/server";
import type { Post } from "@/types/Post";

// Esta DB debe ser la misma que en route.ts
// En un proyecto real usarías una DB o exportar la variable
let posts: Post[] = [
  { id: 1, title: "Primer post", body: "Contenido del primer post" },
  { id: 2, title: "Segundo post", body: "Contenido del segundo post" },
];

// GET /api/posts/:id
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find(p => p.id === Number(params.id));
  if (!post) {
    return NextResponse.json({ message: "Post no encontrado" }, { status: 404 });
  }
  return NextResponse.json(post);
}
