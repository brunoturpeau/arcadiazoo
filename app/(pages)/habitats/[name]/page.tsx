import {ANIMALS_LIST, HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import {SelectHabitat} from "@/app/components/select-habitat";
import {Item} from "@/app/(pages)/habitats/[name]/item";

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
        classBgImage = "bg-[url('/img/jungle.png')] "
    }

    return (
        <>
            <Header title={title}/>
            <div className="container mx-auto p-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="basis-1 z-[-1] md:basis-1/2 lg:basis-1/3">
                        <SelectHabitat/>
                        <div className={`bg-white drop-shadow-lg hidden md:block`}>
                            <div className={`${classBgImage} bg-no-repeat bg-center bg-cover h-[200px]`}>
                            </div>
                            <h2 className={`${classBgColor} ${classColortext} flex h-[50px] justify-center items-center uppercase text-2xl font-extrabold`}>
                                {habitatName}
                            </h2>
                            <div className={`p-5`}>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className={`basis-1 md:basis-1/2 lg:basis-2/3 flex flex-col`}>
                        <div className="lg:px-5 pb-10">
                            {ANIMALS_LIST.map((animal : {id: number, prenom: string, slug: string, img: string[], race: string, habitat: string, description: string, health: string})=>{
                                if (animal.habitat === habitatName){
                                    const id: number = animal.id
                                    const slug: string = animal.slug
                                    const name: string = animal.prenom
                                    const cover: string = animal.img[0]
                                    const race: string = animal.race

                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <Item
                                            animalId = {id}
                                            animalSlug = {slug}
                                            animalName = {name}
                                            animalCover = {cover}
                                            animalRace = {race}
                                        />
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