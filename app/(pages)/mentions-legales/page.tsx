import {Header} from "@/app/components/header";

export default function MentionsPage(){
    return(
        <>
            <Header title={`Mentions légales`} />
            <div className="container mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2>Hébergeur</h2>
                    </div>
                    <div>
                        <h2>&Eacute;diteur</h2>
                    </div>
                </div>
            </div>
        </>
    )
}