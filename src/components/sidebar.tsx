import { FolderOpen, LayoutDashboard, Settings } from "lucide-react"

export function Sidebar() {
    return (
        <aside className="flex flex-col gap-2 bg-white w-80 shrink-0 py-4 px-2 border border-stone-150">
            <div className="flex items-start gap-2 pl-1 mt-4">
                <div className="bg-primary size-9 rounded-md"></div>
                <p className="text-xl font-medium">Envy</p>
            </div>
            <div className="flex flex-col items-start mt-4 cursor-pointer">
                <div className="flex items-center gap-2 hover:bg-stone-100/50 w-full py-2 px-2 rounded-md">
                    <LayoutDashboard size={18} className="text-stone-700" />
                    <a href="/" className="text-stone-700 hover:text-stone-900 mb-0.5">Dashboard</a>
                </div>
                <div className="flex items-center gap-2 hover:bg-stone-100/50 w-full py-2 px-2 rounded-md">
                    <FolderOpen size={18} className="text-stone-700" />
                    <a href="/projects" className="text-stone-700 hover:text-stone-900 mb-0.5">Projects</a>
                </div>
                <div className="flex items-center gap-2 hover:bg-stone-100/50 w-full py-2 px-2 rounded-md">
                    <Settings size={18} className="text-stone-700" />
                    <a href="#" className="text-stone-700 hover:text-stone-900 mb-0.5">Settings</a>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-auto mb-4">
                <div className="bg-amber-400 size-9 rounded-full">
                </div>
                <div className="flex flex-col">
                    <p className="leading-4">Matheus Alisauska</p>
                    <p className="text-sm text-stone-500">Free plan</p>
                </div>
            </div>
        </aside>
    )
}