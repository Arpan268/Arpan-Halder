import TextReveal from "../ui/text-reveal";
import myself from "../../assets/myself.jpeg";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen py-24 px-6 lg:px-8 bg-zinc-900 text-white flex items-center justify-center"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <TextReveal className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>

                    <div className="w-20 h-1 bg-teal-500 rounded"></div>

                    <p className="text-lg text-zinc-400 leading-relaxed">
                        I’m a B.Tech Computer Science graduate with a strong interest in full-stack and backend development. I enjoy building web applications with clean architecture, reliable backend systems, APIs, databases, and thoughtful user experiences.
                    </p>

                    <p className="text-lg text-zinc-400 leading-relaxed">
                        My focus is on building scalable software using React, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. I particularly enjoy backend engineering, problem solving, and turning complex real-world workflows into practical software solutions.
                    </p>

                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Outside of development, I enjoy training at the gym and exploring new places through high-altitude trekking. I bring the same discipline, curiosity, and persistence into development—whether I’m solving a difficult problem, learning something new, or turning an idea into a working product.
                    </p>
                </TextReveal>

                <div className="relative group">
                    <img src={myself} alt="Your Photo" className="aspect-square rounded-2xl overflow-hidden bg-zinc-800 border border-white/10 relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2" />
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-teal-500/30 rounded-2xl z-0 transition-transform duration-500 group-hover:translate-y-4 group-hover:translate-x-4 hidden md:block"></div>
                </div>
            </div>
        </section>
    );
}