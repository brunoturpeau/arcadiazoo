// @ts-ignore
export function Header({title}){
    return(
        <header
            className={`bg-[url('/img/jungle.jpg')] z-[-1] bg-no-repeat bg-center bg-cover relative w-full h-[200px] drop-shadow-lg md:bg-[url('/img/jungle-lg.jpg')] flex justify-center items-center`}>
            <h1 className={`h1`}>{title}</h1>
        </header>
    )
}