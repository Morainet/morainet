import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
import Projects from "@/components/sections/Projects";
import Philosophy from "@/components/sections/Philosophy";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Focus />
        <Projects />
        <Philosophy />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
