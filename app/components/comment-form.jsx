'use client'
export const CommentForm = () => {
    function sendComment(e){
        e.preventDefault()
        confirm('Envoi du commentaire')
    }

    return (
        <form onSubmit={sendComment}>
            <label className={`block mt-10 mb-2`} htmlFor="pseudo">Pseudo
                <input name={`pseudo`} className={`w-full mb-5`} type="text" required/>
            </label>
            <label className={`block mb-2`} htmlFor="commentaire">Commentaire
                <textarea
                    className={`w-full md:mb-2`}
                    name="commentaire"
                    id="inputCommentaire"
                    cols={30}
                    rows={5}
                    required
                ></textarea>
            </label>
            <div className="text-center">
                <button className={`btn-primary`}>Envoyer</button>
            </div>
        </form>
    )
}