import { useProjectsQuery } from "../../hooks/use-query";
import { ProjectCard } from "./ProjectCard";


export function ProjectsList() {
    const { data } = useProjectsQuery();



    return (
        <div className='flex flex-wrap gap-4 mt-8'>
            {data && data.data.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}