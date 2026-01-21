import Link from "next/link";
import type { Post } from "@/types/Post";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <div className="bg-gray-800 rounded-xl shadow p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-white mb-3">{post.body.slice(0, 80)}...</p>
      <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
        Ver más →
      </Link>
    </div>
  );
}
