'use client'


export default function Page() {
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
            console.log(data); // Utilisez les données récupérées ici
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