"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostDetail from "@/components/PostDetail";
import type { Post } from "@/types/Post";

export default function PostPage() {
  const params = useParams(); // ✅ Devuelve { id: string } correctamente
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!params?.id) return;
    fetch(`/api/posts/${params.id}`)
      .then(res => res.json())
      .then(setPost);
  }, [params?.id]);

  if (!post) return <p>Cargando...</p>;
  return <PostDetail post={post} />;
}