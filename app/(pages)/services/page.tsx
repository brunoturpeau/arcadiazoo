import {Header} from "@/app/components/header"
import {SERVICES_LIST} from "@/app/constants"

export default function ServicesPage(){
    const services : {id: number, name: string, content: string}[] = SERVICES_LIST

    return (
        <>
            <Header title="Les services" />
            <div className="mt-12 pb-10 container relative z-[-1] mx-auto px-5">
                <div className="flex flex-col gap-5 lg:w-[800px] mx-auto">

                    {services.map((service : {id: number, name: string, content: string}) => {
                        return (
                            <div key={service.id}
                                 className={`bg-white drop-shadow-lg border-s-braun-alt border-s-4 p-4 pt-2`}>
                                <div className={`mb-3`}>
                                    <h2 className={`font-bold text-lg mb-5`}>
                                        {service.name}
                                    </h2>
                                    <div className="flex justify-between">
                                        {service.content}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}