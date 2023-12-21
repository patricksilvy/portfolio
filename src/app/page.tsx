import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Aboult from "@/components/aboult";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col m-8">
      <Nav />
      <Hero />
      <Aboult />
      
      <section className={`
        flex flex-col mt-8 gap-4
      `}>
        <h1 className="font-bold text-2xl">Meus projetos</h1>
        <article className={`
          h-auto w-full flex flex-col 
          bg-gray-200 rounded-3xl
        `}>
          <Image
            src="https://github.com/patricksilvy.png"
            alt="Foto de Patrick Silvy"
            height={80} width={80}
            className="h-32 w-full rounded-t-3xl"
          ></Image>
          <section className={`
          m-4 flex flex-col gap-2
        `}>
            <h1 className="font-semibold text-xl text-[#0e0e0e]">Nome do projeto</h1>
            <p className="text-[#0e0e0e]">Projeto que visa que tem como o objetivo aprensentar minhas habilidades em next js e tailwind.</p>
            <div className={`
              flex text-[#0e0e0e] justify-around
            `}>
              <Link href="#" className="w-full text-center">
                Repositorio
              </Link>
              <strong>|</strong>
              <Link href="#" className=" w-full text-center">
                Online
              </Link>
            </div>
          </section>
        </article>
      </section>
    </main>
  )
}



