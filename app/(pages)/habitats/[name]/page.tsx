import {ANIMALS_LIST, HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import {SelectHabitat} from "@/app/components/select-habitat";
import Image from "next/image";

export default function HabitatDetailPage(p: { params: {name: keyof typeof HABITATS_ITEMS } }){
    const habitat:{id:number,name:string, title:string, description:string, image:string} = HABITATS_ITEMS[p.params.name];
    const title: string = habitat.title
    const habitatName: string = habitat.name
    const description: string = habitat.description
    let classBgColor: string = 'bg-white'
    let classColortext: string = 'text-light'
    let classBgImage:string = ''

    if (habitatName === 'savane'){
        classBgColor = 'bg-braun'
        classColortext = 'text-light'
        classBgImage = "bg-[url('/img/tigre.webp')]"
    } else if (habitatName === 'marais'){
        classBgColor = 'bg-primary-alt'
        classColortext = 'text-light'
        classBgImage = "bg-[url('/img/ibis.webp')] "
    }else if (habitatName === 'jungle'){
        classBgColor = 'bg-yellow-alt'
        classColortext = 'text-dark'
        classBgImage = "bg-[url('/img/girafe.webp')] "
    }
    return (
        <>
            <Header title={title}/>
            <div className="container mx-auto p-5">
                <div className="flex flex-row gap-5">
                    <div className="basis-1/2 lg:basis-1/3">
                        <SelectHabitat/>
                        <div className={`bg-white drop-shadow-lg`}>
                            <div className={`${classBgImage} bg-no-repeat bg-center bg-cover h-[200px]`}>
                            </div>
                            <h2 className={`${classBgColor} ${classColortext} flex h-[50px] justify-center items-center uppercase text-2xl font-extrabold`}>
                                {habitatName}
                            </h2>
                            <p className={`p-5`}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className={`basis-1/2 lg:basis-2/3 flex flex-col w-full`}>
                        <div className="w-full px-5 pb-10">
                            {ANIMALS_LIST.map((animal)=>{
                                if (animal.habitat === habitatName){
                                    return (
                                        <div className={`bg-white flex justify-between mb-5 drop-shadow-lg`} key={animal.id}>
                                            <Image src={animal.img} alt="" width={150} height={150}/>
                                            <div className={`flex flex-col w-full justify-center ps-10`}>
                                                <h2 className={`text-2xl capitalize`}>
                                                    {animal.prenom}
                                                </h2>
                                                <p>
                                                    {animal.race}
                                                </p>
                                            </div>
                                            <div className={`flex items-center px-10`}>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="w-10 h-10 opacity-50 hover:scale-105 hover:opacity-80"
                                                         width="16" height="16"
                                                         fill="currentColor"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                        <path
                                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}