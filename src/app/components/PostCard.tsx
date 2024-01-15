import Link from "next/link";
import getFormattedDate from "@/app/utils/getFormattedDate";

interface PostCardProps {
    id: string;
    title: string;
    date: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, date }) => {
    return (
        <Link href={`${id}`}>
            <div className="post-card">
                <p>{title}</p>
                <p>{getFormattedDate(date)}</p>
            </div>
        </Link>
    )
}

export default PostCard;

