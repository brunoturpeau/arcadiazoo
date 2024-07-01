
-- Création de la base de données
CREATE DATABASE sf_arcadiazoo;

-- Structure de la table animal
CREATE TABLE animal (
    id int NOT NULL AUTO_INCREMENT,
    breed_id int DEFAULT NULL,
    habitat_id int DEFAULT NULL,
    name varchar(64) NOT NULL,
    health varchar(128) DEFAULT NULL,
    description longtext,
    slug varchar(255) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Structure de la table breed
CREATE TABLE breed (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(128) NOT NULL,
    detail longtext,
    slug varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Structure de la table comment
CREATE TABLE comment (
    id int NOT NULL AUTO_INCREMENT,
    pseudo varchar(64) NOT NULL,
    comment_text longtext NOT NULL,
    is_visible tinyint(1) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Structure de la table eating
CREATE TABLE eating (
    id int NOT NULL AUTO_INCREMENT,
    food_id int DEFAULT NULL,
    feeding varchar(255) NOT NULL,
    quantity int DEFAULT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Structure de la table food
CREATE TABLE food (
    id int NOT NULL AUTO_INCREMENT,
    animal_id int DEFAULT NULL,
    time time DEFAULT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id int DEFAULT NULL,
    slug varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Structure de la table habitat
CREATE TABLE habitat (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(64) NOT NULL,
    description longtext,
    comment_habitat longtext,
    slug varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Structure de la table image
CREATE TABLE image (
    id int NOT NULL AUTO_INCREMENT,
    animal_id int DEFAULT NULL,
    habitat_id int DEFAULT NULL,
    title varchar(255) NOT NULL,
    name varchar(255) DEFAULT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Structure de la table report
CREATE TABLE report (
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    animal_id int NOT NULL,
    date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    detail longtext NOT NULL,
    suggest longtext,
    PRIMARY KEY (id)
);

-- Structure de la table service
CREATE TABLE service (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(128) NOT NULL,
    description longtext,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    slug varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Structure de la table suggest_feeding
CREATE TABLE suggest_feeding (
    id int NOT NULL AUTO_INCREMENT,
    animal_id int DEFAULT NULL,
    user_id int DEFAULT NULL,
    feeding varchar(255) DEFAULT NULL,
    quantity int DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Structure de la table user
CREATE TABLE `user` (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(180) NOT NULL,
    roles json NOT NULL,
    password varchar(255) NOT NULL,
    firstname varchar(64) NOT NULL,
    lastname varchar(64) NOT NULL,
    is_verified tinyint(1) NOT NULL,
    reset_token varchar(100) DEFAULT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY UNIQ_IDENTIFIER_EMAIL (email)
);

-- Données de test pour la table user
INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `lastname`, `is_verified`, `reset_token`) VALUES
(1, 'admin@test.fr', '[\"ROLE_ADMIN\"]', '$2y$13$nDCPtY1iN4nC6MVdtaMElOXO7LJEHqW4xXNHeCNU0WhV4JSxuLOfa', 'John', 'DOE', 1, NULL),
(2, 'employe@test.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$bca1EY7a41gPvfmHfdPxSO.G3ech9COCyFdh2LLZD24/TadynfcuC', 'Jean', 'FORT', 1, NULL),
(3, 'veterinaire@test.fr', '[\"ROLE_VETERINAIRE\"]', '$2y$13$Uu341AcHdHCtFjLZoIXNnuY9ZECQJRjKrYjgz7A.VMqh7pr8qDhnW', 'Jeanne', 'FORTE', 1, NULL),
(4, 'anastasie.royer@free.fr', '[\"ROLE_VETERINAIRE\"]', '$2y$13$h8gJ36/DYprt0Nlpek9oQe12/Fwfx2Y0q1bvFFRHddFa01H5s/xNK', 'Michel', 'Seguin', 1, NULL),
(5, 'labbe.hugues@daniel.fr', '[\"ROLE_VETERINAIRE\"]', '$2y$13$5oxW3N7NNjMrbTTYZzk2w.Eh5krmQdxVKNZ2N/hBPCWxloOeNXMb2', 'Susan', 'Pascal', 1, NULL),
(6, 'zpotier@diaz.fr', '[\"ROLE_VETERINAIRE\"]', '$2y$13$USYI0LOZzg1yWebBrhrtBu8233rXBS9Qwyai6PJ03RvCimrBU0lR2', 'Martin', 'Collet', 1, NULL),
(7, 'georges15@noos.fr', '[\"ROLE_VETERINAIRE\"]', '$2y$13$VCwy9Zh0GLPJmkQzZ./OhuXTflxS9qKBqimtd25M7p8S20X/YHitG', 'Roland', 'Delahaye', 1, NULL),
(8, 'monique.guillet@boyer.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$8G.1VHxCOwpeWYFSje1bjuhYa5A9ob0MSBtPqP8qY.IOKOFMbFzpW', 'Hugues', 'Lucas', 1, NULL),
(9, 'elisabeth93@traore.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$L4WQsUa3dLdLy8IzqjbvauBf3L8d/hBFs7lVJH51IEPakRdRKzPC2', 'Franck', 'Hoareau', 1, NULL),
(10, 'blacombe@noos.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$7fjojr4mcVwoWTG3Z5dEsehUY/0yy/YL3INl3/6lHyFhucKGwK4xu', 'Adèle', 'Alexandre', 1, NULL),
(11, 'ldelahaye@bonnin.net', '[\"ROLE_EMPLOYE\"]', '$2y$13$AdzbzcU3dndiEC1viSSaBuPc6i9gAOarCogeJ1/lo2Kd3ZwZ30lNu', 'Claude', 'Hamel', 1, NULL),
(12, 'odette90@live.com', '[\"ROLE_EMPLOYE\"]', '$2y$13$bo2SbWQ3/N5LLN.ymhEKeeOVIy/mWJSLLTpazbmStsbJHciYmlOjq', 'Lucas', 'Leroy', 1, NULL),
(13, 'foucher.anne@gros.org', '[\"ROLE_EMPLOYE\"]', '$2y$13$f.2JBlB9ZN69.AfexpVeFOPOveSkLdo5mXtfM0Aennx60W3MYE4EK', 'Céline', 'Gay', 1, NULL),
(14, 'eleonore.deschamps@club-internet.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$eo27eadorh4mseS9LTdVv.sLMISxi8q5xtJZlTj/nhSwN02/C1tg2', 'Alexandrie', 'Moulin', 1, NULL),
(15, 'henriette92@orange.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$Jrf/fhVqQn9llDz9qOs32OH0jqxhPY1ZB7J.Hs4OuNj.Dn.UJA6wW', 'Augustin', 'Perrin', 1, NULL),
(16, 'lefebvre.michel@imbert.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$rIQgPaP5luBMP9y09Lc4Y.pbp0NPtCLvXSmq3JbRSfJfYyb3RaAQi', 'Laure', 'Weiss', 1, NULL),
(17, 'vmorvan@sfr.fr', '[\"ROLE_EMPLOYE\"]', '$2y$13$PmOQKhb9Tz15ickzi8W/QO.87nK76qgLM/TF0HXREicEf3eXqmgOW', 'Jacques', 'Vincent', 0, NULL);

-- Données de test pour la table service
INSERT INTO `service` (`id`, `name`, `description`, `slug`) VALUES
(1, 'Restauration', 'Savourez une pause au cœur de la jungle avec notre restaurant au zoo. Des mets exotiques aux classiques appréciés des familles, notre menu éveille les papilles. Détendez-vous entre deux explorations et rechargez vos batteries dans notre oasis gastronomique.', 'restauration'),
(2, 'Visite guidée', 'Explorez notre zoo de manière experte avec nos visites guidées gratuites. Nos guides passionnés vous emmènent dans un voyage captivant à la découverte de nos résidents à poils, plumes et écailles. Une immersion éducative pour toute la famille, sans frais supplémentaires.', 'visite-guidee'),
(3, 'Visite en petit train', 'Parcourez notre vaste domaine à bord de notre train safari. Glissez à travers les habitats animaliers dans le confort de nos wagons, écoutant les histoires captivantes de nos conducteurs. Une aventure inoubliable pour découvrir les merveilles de la faune mondiale, sans effort.', 'visite-en-petit-train'),
(4, 'Spectacle de Perroquets', 'Le zoo propose un spectacle d’otaries captivant, à ne pas manquer, se déroulant à 11h00, 15h00 et 17h00 chaque jour. Ces charmantes créatures marines exécutent des tours impressionnants, alliant acrobaties et jeux d’adresse, pour le plus grand plaisir des spectateurs. Le spectacle est une expérience éducative et divertissante, mettant en valeur l’intelligence et la grâce des otaries tout en sensibilisant à la conservation des espèces marines.', 'spectacle-de-perroquets');

-- Données de test pour la table comment
INSERT INTO `comment` (`id`, `pseudo`, `comment_text`, `is_visible`, `created_at`) VALUES
(1, 'Famille Campion', 'Une expérience extraordinaire ! Le zoo offre une immersion totale dans la vie sauvage. Les animations éducatives et la proximité avec les animaux sont incomparables. Une journée inoubliable pour les petits et les grands !', 1, '2024-06-14 11:02:12'),
(2, 'Rocket 79', 'Quelle façon fantastique de visiter le zoo en famille ! Le petit train nous a permis de découvrir tous les recoins du parc sans fatigue. Les enfants étaient ravis de voir les animaux de si près. Une expérience vraiment mémorable pour toute la famille !', 1, '2024-06-14 11:02:12' ),
(3, 'PapyGato', 'Une visite enrichissante et écologique ! Ce zoo se distingue par son engagement envers la conservation et l\'éducation environnementale. Les habitats naturels et les programmes de préservation sont remarquables.', 1, '2024-06-14 11:02:12'),
(4, 'Quia sed.', 'Autem iusto vel odio omnis perferendis. Aut nesciunt et doloribus vel dignissimos. Velit voluptates sint quia error asperiores quae necessitatibus.', 1, '2000-01-01 00:00:00' ),
(5, 'Omnis.', 'Rerum quibusdam nobis molestiae voluptas nemo vel odit. Sint officia ex adipisci optio quis. Sit dolorem quis quis.', 0, '2000-01-01 00:00:00' ),
(6, 'Tenetur.', 'Dignissimos aliquam commodi sed. Libero tempora sunt ea delectus incidunt. Accusamus veniam ducimus cum et et.', 0, '2000-01-01 00:00:00' ),
(7, 'Sed.', 'Laboriosam ut earum nihil soluta velit ut saepe. Deleniti non doloribus ut vel omnis odio.', 1,'2000-01-01 00:00:00' ),
(8, 'Tenetur.', 'Libero vitae incidunt debitis similique mollitia esse. Sint doloremque et possimus.', 1, '2000-01-01 00:00:00' ),
(9, 'Ipsum et.', 'At sapiente modi quis explicabo velit. Ab voluptate maiores odio enim ipsa ut. Quis illo accusantium odio ipsum ab. Eos molestias cumque ipsum.', 0, '2000-01-01 00:00:00' ),
(10, 'Velit.', 'Et sint ut quis consequuntur id. Doloremque omnis libero sed itaque omnis. Sint tempore nesciunt modi facere perspiciatis.', 1, '2000-01-01 00:00:00' ),
(11, 'Aut.', 'Distinctio et aut amet ipsa iusto ut dolores. Quidem est velit est impedit quia ut non. Recusandae quia ut iusto expedita quasi.', 1, '2000-01-01 00:00:00'),
(12, 'Nulla.', 'Nihil et est non vitae consequuntur vero quibusdam. Illum aperiam sit quis excepturi voluptas accusantium. Enim quibusdam sit eos porro eligendi.', 1, '2000-01-01 00:00:00' );

-- Données de test pour la table breed
INSERT INTO `breed` (`id`, `name`, `detail`, `slug`) VALUES
(1, 'Lion', 'Le lion d\'Afrique, majestueux prédateur des savanes, est connu pour sa crinière distinctive et son rugissement puissant. Vivant en groupes appelés fiertés, il joue un rôle crucial dans l\'écosystème. Menacé par la perte d\'habitat et le braconnage, il incarne la beauté et la fragilité de la faune sauvage.', 'lion'),
(2, 'Éléphant d\'Afrique', 'L\'éléphant d\'Afrique, le plus grand mammifère terrestre, est connu pour ses grandes oreilles et sa trompe polyvalente. Vivant en groupes familiaux, il joue un rôle écologique crucial. Menacé par le braconnage et la perte d\'habitat, sa conservation est vitale', 'elephant-d-afrique'),
(3, 'Girafe', 'La girafe, avec son long cou et ses pattes élancées, est l\'animal terrestre le plus grand. Elle se nourrit principalement des feuilles d\'acacia dans les savanes africaines. Sociable et pacifique, la girafe est menacée par la perte d\'habitat et le braconnage, nécessitant des efforts de conservation pour sa survie.', 'girafe'),
(4, 'Zèbre', 'Le zèbre, reconnaissable à ses rayures noires et blanches uniques, vit en troupeaux dans les savanes africaines. Herbivore, il se nourrit principalement d\'herbes. Les rayures offrent un camouflage contre les prédateurs. Menacé par la perte d\'habitat et le braconnage, sa conservation est essentielle pour préserver cette espèce emblématique.', 'zebre'),
(5, 'Rhinocéros blanc', '', 'rhinoceros-blanc'),
(6, 'Tigre', 'Le tigre, majestueux grand félin aux rayures distinctives, est un prédateur solitaire des jungles et forêts d\'Asie. Il chasse principalement des cerfs et des sangliers. Menacé par la déforestation, la fragmentation de l\'habitat et le braconnage, le tigre symbolise la beauté sauvage et la nécessité de la conservation.', 'tigre'),
(7, 'Crocodile', 'Le crocodile, redoutable prédateur des marais et rivières, possède une mâchoire puissante et une armure écailleuse. Excellent nageur, il chasse discrètement en embuscade. Présent depuis des millions d\'années, il incarne la résilience et la force de la nature. Sa conservation est essentielle face aux menaces humaines.', 'crocodile');

-- Données de test pour la table habitat
INSERT INTO `habitat` (`id`, `name`, `description`, `comment_habitat`, `slug`) VALUES
(1, 'Savane', 'La savane africaine, reconstitution souvent vue en zoos, abrite une multitude d\'espèces emblématiques. Lions majestueux, éléphants imposants, girafes gracieuses, zèbres rayés, rhinocéros massifs, guépards rapides et hyènes rusées évoquent un monde sauvage captivant, offrant aux visiteurs une immersion unique dans la beauté et la diversité de la nature africaine.', 'Améliorer l\'accès au point 2', 'Savane'),
(2, 'Marais', 'Les marais abritent une biodiversité unique, souvent recréée dans les zoos. Crocodiles furtifs, alligators solitaires, tortues aquatiques, serpents glissants, grenouilles colorées et hérons élégants évoquent un écosystème vibrant. Ces créatures captivantes offrent aux visiteurs une exploration immersive des habitats humides et de leur fascinante faune.', 'Il faudrait plus d\'ombre au point 3', 'marais'),
(3, 'Jungle', 'La jungle, source d\'émerveillement, trouve son reflet dans les zoos. Lions rugissants, tigres rayés, singes espiègles, serpents sinueux, perroquets colorés et toucans exotiques évoquent une biodiversité luxuriante. Ces ambassadeurs de la jungle offrent aux visiteurs une immersion palpitante dans les mystères et la splendeur de ces habitats tropicaux.', ' ', 'jungle');

-- Données de test pour la table animal
INSERT INTO `animal` (`id`, `breed_id`, `habitat_id`, `name`, `health`, `description`, `slug`) VALUES
(1, 3, 1, 'Adèle', 'En très bonne forme', 'Eligendi similique dolor saepe aut. Et similique nisi et vel at et. Nostrum delectus accusamus quos voluptates ut.', 'adele'),
(2, 7, 2, 'Dundy', 'En très bonne forme', 'Nisi ut corporis nihil. Omnis adipisci repudiandae aliquid magni. Ex similique culpa non. Quisquam minus delectus harum.', 'dundy'),
(3, 1, 1, 'Simba', 'En très bonne forme', 'Et et mollitia eum cumque omnis eveniet dolor. Provident fuga aut sed. Omnis magni voluptate nihil dolorum illum. In itaque harum ab cumque illum.', 'simba'),
(4, 1, 1, 'Sheila', 'En très bonne forme', 'Harum sit eos non ab. Illo quia ut voluptatem quaerat et veritatis.', 'sheila'),
(5, 4, 1, 'Zibrou', 'En très bonne forme', 'Ut a aperiam dolorum explicabo et non. Vel in quis fugit molestias omnis sit. Aut tempora esse dignissimos eveniet quia aut. Illum unde qui qui sit.', 'zibrou'),
(6, 6, 3, 'Sheer Khan', 'En très bonne forme', 'Sint quia reprehenderit nemo nesciunt in. Incidunt cum deserunt quo. Ipsam fugit repellendus optio ad error deserunt autem.', 'sheer-khan'),
(7, 5, 3, 'Ceros', 'En très bonne forme', 'Eveniet accusantium commodi ad. Dignissimos aut ex a voluptas est incidunt. Libero illum eum aut et.', 'ceros');

-- Données de test pour la table food
INSERT INTO `food` (`id`, `animal_id`, `time`, `created_at`, `user_id`, `slug`) VALUES
(1, 1, '11:00:00',  '2024-09-01 00:00:00', 3, 'repas-74699631'),
(2, 1, '11:00:00',  '2024-09-02 00:00:00', 3, 'repas-16675386'),
(3, 1, '11:00:00',  '2024-09-03 00:00:00', 3, 'repas-92493605'),
(4, 2, '11:00:00',  '2024-09-01 00:00:00', 4, 'repas-2627536'),
(5, 2, '11:00:00',  '2024-09-02 00:00:00', 4, 'repas-70781519'),
(6, 2, '11:00:00',  '2024-09-03 00:00:00', 4, 'repas-74308678'),
(7, 2, '11:00:00',  '2024-09-04 00:00:00', 4, 'repas-88144934'),
(8, 3, '11:00:00',  '2024-09-01 00:00:00', 4, 'repas-97341899'),
(9, 3, '11:00:00',  '2024-09-02 00:00:00', 4, 'repas-47244748'),
(10, 3, '11:00:00',  '2024-09-03 00:00:00', 4, 'repas-36437996'),
(11, 3, '11:00:00',  '2024-09-04 00:00:00', 4, 'repas-4367988'),
(12, 4, '11:00:00',  '2024-09-01 00:00:00', 3, 'repas-65737100'),
(13, 4, '11:00:00',  '2024-09-02 00:00:00', 3, 'repas-73379419'),
(14, 4, '11:00:00',  '2024-09-03 00:00:00', 3, 'repas-94097999'),
(15, 4, '11:00:00',  '2024-09-04 00:00:00', 3, 'repas-6557414'),
(16, 5, '11:00:00',  '2024-09-01 00:00:00', 5, 'repas-78636712'),
(17, 5, '11:00:00',  '2024-09-02 00:00:00', 5, 'repas-14447260'),
(18, 5, '11:00:00',  '2024-09-03 00:00:00', 5, 'repas-36844789'),
(19, 5, '11:00:00',  '2024-09-04 00:00:00', 5, 'repas-90261223'),
(20, 6, '11:30:00',  '2024-09-01 00:00:00', 3, 'repas-4386103'),
(21, 6, '11:30:00',  '2024-09-02 00:00:00', 3, 'repas-14121929'),
(22, 6, '11:30:00',  '2024-09-03 00:00:00', 3, 'repas-22487378'),
(23, 6, '11:30:00',  '2024-09-04 00:00:00', 3, 'repas-88279045');

-- Données de test pour la table eating
INSERT INTO `eating` (`id`, `food_id`, `feeding`, `quantity`) VALUES
(1, 1, 'poulet', 5000),
(2, 1, 'boeuf', 5000),
(3, 2, 'poulet', 1250),
(4, 2, 'boeuf', 5000),
(5, 3, 'Feuilles d\'acacia', 30000),
(6, 3, 'Fruits et graines', 5000),
(7, 4, 'Feuilles d\'acacia', 30000),
(8, 4, 'Fruits et graines', 5000),
(96, 5, 'Feuilles d\'acacia', 30000),
(9, 5, 'Fruits et graines', 5000),
(10, 6, 'Feuilles d\'acacia', 30000),
(11, 6, 'Fruits et graines', 5000);

-- Données de test pour la table report
INSERT INTO `report` (`id`, `user_id`, `animal_id`, `date`, `detail`, suggest) VALUES
(1, 3, 1, '2024-08-01 00:00:00', 'Rapport texte', "Feuilles d'acacia - 5kg"),
(2, 5, 1, '2024-08-05 00:00:00', 'Rapport texte', "Feuilles d'acacia - 5kg"),
(3, 3, 2, '2024-08-17 00:00:00', 'Rapport texte', "Lapins entier + boeuf - 5kg"),
(4, 5, 2, '2024-08-12 00:00:00', 'Rapport texte', "Viande cat 1 - 5kg"),
(5, 3, 2, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 1 - 5kg"),
(6, 3, 2, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 1 - 5kg"),
(7, 3, 3, '2024-09-24 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(8, 3, 3, '2024-09-23 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(9, 3, 3, '2024-09-22 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(10, 4, 4, '2024-08-17 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(11, 4, 4, '2024-08-12 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(12, 4, 4, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(13, 4, 4, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(14, 3, 5, '2024-08-17 00:00:00', 'Rapport texte', "Fourrage - 5kg"),
(15, 3, 5, '2024-08-12 00:00:00', 'Rapport texte', "Fourrage - 5kg"),
(16, 3, 5, '2024-08-24 00:00:00', 'Rapport texte', "Fourrage - 5kg"),
(17, 3, 5, '2024-08-24 00:00:00', 'Rapport texte', "Fourrage - 5kg"),
(18, 3, 6, '2024-08-17 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(19, 3, 6, '2024-08-12 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(20, 3, 6, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg"),
(21, 3, 6, '2024-08-24 00:00:00', 'Rapport texte', "Viande cat 2 - 5kg");

-- Données de test pour la table image
INSERT INTO `image` (`id`, `animal_id`, `habitat_id`, `title`, `name`) VALUES
(1, 2, NULL, 'Dundy', '5980d8c1336c378a629a5da5a96902dd.webp'),
(2, 2, NULL, 'Dundy', '3b9d1008ecdcc0c09046a15b70c62eea.webp'),
(3, 2, NULL, 'Dundy', 'da5d45d55c96d92e986268290aa497da.webp'),
(4, 2, NULL, 'Dundy', '5acd69f31f284d71d861a9f688351c84.webp'),
(5, 3, NULL, 'Simba', '6519bb327d3465164dce9e312cdf1835.webp'),
(6, 3, NULL, 'Simba', '536805f7f281ee8ee6a8b1065f179119.webp'),
(7, 3, NULL, 'Simba', '02215a25ebce6aee574384ffd80ee9f3.webp'),
(8, 3, NULL, 'Simba', '6836e40835a5322b3bd1b91661dd9a4c.webp'),
(9, 3, NULL, 'Simba', '005e62a73ad7ac718c153d4873649a49.webp'),
(10, 3, NULL, 'Simba', 'c75e38c05d4e231a4fe020b68a493b80.webp'),
(11, 3, NULL, 'Simba', 'f2739b868d5614be66a4219d25c16fc3.webp'),
(12, 3, NULL, 'Simba', '0d10b57d0df21d5f9dfa5989ed480090.webp'),
(13, 1, NULL, 'Adèle', 'f5e2f08d020304546c7284c1199559ba.webp'),
(14, 1, NULL, 'Adèle', 'd3c529b8f0a6ea3ca760f55c28ab48e8.webp'),
(15, 1, NULL, 'Adèle', 'e334f7cc7b802e0471469180e56caddb.webp'),
(16, 1, NULL, 'Adèle', '7d1863aa6303a073b2408bec7f28e14f.webp'),
(17, 5, NULL, 'Zibrou', 'e0bade7dbcdacf3fb449189ec7eb712e.webp'),
(18, 5, NULL, 'Zibrou', '797a30293f8f7ca971f603c6d2c050a9.webp'),
(19, 5, NULL, 'Zibrou', 'e0bade7dbcdacf3fb449189ec7eb712e.webp'),
(20, 4, NULL, 'Sheila', '95ed91fc9b6097d19dcd40369d9bf40d.webp'),
(21, 4, NULL, 'Sheila', 'aed5b0223b5fb972266e0fabd642c279.webp');


