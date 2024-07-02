
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

export const ANIMALS_LIST : {id: number, prenom: string, img: string[], race: string, habitat: string, description: string, health: string}[] = [
    {
        id:1,
        prenom: 'Adèle ',
        img: [
            '/img/animaux/mini/300x300-7d1863aa6303a073b2408bec7f28e14f.webp',
            '/img/animaux/mini/300x300-d3c529b8f0a6ea3ca760f55c28ab48e8.webp',
            '/img/animaux/mini/300x300-e334f7cc7b802e0471469180e56caddb.webp',
            '/img/animaux/mini/300x300-f5e2f08d020304546c7284c1199559ba.webp',
        ],
        race: 'Girafe',
        habitat: 'savane',
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:2,
        prenom: 'Ceros',
        img: [
            '/img/animaux/mini/300x300-0d10b57d0df21d5f9dfa5989ed480090.webp',
        ],
        race: 'Rhinocéros blanc',
        habitat: 'jungle',
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:3,
        prenom: 'Dundy',
        img: [
            '/img/animaux/mini/300x300-3b9d1008ecdcc0c09046a15b70c62eea.webp',
            '/img/animaux/mini/300x300-5acd69f31f284d71d861a9f688351c84.webp',
            '/img/animaux/mini/300x300-da5d45d55c96d92e986268290aa497da.webp',
        ],
        race: "Crocodile",
        habitat: "marais",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:4,
        prenom: 'Sheila',
        img: [
            '/img/animaux/mini/300x300-95ed91fc9b6097d19dcd40369d9bf40d.webp',
            '/img/animaux/mini/300x300-aed5b0223b5fb972266e0fabd642c279.webp',
        ],
        race: "Lion",
        habitat: "savane",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:5,
        prenom: 'Simba',
        img: [
            '/img/animaux/mini/300x300-6519bb327d3465164dce9e312cdf1835.webp',
            '/img/animaux/mini/300x300-536805f7f281ee8ee6a8b1065f179119.webp',
        ],
        race: "Lion",
        habitat: "savane",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:6,
        prenom: 'Zibrou',
        img: [
            '/img/animaux/mini/300x300-02215a25ebce6aee574384ffd80ee9f3.webp',
            '/img/animaux/mini/300x300-797a30293f8f7ca971f603c6d2c050a9.webp',
            '/img/animaux/mini/300x300-e0bade7dbcdacf3fb449189ec7eb712e.webp',
        ],
        race: "Zèbre",
        habitat: "savane",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:7,
        prenom: 'Sheer Khan',
        img: [
            '/img/animaux/mini/300x300-6836e40835a5322b3bd1b91661dd9a4c.webp',
            '/img/animaux/mini/300x300-005e62a73ad7ac718c153d4873649a49.webp',
            '/img/animaux/mini/300x300-c75e38c05d4e231a4fe020b68a493b80.webp',
            '/img/animaux/mini/300x300-f2739b868d5614be66a4219d25c16fc3.webp',
        ],
        race: "Tigre du Bengale",
        habitat: "jungle",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:8,
        prenom: 'Fifi',
        img: [
            '/img/animaux/mini/300x300-434a33530d73197051b101a4e1604f1e.webp',
            '/img/animaux/mini/300x300-6bf7d012d316c950f874569f668d97b1.webp',
        ],
        race: "Eléphant d'afrique",
        habitat: "jungle",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:9,
        prenom: 'Fanny',
        img: [
            '/img/animaux/mini/300x300-c810e7adfb06770452e55c3d8666b20b.webp',
        ],
        race: "Eléphant d'afrique",
        habitat: "jungle",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },

    {
        id:10,
        prenom: 'Alix',
        img: [
            '/img/animaux/mini/300x300-c4de56859d38947da639f3976016703d.webp',
            '/img/animaux/mini/300x300-740f8aed861dd7206807e7bea417dc67.webp',
        ],
        race: "Alligator",
        habitat: "marais",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:11,
        prenom: 'Aligato',
        img: [
            '/img/animaux/mini/300x300-0b95c19ebeb0d5978515d6c303fed299.webp',
            '/img/animaux/mini/300x300-3b9d1008ecdcc0c09046a15b70c62eea.webp',
        ],
        race: "Alligator",
        habitat: "marais",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:12,
        prenom: 'Biscus',
        img: [
            '/img/animaux/mini/300x300-08fdd981dad87050b408c41759009a8d.webp',
        ],
        race: "Ibis",
        habitat: "marais",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
    {
        id:13,
        prenom: 'Ibizou',
        img: [
            '/img/animaux/mini/300x300-1f7e30b40583c1a9ed4fb9b11b060d22.webp',
            '/img/animaux/mini300x300-15e6636bd02920c0a665621db8f3f9dc.webp',
        ],
        race: "Ibis",
        habitat: "marais",
        description: "Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.",
        health: "En très bonne forme",
    },
]

