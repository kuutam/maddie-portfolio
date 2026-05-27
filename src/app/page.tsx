import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden", width: "100%" }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}