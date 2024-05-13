import Image from "next/image";

export default function IndexPage() {
  return (
      <>
          <header
              className={`bg-[url('/img/elephant.jpg')] z-[-1] bg-no-repeat bg-center bg-cover relative w-full h-[300px] drop-shadow-lg md:bg-[url('/img/elephant-lg.jpg')]`}>

          </header>
          <section className="my-10">
              <h1 className="uppercase text-center text-dark font-raleway text-3xl font-black text-center my-10">ARCADIA
                  ZOO</h1>
              <div className="trait"></div>
              <div className="container mx-auto px-5 grid md:grid-cols-2 gap-5 items-center">
                  <div className={`italic text-xl`}>
                      <p className="mb-5">
                          Fondé en 1960 près de la forêt de Brocéliande, Arcadia Zoo en Bretagne abrite une grande
                          diversité d&apos;animaux répartis par habitat.
                      </p>
                      <p className="mb-5">
                          Rigoureux sur la santé, des vétérinaires effectuent des contrôles quotidiens.
                      </p>
                      <p className="mb-5">
                          Arcadia Zoo s&apos;engage sur des valeurs écologiques et est fier d&apos;être autonome au
                          niveau
                          de sa
                          consommation d&apos;énergie.
                      </p>
                  </div>
                  <div className="text-center">
                      <Image
                          className="border border-8 border-white shadow-2xl"
                          src="/img/singe-bebe.jpg"
                          width={800}
                          height={533}
                          alt="Singe"
                      />
                  </div>

              </div>
          </section>
      </>
  );
}
