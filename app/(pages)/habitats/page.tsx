
import Image from "next/image";
import Link from "next/link";
import {Header} from "@/app/components/header";

export default  function Habitats(){
    return (
        <>
            <Header title={`Les habitats`} />
            <h2 className={`h2`}>Sélectionnez un habitat</h2>
            <div className="trait"></div>
            <section className="container mx-auto p-5 pt-10 pb-20 text-center grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={`shadow-2xl hover:scale-105`}>
                    <Link href={`/habitats/savane`} title={`Voir les animaux de la savane`}>
                        <h3 className={`uppercase font-extrabold flex justify-center items-center text-2xl h-[60px] bg-braun text-light`}>La
                            savane</h3>
                        <Image src={'/img/tigre.jpg'} alt={'Voir les animaux de la savane'} width={600} height={400}/>
                    </Link>
                </div>
                <div className={`card`}>
                    <Link href={`/habitats/marais`} title={`Voir les animaux du marais`}>
                        <h3 className={`uppercase font-extrabold flex justify-center items-center text-2xl h-[60px] bg-primary-alt text-light`}>Le
                            Marais</h3>
                        <Image src={'/img/ibis.jpg'} alt={'Les animaux du marais'} width={600} height={400}/>
                    </Link>
                </div>
                <div className={`shadow-2xl hover:scale-105`}>
                    <Link href={`/habitats/jungle`} title={`Voir les animaux de la jungle`}>
                        <h3 className={`uppercase font-extrabold flex justify-center items-center text-2xl h-[60px] bg-yellow-alt text-dark`}>La
                            jungle</h3>
                        <Image src={'/img/girafe.jpg'} alt={'Les animaux de la jungle'} width={600} height={400}/>
                    </Link>
                </div>
            </section>
        </>
    )
}