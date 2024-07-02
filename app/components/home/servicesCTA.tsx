import Link from "next/link";

export function CTAServices(){
    return (
        <section className={`py-14 bg-braun shadow-inner my-10`}>
            <div className="container mx-auto grid grid-cols-1 md:flex items-center">
                <div className={`px-10 text-center sm:text-left text-light text-3xl basis-3/4 md:pe-0`}>
                    Profitez des services organisés par Arcadia Zoo et passez des moments inoubliables
                </div>
                <div className="basis-1/4 text-center">
                    <Link className={`btn-primary`} href={`/services`} title={`Voir tous les services`}>
                        Voir les services
                    </Link>
                </div>
            </div>
        </section>
    )
}