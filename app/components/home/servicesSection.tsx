"use client"
import {SERVICES_LIST} from "@/app/constants"

export function HomeServices() {

    const services : {id: number, name: string, content: string}[] = SERVICES_LIST

    return (
        <section className={`pb-10 container mx-auto px-5`}>
            <h2 className={`h2`}>NOS SERVICES</h2>
            <div className="trait"></div>
            <div className="grid md:grid-cols-3 gap-5">
                {services.map((service: {id: number, name: string, content: string}) => {
                    let id: number = service.id;
                    let bg_class: string = "";
                    let text_class: string = ""

                    if (id === 1) {
                        bg_class = "bg-braun";
                        text_class = "text-white"
                    } else if (id === 2) {
                        bg_class = "bg-primary-alt"
                        text_class = "text-light"
                    } else if (id === 3) {
                        bg_class = "bg-yellow-alt"
                        text_class = "text-dark"
                    }
                    if (id === 1 || id === 2 || id === 3){
                        return (
                            <div className="mb-5 shadow-2xl bg-white" key={service.id}>
                                <div
                                    className={`${bg_class} ${text_class} uppercase text-lg flex justify-center h-[50px] items-center font-bold`}
                                >
                                    {service.name}
                                    <br />
                                </div>
                                <div className="bg-white p-5">
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}
