import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
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
        <Stats />
        <About />
        <Focus />
        <Process />
        <Projects />
        <Journey />
        <Philosophy />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
