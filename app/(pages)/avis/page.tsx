import {Header} from "@/app/components/header"
import {COMMENTS_LIST} from "@/app/constants"
export default function AvisPage(){
    const comments : {id: number, pseudo: string, comment: string, date: string}[] = COMMENTS_LIST
    return (
        <>
            <Header title={`Vos commentaires`}/>
            <section className={`mt-12 pb-10 container relative z-[-1] mx-auto px-5`}>
                <div className="flex flex-col gap-5 lg:w-[800px] mx-auto">
                    {comments.map((comment :{id:number, pseudo: string, comment: string, date: string} ) => {
                        return (
                            <div key={comment.id}
                                 className={`bg-white drop-shadow-lg border-s-braun-alt border-s-4 p-4 pt-2`}>
                                <div className={`flex justify-between mb-3`}>
                                    <div className={`font-bold text-lg`}>
                                        {comment.pseudo}
                                    </div>
                                    <div className="flex justify-between">
                                        {comment.date}
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="primary"
                                         className="float-left fill-braun opacity-50 me-4 mb-1 w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                                    </svg>
                                    {comment.comment}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="primary"
                                         className="inline rotate-180 fill-braun opacity-50 ms-4 mt-1 w-8 h-8"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}