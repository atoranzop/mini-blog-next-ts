"use client"; // solo si quieres interactividad

import type { Post } from "@/types/Post";

interface Props {
  post: Post;
}

export default function PostDetail({ post }: Props) {
  return (
    <div className="bg-gray-900 shadow rounded-xl p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-white">{post.body}</p>
    </div>
  );
}
