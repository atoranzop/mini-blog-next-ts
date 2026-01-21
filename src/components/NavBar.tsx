import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/create">Crear Post</Link>
    </nav>
  );
}
