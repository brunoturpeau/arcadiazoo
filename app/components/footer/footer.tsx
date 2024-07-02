
import Link from "next/link"
import FooterEngagements from "@/app/components/footer/footerEngagements"
import FooterContact from "@/app/components/footer/footerContact"
import FooterForm from "@/app/components/footer/footerForm"

export function Footer(){
    return(
        <>
            <section id={`footer`} className={`bg-braun text-white py-5 px-5 md:px-0 lg:px-5`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5`}>
                    <FooterForm />
                    <FooterEngagements />
                    <FooterContact />
                </div>
            </section>
            <div className={`py-2 bg-dark text-light flex justify-center items-center text-sm`}>
                <span>Arcadia Zoo</span>
            </div>
        </>
    )
}