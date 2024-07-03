import {ANIMALS_ITEMS} from "@/app/constants";
import Image from "next/image";
import {Header} from "@/app/components/header";
import Link from "next/link";


export default function AnimalDetailPage(p: { params: {slug: keyof typeof ANIMALS_ITEMS } }){
    const animal = ANIMALS_ITEMS[p.params.slug]
    const cover: string = animal.img[0]
    const name: string = animal.prenom
    const breed: string = animal.race
    const habitat: string = animal.habitat
    const description: string = animal.description
    const health: string = animal.health


    return (
        <>
            <Header title={name} />
            <div className="container flex flex-col mx-auto p-5 max-w-screen-md">
                <div className={`grid grid-cols-3 gap-1 mb-5`}>
                    <Link
                        className={`bg-braun drop-shadow-lg text-light text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`}
                        href={`/habitats/savane`}>
                        Savane
                    </Link>
                    <Link
                        className={`bg-primary-alt drop-shadow-lg text-light text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`}
                        href={`/habitats/marais`}>
                        Marais
                    </Link>
                    <Link
                        className={`bg-yellow-alt drop-shadow-lg text-dark text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`}
                        href={`/habitats/jungle`}>
                        Jungle
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row">
                        <Image className={`mx-auto md:mx-0 border-4 border-white shadow-xl`} src={cover} alt={name} width={300} height={300}/>
                        <div className={`p-5`}>
                            <p className={`mb-5`}><b>Prénom</b> : {name}</p>
                            <p className={`mb-5`}><b>Race</b> : {breed}</p>
                            <p className={`mb-5 capitalize`}><b>Habitat</b> : {habitat}</p>
                            <p className={`mb-5`}><b>Santé</b> : {health}</p>
                            <p><b>Description</b><br /> {description}</p>
                        </div>
                    </div>

                    <p>
                    {animal.img.length} images
                    </p>
                </div>
            </div>
        </>

    )
}