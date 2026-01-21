import { NextResponse } from "next/server";
import { posts } from "../data";

export async function GET(req: Request) {
  // Extraer id de la URL directamente
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // obtiene el último segmento de la ruta

  if (!id) {
    return NextResponse.json({ message: "ID no especificado" }, { status: 400 });
  }

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return NextResponse.json({ message: "Post no encontrado" }, { status: 404 });
  }

  return NextResponse.json(post);
}
