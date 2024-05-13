import {SelectHabitat} from "@/app/components/select-habitat"
import Image from "next/image"

export function Sidebar({habitatName, img, title, description}){
    let classBgColor:string = 'bg-white'
    let classColortext:string = 'text-light'
    const habitat:string = habitatName

    if (habitat === 'savane'){
        classBgColor = 'bg-braun'
        classColortext = 'text-light'
    } else if (habitat === 'marais'){
        classBgColor = 'bg-primary-alt'
        classColortext = 'text-light'
    }else if (habitat === 'jungle'){
        classBgColor = 'bg-yellow-alt'
        classColortext = 'text-dark'
    }
    return (
        <div className="basis-1/2 lg:basis-1/3">
            <SelectHabitat/>
            <div className={`bg-white drop-shadow-lg`}>
                <Image src={img} width={400} height={300} alt={title}/>
                <h2 className={`${classBgColor} ${classColortext} flex h-[50px] justify-center items-center uppercase text-2xl font-extrabold`}>
                    {habitat}
                </h2>
                <p className={`p-5`}>
                    {description}
                </p>
            </div>
        </div>
    )
}