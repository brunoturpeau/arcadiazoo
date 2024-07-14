'use client'


import {useState} from "react";

export default function Page() {
    const [services, setServices] = useState(null)

    fetch('https://127.0.0.1:8000/api/services', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP : ' + response.status);
            }
            return response.json(); // Convertit la réponse en JSON
        })
        .then(data => {
            console.log(data['@id']);
            console.log(data['hydra:member'][0]);

        })
        .catch(error => {
            console.error('Erreur :', error);
        });

    return (
        <main>
            <h1>test</h1>
            {

            }
        </main>
    )
}