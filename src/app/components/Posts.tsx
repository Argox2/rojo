import PostCard from "./PostCard";
import { getSortedPostsData } from "@/app/utils/posts";

type PostsProps = {
    numOfPosts?: number;
}

const Posts: React.FC<PostsProps> = ({ numOfPosts }) => {

    const posts = getSortedPostsData();
    const limitedPosts = numOfPosts ? posts.slice(0, numOfPosts) : posts;

    return (
        <div>
            {limitedPosts.map((post, index) => (
                <PostCard
                    key={index}
                    id={post.id}
                    title={post.title}
                    date={post.date}
                />
            ))}
        </div>
    )
}

export default Posts;
