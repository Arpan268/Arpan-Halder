import GlowingCard from "../ui/glowing-card";
import TextReveal from "../ui/text-reveal";

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "C", "Python (Basic)"]
        },
        {
            title: "Full Stack Development",
            skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]
        },
        {
            title: "Backend & APIs",
            skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "RBAC", "Event-Driven Architecture"]
        },
        {
            title: "Databases & Querying",
            skills: ["PostgreSQL", "MongoDB", "SQL"]
        },
        {
            title: "Core Computer Science",
            skills: ["DSA", "Object-Oriented Programming", "DBMS", "Operating Systems", "SDLC"]
        },
        {
            title: "Data & ML (Basic)",
            skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Machine Learning Algorithms"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-24 px-6 lg:px-8 bg-zinc-900 text-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <TextReveal className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
                    <div className="w-20 h-1 bg-teal-500 rounded"></div>
                </TextReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <TextReveal
                            key={index}
                            delay={index * 100}
                            className={index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 md:mx-auto lg:mx-0 w-full" : ""}
                        >
                            <GlowingCard className="h-full">
                                <div className="p-6 h-full bg-zinc-950/60 backdrop-blur-sm flex flex-col">
                                    <h3 className="text-lg font-semibold mb-6 text-zinc-100 flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-md bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                                        </span>
                                        {category.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1.5 text-xs font-medium bg-zinc-950/80 text-teal-50/70 rounded-md border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-300 hover:shadow-[0_0_10px_rgba(20,184,166,0.1)] cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlowingCard>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}