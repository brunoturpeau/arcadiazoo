import {HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import Image from "next/image";

export default function HabitatDetailPage(p: { params: {name: keyof typeof HABITATS_ITEMS } }){
    const habitat = HABITATS_ITEMS[p.params.name];
    const title = habitat.title
    const img = habitat.image
    return (
        <>
            <Header title={title}/>
            <div className="container mx-auto p-5">
                <div className="flex gap-5">
                    <div className="sidebar p-5">
                        <h2>{habitat.name}</h2>
                        <Image src={img} width={400} height={300} alt={title} />
                        <p>{habitat.description}</p>
                    </div>
                    <div className={`bg-white p-5 w-full`}>
                        <h2>Liste animaux</h2>
                    </div>
                </div>
            </div>
        </>
    )
}