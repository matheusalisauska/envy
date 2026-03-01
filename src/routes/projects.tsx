import { ProjectsList } from '@/features/projects/components/list/ProjectsList';
import { authenticatedMiddlware } from '@/lib/auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  server: {
    middleware: [authenticatedMiddlware],
  },
  component: App,
})

function App() {


  return (
    <div className="flex flex-col gap-4 min-h-screen p-12 w-full">
      <div className='flex w-full items-center justify-between'>
        <h1 className='font-semibold text-3xl'>PROJECTS</h1>
        <button className='bg-primary font-medium cursor-pointer hover:bg-[#82cc57] text-sm text-primary-foreground px-6 py-2 rounded-sm w-fit'>New project</button>
      </div>
      <ProjectsList />
    </div>
  )
}
