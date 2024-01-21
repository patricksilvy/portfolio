import Project from "./Project";

export default function Projects() {
    return (
        <section className={`flex flex-col gap-4 items-center justify-center w-full`}>
            <h1 className="font-bold text-2xl">Meus projetos</h1>
            <div className="grid md:grid-cols-2 gap-4">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}