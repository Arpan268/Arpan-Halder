import type { ReactNode } from "react";

export default function GlowingCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-px bg-linear-to-r from-teal-500 to-emerald-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full w-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                {children}
            </div>
        </div>
    );
}