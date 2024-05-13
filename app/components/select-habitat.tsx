import Link from "next/link";

export function SelectHabitat(){
    return (
        <div className={`grid grid-cols-3 gap-1 mb-5`}>
            <Link className={`bg-braun drop-shadow-lg text-light text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`} href={`/habitats/savane`}>
                Savane
            </Link>
            <Link className={`bg-primary-alt drop-shadow-lg text-light text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`} href={`/habitats/marais`}>
                Marais
            </Link>
            <Link className={`bg-yellow-alt drop-shadow-lg text-dark text-base uppercase font-raleway font-bold h-[40px] flex justify-center items-center`} href={`/habitats/jungle`}>
                Jungle
            </Link>
        </div>
    )
}