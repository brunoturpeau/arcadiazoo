import Link from "next/link";

export function CTAAnimals(){
    return (
        <section className={`py-14 bg-braun shadow-inner mb-10`}>
            <div className="container mx-auto grid grid-cols-1 md:flex items-center">
                <div className={`px-10 text-center sm:text-left text-light text-3xl basis-3/4 md:pe-0`}>
                    Venez découvrir la grande diversité des animaux présentés dans notre parc zoologique.
                </div>
                <div className="basis-1/4 text-center">
                    <button className={`btn-primary`}>
                        <Link href={`/animaux`} title={"Voir tous les animaux"}>
                            Voir les animaux
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}