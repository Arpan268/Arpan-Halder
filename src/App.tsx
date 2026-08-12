import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-teal-500/30">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}