'use client'
import { useState } from 'react'
export const CommentForm = () => {
    const [statusPseudo, setStatusPseudo] = useState(null)
    const [statusMessage, setStatusMessage] = useState(null)
    const [contentPseudo, setContentPseudo] = useState('')
    const [contentMessage, setContentMessage] = useState('')

    function handlePseudoChange(e) {
        const value = e.target.value
        let valueLenght = value.length

        if (valueLenght > 2 && valueLenght < 21) {
            setStatusPseudo('valid')
            setContentPseudo(value)
        } else {
            setStatusPseudo('invalid')
        }
    }

    function handleMessageChange(e) {
        const value = e.target.value
        if (value !== '') {
            setStatusMessage('valid')
            setContentMessage(contentMessage)
        } else {
            setStatusMessage('invalid')
        }
    }
    function sendComment(e){
        e.preventDefault()
        confirm('Envoi du commentaire de ' + contentPseudo )
    }

    return (
        <form onSubmit={sendComment}>
            <label className={`block mt-10 mb-2`} htmlFor="pseudo">Pseudo</label>
            <input
                name={`pseudo`}
                onChange={handlePseudoChange}
                className={`w-full mb-5 ${statusPseudo === 'valid' ? 'bg-success ' : ''} ${statusPseudo === 'invalid' ? 'bg-danger ' : ''}`}
                type="text"
                required
            />
            <p
                className={`text-white mb-5 text-sm ${statusPseudo === 'invalid' ? '' : 'hidden'}`}
            >
                Le champ pseudo doit contenir entre 3 et 20 caractères
            </p>
            <label className={`block mb-2`} htmlFor="commentaire">Commentaire</label>
            <textarea
                className={`w-full md:mb-2 ${statusMessage === 'valid' ? 'bg-success' : ''} ${statusMessage === 'invalid' ? 'bg-danger' : ''}`}
                onChange={handleMessageChange}
                name="commentaire"
                id="inputCommentaire"
                cols={30}
                rows={5}
                required
            ></textarea>
            <p
                className={`text-white mb-5 text-sm ${statusMessage === 'invalid' ? '' : 'hidden'}`}
            >
                Le champ message ne doit pas être vide.
            </p>
            <div className="text-center mt-5">
                <button className={`btn-primary`}>Envoyer</button>
            </div>
        </form>
    )
}