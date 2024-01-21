import Image from "next/image"

export default function Hero() {
    return (
        <header className={`
            max-w-xl flex items-center my-8 gap-8 mx-auto
      `}>
            <Image
                src="https://github.com/patricksilvy.png"
                alt="Foto de Patrick Silvy"
                height={80} width={80}
                className="h-32 w-32 rounded-full"
            ></Image>
            <section className="max-w-md">
                <h1 className="font-semibold text-lg md:text-2xl">Olá 👋, me chamor Patrick Silvy, e esse é meu portfolio!</h1>
                <h2 className="text-sm font-semibold text-gray-300 md:text-xl">Desenvolvedor</h2>
            </section>
        </header>
    )
}