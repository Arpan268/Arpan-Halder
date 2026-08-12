import { useState } from "react";
import TextReveal from "../ui/text-reveal";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/maewjbjl", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();

                setTimeout(() => {
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-screen py-24 px-6 lg:px-8 bg-zinc-950 text-white flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div>
                    <TextReveal>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
                        <div className="w-20 h-1 bg-teal-500 rounded mb-8"></div>

                        <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
                            I am currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
                        </p>
                    </TextReveal>

                    <TextReveal delay={100} className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-teal-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Email</h4>
                                <a href="mailto:arpanhalderah3@gmail.com" className="text-lg font-medium hover:text-teal-400 transition-colors">
                                    arpanhalderah3@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-teal-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Phone</h4>
                                <a href="tel:8609404564" className="text-lg font-medium hover:text-teal-400 transition-colors">
                                    +91 8609404564
                                </a>
                            </div>
                        </div>
                    </TextReveal>

                    <TextReveal delay={200} className="flex flex-wrap gap-4 mt-12">
                        <a
                            href="https://linkedin.com/in/arpan-halder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 font-medium text-zinc-300 hover:text-white hover:border-teal-500/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Arpan268"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 font-medium text-zinc-300 hover:text-white hover:border-teal-500/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </TextReveal>
                </div>

                <TextReveal delay={300}>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 flex flex-col gap-6 mt-12 lg:mt-0"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className={`w-full font-semibold py-4 rounded-lg transition-colors duration-300 mt-2 flex justify-center cursor-pointer items-center gap-2 ${status === "success"
                                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                                : status === "error"
                                    ? "bg-red-600 hover:bg-red-500 text-white"
                                    : "bg-teal-600 hover:bg-teal-500 text-white"
                                } ${status === "submitting" ? "opacity-75 cursor-not-allowed" : ""}`}
                        >
                            {status === "idle" && "Send Message"}
                            {status === "submitting" && (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Sending...
                                </>
                            )}
                            {status === "success" && (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Message Sent!
                                </>
                            )}
                            {status === "error" && "Something went wrong. Try again."}
                        </button>
                    </form>
                </TextReveal>

            </div>
        </section>
    );
}