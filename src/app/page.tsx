import Hero from "@/components/Hero";
import Aboult from "@/components/Aboult";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="p-8">
      <Nav />
      <Hero />
      <Aboult />
      <Projects />
    </main>
  )
}



