import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Navbar />
   <Hero />
   <About />
   <Skills />
   <Contact />
   </div>
  );
}
