import ProjectCard from "@/app/components/ProjectCard";
import projects from "@/../lib/projects.json";

type ProjectsProps = {
    numOfProjects?: number;
}

const ProjectsDisplay: React.FC<ProjectsProps> = ({ numOfProjects }) => {

    const limitedProjects = numOfProjects ? projects.slice(0, numOfProjects) : projects;

    return (
        <div>
            {limitedProjects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    year={project.year}
                    url={project.url}
                    desc={project.desc}
                />
            ))}
        </div>
    )
}

export default ProjectsDisplay;
