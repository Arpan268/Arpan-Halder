import TextReveal from "../ui/text-reveal";
import Typewriter from "../ui/typewriter";

export default function Hero() {
    const titles = [
        "Full-Stack Developer.",
        "Software Developer.",
        "Backend Developer.",
        "DSA & CS Enthusiast."
    ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 bg-zinc-950 text-white overflow-hidden"
        >

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <TextReveal className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 mb-8">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    <span className="text-sm text-zinc-300 tracking-wide">Available for Opportunities</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 flex flex-col items-center">
                    <span className="text-center">Hi, I'm Arpan Halder.</span>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-600 mt-4 block min-h-[2.5em] md:min-h-[1.5em] leading-tight w-full max-w-[90vw]">
                        <Typewriter words={titles} />
                    </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    I specialize in full-stack development with the MERN stack, building clean, scalable applications with a strong focus on backend architecture, APIs, and seamless frontend experiences.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="/Arpan_Halder_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg border border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        View Resume
                    </a>
                </div>
            </TextReveal>
        </section>
    );
}