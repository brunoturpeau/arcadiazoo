# Manuel d'utilisation

## Présentation de l’application

## Identifiants de test

| IDENTIFIANT         | MOT DE PASSE | ROLE        |
|---------------------|--------------|-------------|
| admin@test.fr       | admin        | ADMIN       |
| employe@test.fr     | employe      | EMPLOYE     |
| veterinaire@test.fr | veterinaire  | VETERINAIRE |

## Installation du Backend

Clonez l'application sur votre poste de travail

```bash
git clone https://github.com/brunoturpeau/arcadiazoo_backend.git
```

Installez les dépendances

```bash
cd arcadiazoo_backend
composer install
npm install
```

Compilez les fichiers Tailwind

```bash
php bin/console tailwind:build
```

Créez un fichier .env.local

```bash
cp .env .env.local
```

Modifier la constante DATABASE_URL

```bash
DATABASE_URL="mysql://root:@127.0.0.1:3306/sf_arcadia_backend?serverVersion=8.0.32&charset=utf8mb4"
```

Créez la base de données et les tables

```bash
php bin/console console d:d:c
php bin/console console make:migration
php bin/console console d:m:m
```

Créez un jeu de données test

```bash
php bin/console doctrine:fixtures:load
```