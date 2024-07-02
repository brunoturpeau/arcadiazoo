import Image from "next/image"
import Link from "next/link"

export function HomeAnimals(){

    const animals : {id: number, habitat: string, liste: string[]}[] = [
        {
            id: 1,
            habitat: 'Savane',
            liste: ['Lion','Éléphant d\'Afrique','Girafe','Zèbre','Rhinocéros blanc','Autruche','...']
        },
        {
            id: 2,
            habitat: 'Marais',
            liste: ['Alligator','Tortue de Floride','Anaconda vert','Ibis sacré','Hippopotame ','Crocodile du Nil','...']
        },
        {
            id: 3,
            habitat: 'Jungle',
            liste: ['Tigre','Éléphant d\'Asie','Gorille ','Perroquet','Panthère','Orang-outan','...']
        }
    ]
    return(
        <>
            <section className={`py-10 container mx-auto px-5`}>
                <h2 className={`h2`}>LES ANIMAUX ET LEURS HABITATS</h2>
                <div className="trait"></div>
                <div className="grid md:grid-cols-3 gap-5">
                    {animals.map((animal) => {
                        let id : number = animal.id
                        let bg_class : string =''
                        let text_class : string = ''
                        let img : string = ''
                        let url : string = ''

                        if (id === 1){
                            bg_class = 'bg-braun'
                            text_class = 'text-white'
                            img = '/img/tigre.webp'
                            url = '/habitats/savane'
                        }else if(id === 2){
                            bg_class = 'bg-primary-alt'
                            text_class = 'text-light'
                            img = '/img/ibis.webp'
                            url = '/habitats/marais'
                        }else if(id === 3){
                            bg_class = 'bg-yellow-alt'
                            text_class = 'text-dark'
                            img = '/img/girafe.webp'
                            url = '/habitats/jungle'
                        }
                        return (
                            <div className="mb-5 card" key={animal.id}>
                                <Link href={url}>
                                   <Image src={img} alt={'tigre'} width={600} height={400}/>
                                   <div
                                        className={`${bg_class} ${text_class} uppercase text-lg flex justify-center h-[50px] items-center font-bold`}>
                                        {animal.habitat}<br/>
                                    </div>
                                    <div className="bg-white">
                                        <ul className={`ul-card`}>
                                            <li>{animal.liste[0]}</li>
                                            <li>{animal.liste[1]}</li>
                                            <li>{animal.liste[2]}</li>
                                            <li>{animal.liste[3]}</li>
                                            <li>{animal.liste[4]}</li>
                                            <li>{animal.liste[5]}</li>
                                            <li>{animal.liste[6]}</li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
)
}