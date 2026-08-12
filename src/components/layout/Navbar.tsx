import { useState } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Navbar() {
    const activeId = useScrollSpy(["hero", "about", "projects", "skills", "contact"]);
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <div
                        className="text-2xl font-bold tracking-tighter text-white cursor-pointer flex items-center"
                        onClick={() => scrollToSection("hero")}
                    >
                        Arpan<span className="text-teal-500">.dev</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${activeId === item.id
                                        ? "text-teal-400"
                                        : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-transparent"
                    }`}
            >
                <div className="flex flex-col px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left text-base font-medium transition-colors duration-300 ${activeId === item.id
                                    ? "text-teal-400"
                                    : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}