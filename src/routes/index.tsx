import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {


  return (
    <div className="min-h-screen p-12">
      <h1 className='font-semibold text-3xl'>Dashboard</h1>
      <div className='rounded-md border w-fit p-4 bg-card'>
        <p>texto</p>
      </div>
    </div>
  )
}
