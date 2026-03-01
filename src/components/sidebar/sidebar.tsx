import { useLocation } from "@tanstack/react-router";
import { FolderOpen, LayoutDashboard, Settings } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const routes = [
    {
        name: "Dashboard",
        icon: <LayoutDashboard size={18} />,
        href: "/"
    },
    {
        name: "Projects",
        icon: <FolderOpen size={18} />,
        href: "/projects"
    },
    {
        name: "Settings",
        icon: <Settings size={18} />,
        href: "/settings"
    }
]

export function Sidebar() {

    return (
        <aside className="flex flex-col gap-2 bg-white w-64 shrink-0 py-4 pl-4 pr-2 border border-stone-150">
            <div className="flex items-start gap-2 pl-1 mt-4">
                <div className="bg-primary size-8 rounded-md"></div>
                <p className="text-xl font-normal  text-stone-700">Envy</p>
            </div>
            <div className="flex flex-col gap-1 items-start mt-4 cursor-pointer text-sm">
                {routes.map((route) => (
                    <SidebarItem href={route.href} key={route.name}>
                        {route.icon}
                        {route.name}
                    </SidebarItem>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-auto mb-4">
                <div className="bg-amber-400 size-9 rounded-full">
                </div>
                <div className="flex flex-col">
                    <p className="leading-4 text-sm">Matheus Alisauska</p>
                    <p className="text-xs text-stone-500">Free plan</p>
                </div>
            </div>
        </aside>
    )
}