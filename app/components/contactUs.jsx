"use client"

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import DOMPurify from 'dompurify'

export const ContactUs = () => {
    const form = useRef();
    const [statusName, setStatusName] = useState('initial')
    const [contentName, setContentName] = useState('')
    const [statusEmail, setStatusEmail] = useState('initial')
    const [contentEmail, setContentEmail] = useState('')
    const [statusMessage, setStatusMessage] = useState('initial')
    const [contentMessage, setContentMessage] = useState('')
    const [sending, setSending] = useState('')
    const [msg, setMsg] = useState('')

    function handleNameChange(e) {
        const value = e.target.value
        const cleanHTML = DOMPurify.sanitize(value)
        setContentName(cleanHTML)
        validateName()
    }
    const sendEmail = (e) => {
        e.preventDefault()

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
            );
    };

    return (
        <div className="md:w-3/4 mx-auto">
            <form className="flex flex-col"
                  ref={form}
                  onSubmit={sendEmail}>
                <label className={`mb-1`}>Votre nom</label>
                <input className={`mb-3`} type="text" name="user_name"/>
                <label className={`mb-1`}>Votre adresse email</label>
                <input className={`mb-3`} type="email" name="user_email"/>
                <label className={`mb-1`}>Votre message</label>
                <textarea className={`mb-10`} name="message"/>
                <input className={`btn-primary`} type="submit" value="Envoyer"/>
                <div className={`mt-5 p-5 rounded-md ${sending == 'sent' ? 'bg-yellow-alt text-primary-dark' : ''} `}>
                    {msg}
                </div>
            </form>
        </div>
    )
}