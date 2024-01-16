import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>No existe este sitio. </h2>
            <p><Link href="/blog">&larr; Back to posts</Link></p>
        </div>
    )
}
