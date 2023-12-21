import Image from "next/image"

export default function Hero() {
    return (
        <header className={`
        flex justify-between mt-8 gap-4
      `}>
            <Image
                src="https://github.com/patricksilvy.png"
                alt="Foto de Patrick Silvy"
                height={80} width={80}
                className="h-32 w-32 rounded-full"
            ></Image>
            <section>
                <h1 className="font-semibold text-xl">Olá 👋, me chamor Patrick Silvy, e esse é meu portfolio!</h1>
                <h2 className="text-md font-semibold text-gray-300">Desenvolvedor</h2>
            </section>
        </header>
    )
}