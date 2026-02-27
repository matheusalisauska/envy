import { RefreshCcw } from "lucide-react";


interface ProjectCardProps {
    project: {
        name: string;
    },
}

export function ProjectCard({ project }: ProjectCardProps) {
    const seed = Math.random() * 1000;

    return (
        <div className='flex flex-col gap-4 rounded-lg border border-stone-200 hover:border-stone-400/80 transition-all duration-75 cursor-pointer shadow-xs hover:shadow-sm w-72 p-4 bg-card'>
            <div className='flex flex-col'>
                <h2 className='font-semibold text-lg capitalize'>{project.name}</h2>
                <p className='text-muted-foreground text-sm'>Plataforma de contratos</p>
            </div>
            <div className="flex justify-between items-end">
                <div className='flex relative'>
                    <div className='rounded-full size-8 overflow-hidden'>
                        <img src={`https://picsum.photos/seed/${seed}/200/300`} className='object-cover size-full' alt="placeholder" />
                    </div>
                    <div className='rounded-full size-8 overflow-hidden -ml-4 border-white border-2'>
                        <img src={`https://picsum.photos/seed/${seed + 1}/200/300`} className='object-cover size-full' alt="placeholder" />
                    </div>
                    <div className='rounded-full size-8 overflow-hidden -ml-4 border-white border-2'>
                        <img src={`https://picsum.photos/seed/${seed + 2}/200/300`} className='object-cover size-full' alt="placeholder" />
                    </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                    <RefreshCcw size={12} />
                    <p className="text-xs">2 hours ago</p>
                </div>
            </div>
            {/* <p className='text-sm text-muted-foreground'>3 members</p> */}
        </div>
    )
}