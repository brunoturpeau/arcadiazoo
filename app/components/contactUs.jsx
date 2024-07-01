"use client"

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import DOMPurify from 'dompurify'

export const ContactUs = () => {
    const form = useRef();
    const [statusName, setStatusName] = useState(null)
    const [statusEmail, setStatusEmail] = useState('initial')
    const [statusMessage, setStatusMessage] = useState('initial')
    const [sending, setSending] = useState('')
    const [msg, setMsg] = useState('')

    function handleNameChange(e) {
        const value = e.target.value
        let valueLenght = value.length

        if (valueLenght > 2 && valueLenght < 31) {
            setStatusName('valid')
        } else {
            setStatusName('invalid')
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()

        if (statusName === 'valid'){
            emailjs
                .sendForm('service_d3gpajb', 'template_a24ukvs', form.current, {
                    publicKey: '-t5FgOiZKn--PmunS',
                })
                .then(
                    () => {
                        setSending('sent')
                        setMsg('Votre message a été envoyé avec succès !')
                    },
                    (error) => {
                        console.log('FAILED...', error.text)
                        setSending('error')
                        setMsg('Une erreur est survenue !')
                    },
                )
        }else {
            setSending('error')
            setMsg('Une erreur est survenue !')
        }

    }

    return (
        <div className="md:w-3/4 mx-auto">
            <form className="flex flex-col"
                  ref={form}
                  onSubmit={sendEmail}>
                <label className={`mb-1`}>Votre nom</label>
                <input
                    className={`mb-3 ${statusName == 'valid' ? 'bg-success ' : ''} ${statusName == 'invalid' ? 'bg-danger ' : ''}`}
                    onChange={handleNameChange}
                    type="text"
                    name="user_name"
                    placeholder="Renseignez votre nom et votre prénom" required
                />
                <p
                    className={`text-[#ef4444] mb-5 text-sm ${statusName == 'invalid' ? '' : 'hidden' }`}
                >
                    Le champ nom doit contenir entre 3 et 30 caractères
                </p>
                <label className={`mb-1`}>
                    Votre adresse email
                </label>
                <input
                    className={`mb-3`}
                    placeholder="exemple@email.com" required
                    type="email"
                    name="user_email"
                />
                <label className={`mb-1`}>Votre message</label>
                <textarea className={`mb-10`} name="message"/>
                <div className="flex">
                    <input className={`btn-primary w-[150px]`} type="submit" value="Envoyer"/>
                </div>
                <div className={`mt-5 p-5 rounded-md ${sending == 'sent' ? 'bg-yellow-alt text-primary-dark' : ''} `}>
                    {msg}
                </div>
            </form>
        </div>
    )
}