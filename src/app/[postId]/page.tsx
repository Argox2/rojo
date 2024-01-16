import getFormattedDate from "@/app/utils/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/app/utils/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

function generateMetadata({ params }: { params: { postId: string }}) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function page({ params }: { params: { postId: string }}) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main>
            <h2>{title}</h2>
            <p>{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p><Link href="/blog">&larr; Back to posts</Link></p>
            </article>
        </main>
    )
}
