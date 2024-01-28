import SectionBrake from "@/components/section_brake";
import Landing from "../sections/landing";

export default function Home() {
  return (
    <>
      <Landing/>
      <SectionBrake content="palestrantes"/>
    </>
  );

    {/*
    <>
      <header className="bg-gradient-to-r from-blue-500 to-orange-600 text-white py-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg"
              alt="Logo - Java Noroeste"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h1 className="text-5xl font-semibold">Java Day Votuporanga</h1>
          </div>

          <nav className="flex space-x-9">
            <a href="#patrocinadores" className="text-lg px-6 py-2">Patrocinadores</a>
            <a href="#apoiadores" className="text-lg px-6 py-2">Apoiadores</a>
            <a href="#palestrantes" className="text-lg px-6 py-2">Palestrantes</a>
            <a href="#workshops" className="text-lg px-6 py-2">Workshops</a>
          </nav>
        </div>
      </header>
      
      <main className="text-black flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center mb-16">
          <Image
            src="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg"
            alt="Logo - Java Noroeste"
            width={400}
            height={37}
            style={{
              borderRadius: '30%',
            }}
            priority
          />
        </div>

        <section id="patrocinadores" className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">Patrocinadores</h2>
          <p className="text-lg">{`
          ...
          `}</p>
        </section>

        <section id="apoiadores" className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">Apoiadores</h2>
          <p className="text-lg">{`
          ...
          `}</p>
        </section>

        <section id="palestrantes" className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">Palestrantes</h2>
          <p className="text-lg">{`
          ...
          `}</p>
        </section>

        <section id="workshops" className="text-center">
          <h2 className="text-3xl font-semibold">Workshops</h2>
          <p className="text-lg">{`
          ...
          `}</p>
        </section>
      </main>
    </>
    */}
}
