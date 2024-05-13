import {HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import {SelectHabitat} from "@/app/components/select-habitat";
import Image from "next/image";

export default function HabitatDetailPage(p: { params: {name: keyof typeof HABITATS_ITEMS } }){
    const habitat = HABITATS_ITEMS[p.params.name];
    const title = habitat.title
    const img = habitat.image
    const habitatName = habitat.name
    const description = habitat.description
    let classBgColor:string = 'bg-white'
    let classColortext:string = 'text-light'

    if (habitatName === 'savane'){
        classBgColor = 'bg-braun'
        classColortext = 'text-light'
    } else if (habitatName === 'marais'){
        classBgColor = 'bg-primary-alt'
        classColortext = 'text-light'
    }else if (habitatName === 'jungle'){
        classBgColor = 'bg-yellow-alt'
        classColortext = 'text-dark'
    }
    return (
        <>
            <Header title={title}/>
            <div className="container mx-auto p-5">
                <div className="flex flex-row gap-5">
                    <div className="basis-1/2 lg:basis-1/3">
                        <SelectHabitat/>
                        <div className={`bg-white drop-shadow-lg`}>
                            <Image src={img} width={400} height={300} alt={title}/>
                            <h2 className={`${classBgColor} ${classColortext} flex h-[50px] justify-center items-center uppercase text-2xl font-extrabold`}>
                                {habitatName}
                            </h2>
                            <p className={`p-5`}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className={`basis-1/2 lg:basis-2/3 flex flex-colel`}>
                        <div className="bg-white p-5">
                            Habitat : {habitatName}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}