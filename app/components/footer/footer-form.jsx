export default function FooterForm() {
    return (
        <div className={`pb-5`}>
            <h3>Laissez votre avis</h3>
            <div className="trait"></div>
            <form action="#">
                <label className={`block mt-10 mb-2`} htmlFor="pseudo">Pseudo
                <input name={`pseudo`} className={`w-full mb-5`} type="text"/>
                </label>
                <label className={`block mb-2`} htmlFor="commentaire">Commentaire
                <textarea className={`w-full md:mb-2`} name="commentaire" id="inputCommentaire" cols="30"
                          rows="5"></textarea>
                </label>
                <div className="text-center">
                    <button className={`btn-primary`}>Envoyer</button>
                </div>
            </form>

        </div>
    )
}