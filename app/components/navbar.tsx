'use client';

import Link from 'next/link'
import { useState } from "react"
import {usePathname} from "next/navigation";
export function Navbar(){
    const [isMenuHide, setIsMenuHide] = useState(true)
    const pathname = usePathname()
    function toggleBtnMenu() {
        if (isMenuHide) {
            setIsMenuHide(false)
        } else {
            setIsMenuHide(true)
        }
        console.log("Toggle", isMenuHide)
    }

    function closeMenuMobile() {
        setIsMenuHide(true)
    }

    return (
        <nav className="drop-shadow-xl bg-primary text-light flex justify-between sm:px-4">
            <div className={`h-12 text-raleway font-bold flex items-center ps-5 text-lg`}>
                <Link className={`text-white border-e border-e-light border-e-1 pe-5`} href="/">ARCADIA ZOO</Link>
            </div>
            <ul id="ul-nav" className={isMenuHide ? `hidden ` : ``}>
                <li className={`li-nav`}>
                    <Link
                        className={`link ${pathname === '/' ? 'active' : ''}`}
                        onClick={closeMenuMobile}
                        href="/"
                    >
                        <span>Accueil</span>
                    </Link>
                </li>
                <li className={`li-nav`}>
                    <Link className={`link ${pathname === '/services' ? 'active' : ''}`}
                          onClick={closeMenuMobile}
                          href="/services">
                        <span>Services</span>
                    </Link>
                </li>
                <li className={`li-nav`}>
                    <Link className={`link ${pathname === '/habitats' ? 'active' : ''}`} onClick={closeMenuMobile}
                          href="/habitats">
                        <span>Animaux</span>
                    </Link>
                </li>
                <li className={`li-nav`}>
                    <Link className={`link ${pathname === '/avis' ? 'active' : ''}`} onClick={closeMenuMobile}
                          href="/avis">
                        <span>Commentaires</span>
                    </Link>
                </li>
                <li className={`li-nav`}>
                    <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMenuMobile}
                          href="/contact">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
            <button id={`btn-burger`} onClick={toggleBtnMenu} aria-label="btn-burger" className="sm:hidden me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="w-8 h-8" viewBox="0 0 16 16">
                    <path
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
        </nav>
    )
}