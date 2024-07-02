"use client"

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
    const form = useRef();
    const [statusName, setStatusName] = useState(null)
    const [statusEmail, setStatusEmail] = useState(null)
    const [statusMessage, setStatusMessage] = useState(null)
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

    function handleEmailChange(e) {
        const value = e.target.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (value.match(emailRegex)) {
            setStatusEmail('valid')
        } else {
            setStatusEmail('invalid')
        }
    }

    function handleMessageChange(e) {
        const value = e.target.value
        if (value !== '') {
            setStatusMessage('valid')
        } else {
            setStatusMessage('invalid')
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
                    className={`mb-3 ${statusName === 'valid' ? 'bg-success ' : ''} ${statusName === 'invalid' ? 'bg-danger ' : ''}`}
                    onChange={handleNameChange}
                    type="text"
                    name="user_name"
                    required
                />
                <p
                    className={`text-[#ef4444] mb-5 text-sm ${statusName === 'invalid' ? '' : 'hidden'}`}
                >
                    Le champ nom doit contenir entre 3 et 30 caractères
                </p>
                <label className={`mb-1`}>
                    Votre adresse email
                </label>
                <input
                    className={`mb-3 ${statusEmail === 'valid' ? 'bg-success ' : ''} ${statusEmail === 'invalid' ? 'bg-danger ' : ''}`}
                    onChange={handleEmailChange}
                    placeholder="exemple@email.com"
                    type="email"
                    name="user_email"
                    required
                />
                <p
                    className={`text-[#ef4444] mb-5 text-sm ${statusEmail === 'invalid' ? '' : 'hidden'}`}
                >
                    L&apos;adresse email n&apos;est pas valide
                </p>
                <label className={`mb-1`}>Votre message</label>
                <textarea
                    className={`mb-3 ${statusMessage === 'valid' ? 'bg-success' : ''} ${statusMessage === 'invalid' ? 'bg-danger' : ''}`}
                    onChange={handleMessageChange}
                    name="message"
                    required
                />
                <p
                    className={`text-[#ef4444] mb-5 text-sm ${ statusMessage === 'invalid' ? '' : 'hidden'}`}
                >
                    Le champ message ne doit pas être vide.
                </p>
                <div className="flex">
                    <input className={`btn-primary w-[150px] mt-5`} type="submit" value="Envoyer"/>
                </div>
                <div className={`mt-5 p-5 rounded-md text-primary-dark ${sending === 'sent' ? 'bg-success' : ''} ${sending === 'error' ? 'bg-danger' : ''} `}>
                    {msg}
                </div>
            </form>
        </div>
    )
}