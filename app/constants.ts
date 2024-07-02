
export const COMMENTS_LIST : {id: number, pseudo: string, comment: string, date: string}[] = [
    {
        id: 1,
        pseudo: 'Famille Campion',
        comment: 'Une expérience extraordinaire ! Le zoo offre une immersion totale dans la vie sauvage. Les animations éducatives et la proximité avec les animaux sont incomparables. Une journée inoubliable pour les petits et les grands !',
        date: '10/08/2024'
    },
    {
        id: 2,
        pseudo: 'Rocket 79',
        comment: 'Quelle façon fantastique de visiter le zoo en famille ! Le petit train nous a permis de découvrir tous les recoins du parc sans fatigue. Les enfants étaient ravis de voir les animaux de si près. Une expérience vraiment mémorable pour toute la famille !',
        date: '10/08/2024'
    },
    {
        id: 3,
        pseudo: 'PapyGato',
        comment: 'Une visite enrichissante et écologique ! Ce zoo se distingue par son engagement envers la conservation et l\'éducation environnementale. Les habitats naturels et les programmes de préservation sont remarquables. ',
        date: '10/08/2024'
    },
]


export const SERVICES_LIST : {id: number, name: string, content: string}[] = [
    {
        id: 1,
        name : "Restauration",
        content: "Savourez une pause au cœur de la jungle avec notre restaurant au zoo. Des mets exotiques aux classiques appréciés des familles, notre menu éveille les papilles. Détendez-vous entre deux explorations et rechargez vos batteries dans notre oasis gastronomique.",
    },
    {
        id: 2,
        name : "Visite guidée",
        content: "Explorez notre zoo de manière experte avec nos visites guidées gratuites. Nos guides passionnés vous emmènent dans un voyage captivant à la découverte de nos résidents à poils, plumes et écailles. Une immersion éducative pour toute la famille, sans frais supplémentaires.",
    },
    {
        id: 3,
        name : "Visite en petit train",
        content: "Parcourez notre vaste domaine à bord de notre train safari. Glissez à travers les habitats animaliers dans le confort de nos wagons, écoutant les histoires captivantes de nos conducteurs. Une aventure inoubliable pour découvrir les merveilles de la faune mondiale, sans effort.",
    },
    {
        id: 4,
        name : "Spectacle de Perroquets",
        content: "Le zoo propose un spectacle d’otaries captivant, à ne pas manquer, se déroulant à 11h00, 15h00 et 17h00 chaque jour. Ces charmantes créatures marines exécutent des tours impressionnants, alliant acrobaties et jeux d’adresse, pour le plus grand plaisir des spectateurs. Le spectacle est une expérience éducative et divertissante, mettant en valeur l’intelligence et la grâce des otaries tout en sensibilisant à la conservation des espèces marines.",
    },
]


export const HABITATS_ITEMS = {
    savane: {
        id: 1,
        name: "savane",
        title: "Les animaux de la savane",
        description: "La savane africaine, reconstitution souvent vue en zoos, abrite une multitude d'espèces emblématiques. Lions majestueux, éléphants imposants, girafes gracieuses, zèbres rayés, rhinocéros massifs, guépards rapides et hyènes rusées évoquent un monde sauvage captivant, offrant aux visiteurs une immersion unique dans la beauté et la diversité de la nature africaine.",
        image: "/img/tigre.webp"
    },
    marais: {
        id: 2,
        name: "marais",
        title: "Les animaux du marais",
        description: "Les marais abritent une biodiversité unique, souvent recréée dans les zoos. Crocodiles furtifs, alligators solitaires, tortues aquatiques, serpents glissants, grenouilles colorées et hérons élégants évoquent un écosystème vibrant. Ces créatures captivantes offrent aux visiteurs une exploration immersive des habitats humides et de leur fascinante faune.",
        image: "/img/ibis.webp"
    },
    jungle: {
        id: 3,
        name: "jungle",
        title: "Les animaux de la jungle",
        description: "La jungle, source d'émerveillement, trouve son reflet dans les zoos. Lions rugissants, tigres rayés, singes espiègles, serpents sinueux, perroquets colorés et toucans exotiques évoquent une biodiversité luxuriante. Ces ambassadeurs de la jungle offrent aux visiteurs une immersion palpitante dans les mystères et la splendeur de ces habitats tropicaux.",
        image: "/img/girafe.webp"
    }
}

export const ANIMALS_LIST = [
    {
        id:1,
        prenom: 'prenom 1',
        img: '/img/ibis.webp',
        race: 'Alligator',
        habitat: 'savane'
    },
    {
        id:2,
        prenom: 'prenom 2',
        img: '/img/ibis.webp',
        race: 'Crocodile',
        habitat: 'savane'
    },
    {
        id:3,
        prenom: 'prenom 3',
        img: '/img/ibis.webp',
        race: "Eléphant d'asie",
        habitat: "jungle"
    }
]

