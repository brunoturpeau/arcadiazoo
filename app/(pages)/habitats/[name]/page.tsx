import {HABITATS_ITEMS} from "@/app/constants";
import {Header} from "@/app/components/header";
import {Sidebar} from "@/app/components/sidebar";
import {AnimalsList} from "@/app/components/animals-list";

export default function HabitatDetailPage(p: { params: {name: keyof typeof HABITATS_ITEMS } }){
    const habitat = HABITATS_ITEMS[p.params.name];
    const title = habitat.title
    const img = habitat.image
    const habitatName = habitat.name
    const description = habitat.description
    return (
        <>
            <Header title={title}/>
            <div className="container mx-auto p-5">
                <div className="flex flex-row gap-5">
                    <Sidebar img={img} habitatName={habitatName} title={title} description={description} />
                    <AnimalsList habitatName={habitatName} />
                </div>
            </div>
        </>
    )
}