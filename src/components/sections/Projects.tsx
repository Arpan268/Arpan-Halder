import GlowingCard from "../ui/glowing-card";
import TextReveal from "../ui/text-reveal";
import sfat_landing_page from "../../assets/SFAT_Landing_page.jpeg";
import segmentpro from "../../assets/SegmentPro_Landing_Page.jpeg";

export default function Projects() {
    const projects = [
        {
            title: "Solar Flux Anomaly Tracker (SFAT)",
            description: "A multi-tenant B2B SaaS platform for real-time space-weather intelligence, combining telemetry monitoring, anomaly detection, 24-hour ML flare-risk forecasting, role-based intelligence, AI analysis, and event-driven operational response.",
            tags: ["React", "Node.js", "ML/AI", "Multi-Tenant", "RBAC"],
            image: sfat_landing_page,
            github: "https://github.com/Arpan268/Solar-Flux-Anomaly-Tracker-SFAT-",
            demo: "https://solar-flux-anomaly-tracker-sfat.vercel.app/"
        },
        {
            title: "SegmentPro",
            description: "Python-based K-Means customer segmentation using annual income and spending score to classify customers into five behavioral segments. Achieved a 0.554 silhouette score and generated segment-specific marketing recommendations with downloadable PDF reports.",
            tags: ["Python", "Scikit-learn", "HTML/CSS", "Data Analysis"],
            image: segmentpro,
            github: "https://github.com/Arpan268/SegmentPro",
            demo: "https://segmentpro.onrender.com/"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-24 px-6 lg:px-8 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto">
                <TextReveal className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
                    <div className="w-20 h-1 bg-teal-500 rounded"></div>
                </TextReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <TextReveal key={index} delay={index * 150}>
                            <GlowingCard>
                                <div className="flex flex-col h-full bg-zinc-900/50">
                                    <div className="h-48 bg-zinc-800 relative overflow-hidden flex items-center justify-center">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-zinc-400 mb-6 leading-relaxed grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-xs font-medium bg-zinc-950 text-zinc-300 rounded-md border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                                            >
                                                GitHub
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                className="text-sm font-medium text-teal-500 hover:text-teal-400 transition-colors flex items-center gap-2 ml-auto"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
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