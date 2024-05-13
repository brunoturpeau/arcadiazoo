import {ANIMALS_LIST, HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import {SelectHabitat} from "@/app/components/select-habitat";

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
                        <div className="bg-white p-5 w-full">
                            Habitat : {habitatName}
                            {
                                ANIMALS_LIST.map((animal)=>{

                                if (animal.habitat === habitatName){
                                    return (
                                        <div key={animal.id}>
                                            {animal.prenom}
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