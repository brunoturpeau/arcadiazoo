"use client"
import {SERVICES_LIST} from "@/app/constants"
import {useEffect, useState} from "react"

export function HomeServices() {
    const [datas, setDatas] = useState(null)
    const [total, setTotal] = useState(0)
    const [load, setLoad] = useState(false)
    const services : {id: number, name: string, content: string}[] = SERVICES_LIST

    useEffect(() => {
        const fetchArticles = async () => {
            const res : Response = await fetch ('https://127.0.0.1:8000/api/services')
            const data = await res.json()
            setDatas(data["hydra:member"])
            setTotal(data["hydra:totalItems"])
            console.log(data)
            setLoad(true)
        }
        fetchArticles()
    }, [])


    return (
        <>
            <section className={`pb-10 container mx-auto px-5`}>
                <h2 className={`h2`}>NOS SERVICES</h2>
                <div className="trait"></div>
                <div className="grid md:grid-cols-3 gap-5">
                    {services.map((service: { id: number, name: string, content: string }) => {
                        let id: number = service.id
                        let bg_class: string = ""
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
                        if (id === 1 || id === 2 || id === 3) {
                            return (
                                <div className="mb-5 shadow-2xl bg-white" key={service.id}>
                                    <div
                                        className={`${bg_class} ${text_class} uppercase text-lg flex justify-center h-[50px] items-center font-bold`}
                                    >
                                        {service.name}
                                        <br/>
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
            <section className={`pb-10 container mx-auto px-5`}>
                <h2 className={`h2`}>NOS SERVICES</h2>
                <div className="trait"></div>
                <div className="grid md:grid-cols-3 gap-5">
                    {load ? (
                        <>

                            {datas.map((service: any, index: any) => {
                                let bg_class: string = ""
                                let text_class: string = ""
                                let slug: string = ""

                                if (service.slug === "restauration") {
                                    bg_class = "bg-braun";
                                    text_class = "text-white"
                                } else if (service.slug === "visite-guidee") {
                                    bg_class = "bg-primary-alt"
                                    text_class = "text-light"
                                } else if (service.slug === "visite-en-petit-train") {
                                    bg_class = "bg-yellow-alt"
                                    text_class = "text-dark"
                                }
                                if (service.slug === "restauration" || service.slug === "visite-guidee" || service.slug === "visite-en-petit-train") {
                                    return (
                                        <div className="mb-5 shadow-2xl bg-white" key={index}>
                                            <div
                                                className={`${bg_class} ${text_class} uppercase text-lg flex justify-center h-[50px] items-center font-bold`}>
                                                <h2>{service.name}</h2>
                                            </div>
                                            <div className="bg-white p-5">
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            }
                        </>
                    ) : (
                        <h2>Chargement...</h2>
                    )}
                </div>
            </section>
        </>

)
}
