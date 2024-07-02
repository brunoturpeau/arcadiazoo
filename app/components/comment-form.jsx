'use client'
import { useState } from 'react'
import DOMPurify from 'dompurify'

export const CommentForm = () => {
    const [statusPseudo, setStatusPseudo] = useState(null)
    const [statusMessage, setStatusMessage] = useState(null)
    const [contentPseudo, setContentPseudo] = useState('')
    const [contentMessage, setContentMessage] = useState('')
    const [msg, setMsg] = useState('')
    const [statusSend, setStatusSend] = useState('')


    function handlePseudoChange(e) {
        const value = e.target.value
        let valueLenght = value.length

        if (valueLenght > 2 && valueLenght < 21) {
            setStatusPseudo('valid')
            const cleanPseudoHTML = DOMPurify.sanitize(value)
            setContentPseudo(cleanPseudoHTML)
        } else {
            setStatusPseudo('invalid')
        }
    }

    function handleMessageChange(e) {
        const value = e.target.value
        if (value !== '') {
            setStatusMessage('valid')
            const cleanMessageHTML = DOMPurify.sanitize(value)
            setContentMessage(cleanMessageHTML)
        } else {
            setStatusMessage('invalid')
        }
    }
    function sendComment(e){
        e.preventDefault()
        confirm('Envoi du commentaire de ' + contentPseudo + ' - Contenu : ' + contentMessage )
        setMsg('Votre commentaire a été envoyé avec succès !')
        setStatusSend('sent')
    }

    return (
        <form onSubmit={sendComment}>
            <div className={`mt-5 p-5 rounded-md text-primary-dark bg-success ${ statusSend === 'sent' ? '' : 'hidden'} `}>
                {msg}
            </div>
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