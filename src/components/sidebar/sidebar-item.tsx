import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    href?: string;
}

export function SidebarItem({ href, children }: Props) {
    const { pathname } = useLocation();

    return (
        <Link to={href} className="w-full">
            <div className={cn(
                "flex items-center gap-2 text-stone-700 hover:bg-stone-100 w-full py-2 px-2 rounded-md",
                pathname === href && "border border-[#4F8F2E]/20 bg-[#EAF8E1] text-[#4F8F2E] hover:bg-[#dff4d3]"
            )}>
                {children}
            </div>
        </Link>
    )
}