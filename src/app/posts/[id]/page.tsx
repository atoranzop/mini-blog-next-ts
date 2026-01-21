"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/types/Post";

interface Props {
  params: { id: string };
}

export default function PostDetail({ params }: Props) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error("Post no encontrado");
        return res.json();
      })
      .then((data: Post) => setPost(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!post) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-slate-700">{post.body}</p>
    </div>
  );
}
