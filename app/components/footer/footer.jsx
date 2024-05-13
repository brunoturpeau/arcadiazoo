import FooterForm from "./footer-form";
import FooterEngagement from "./footer-engagement";
import FooterContact from "./footer-contact";
import Link from "next/link";

export function Footer(){
    return(
        <>
            <section id={`footer`} className={`bg-braun text-white py-5 px-5 md:px-0 lg:px-5`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5`}>
                    <FooterForm />
                    <FooterEngagement />
                    <FooterContact />
                </div>
            </section>
            <div className={`py-2 bg-dark text-light flex justify-center items-center text-sm`}>
                <span>Arcadia Zoo -</span>
                <Link
                    className={`mx-1 hover:underline`}
                    href={`/mentions-legales`}
                    title={`Voir les mentions légales`}>
                    Mentions légales
                </Link>
                <span> - </span>
                <Link
                    className={`mx-1 hover:underline`}
                    href={`/credits-photos`}
                    title={`Voir les crédits photos`}>
                    Crédits photos
                </Link>
            </div>
        </>
    )
}