import Link from "next/link"

interface ProjectCardProps {
    title: string;
    year: number;
    url: string;
    desc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, year, url, desc }) => {
    return (
        <Link href={url}>
            <div className="project-card">
                <div className="project-card-header">
                    <h3>{title}</h3>
                    <time>{year}</time>
                </div>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

export default ProjectCard;
