import {Header} from "@/app/components/header";
import {ContactUs} from "@/app/components/contactUs";


export default function ContactPage(){
    return (
        <>
            <Header title={`Laissez-nous un message`}/>
            <div className="container mx-auto p-5">texte</div>
            <ContactUs />
        </>
    )
}