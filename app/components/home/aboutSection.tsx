import Image from 'next/image'
export function HomeAbout(){
    return(
        <section>
            <h1 className="uppercase mt-10 text-dark font-raleway text-3xl font-black text-center my-10">ARCADIA ZOO</h1>
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
                        Arcadia Zoo s&apos;engage sur des valeurs écologiques et est fier d&apos;être autonome au niveau
                        de sa
                        consommation d&apos;énergie.
                    </p>
                </div>
                <div className="text-center">
                    <Image
                        className="border-8 border-white shadow-2xl"
                        src="/img/singe-bebe.webp"
                        width={800}
                        height={533}
                        alt="Singe"
                    />
                </div>

            </div>
        </section>

    )
}