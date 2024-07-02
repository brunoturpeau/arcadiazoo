export default function FooterContact() {
    return (
        <div className={`text-center`}>
            <h3>Retrouvez-nous</h3>
            <div className="trait"></div>
            <h4 className={`my-5 font-semibold text-xl`}>Notre adresse</h4>
            <p>
                <b>Arcadia Zoo</b><br/>
                Forêt de Brocéliande<br/>
                35380 Paimpont
            </p>

            <h4 className={`my-5 font-semibold text-xl`}>Nos horaires</h4>
            <p className={`text-left ps-5`}>Zoo ouvert toute l&apos;année (jours fériés compris) de 9h à 19h du 1er
                avril au 30 septembre et de 9h à
                18h le reste de l&apos;année. </p>
            <p className={`text-left ps-5`}>Dernières entrées :<br/> 2h avant la fermeture du parc</p>

        </div>
    )
}