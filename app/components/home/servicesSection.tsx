"use client";

import Link from "next/link";

export function HomeServices() {
    const services = [
        {
            id: 1,
            nom: "Visite guidée",
            description:
                "Explorez notre zoo de manière experte avec nos visites guidées gratuites. Nos guides passionnés vous emmènent dans un voyage captivant à la découverte de nos résidents à poils, plumes et écailles. Une immersion éducative pour toute la famille, sans frais supplémentaires.",
        },
        {
            id: 2,
            nom: "Restauration",
            description:
                "Savourez une pause au cœur de la jungle avec notre restaurant au zoo. Des mets exotiques aux classiques appréciés des familles, notre menu éveille les papilles. Détendez-vous entre deux explorations et rechargez vos batteries dans notre oasis gastronomique.",
        },
        {
            id: 3,
            nom: "Visite en petit train",
            description:
                "Parcourez notre vaste domaine à bord de notre train safari. Glissez à travers les habitats animaliers dans le confort de nos wagons, écoutant les histoires captivantes de nos conducteurs. Une aventure inoubliable pour découvrir les merveilles de la faune mondiale, sans effort.",
        },
    ];

    return (
        <section className={`pb-10 container mx-auto px-5`}>
            <h2>NOS SERVICES</h2>
            <div className="trait"></div>
            <div className="grid md:grid-cols-3 gap-5">
                {services.map((service) => {
                    let id = service.id;
                    let bg_class = "";
                    let text_class = "";
                    let url = "";

                    if (id === 1) {
                        bg_class = "bg-braun";
                        text_class = "text-white";
                        url = "/service/1";
                    } else if (id === 2) {
                        bg_class = "bg-primary-alt";
                        text_class = "text-light";
                        url = "/service/2";
                    } else if (id === 3) {
                        bg_class = "bg-yellow-alt";
                        text_class = "text-dark";
                        url = "/service/3";
                    }
                    return (
                        <div className="mb-5 card bg-white" key={service.id}>
                            <Link href={url}>
                                <div
                                    className={`${bg_class} ${text_class} uppercase text-lg flex justify-center h-[50px] items-center font-bold`}
                                >
                                    {service.nom}
                                    <br />
                                </div>
                                <div className="bg-white p-5">
                                    <p>{service.description}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
